// On blur, check input. If invalid, 
//   - display error message containing the name of the field
//.  - give input a red border.
// On focus, message should disappear. (and red border disappears)
//.On submit if there are validation errors, 
//.  - do not submit.
//.  - form error message "Form cannot be submitted until errors are corrected"
// When all fields are corrected, form message should disappear

function FormValidation() {
  this.$fields = $('input');
  this.$form = $('form');
}

FormValidation.prototype.init = function() {
  this.listenForInputs();
  this.listenForSubmit();
};

FormValidation.prototype.listenForInputs = function() {
  this.$form.on('blur', 'input', (e) => { // 'this' is the FormValidation object
    const el = e.target;
    this.displayError(el);
    this.displayBorder(el);
    if (!this.anyInvalid()) { 
      console.log('all valid!');
      this.formErrorMsg(' '); 
    }
  });
}

FormValidation.prototype.listenForSubmit = function() {
  this.$form.on('submit', (e) => {
    if (this.anyInvalid()) {
      e.preventDefault();
      this.formErrorMsg("Form cannot be submitted until errors are corrected.");
      $('input:invalid').each((idx, el) => {
        this.displayError(el);
        this.displayBorder(el);
      })
    }
  });
};

FormValidation.prototype.formErrorMsg = function(msg) {
  $('p.form_error').text(msg);
}

FormValidation.prototype.anyInvalid = function() {
  return $('input:invalid').length > 0;
}

FormValidation.prototype.displayBorder = function(el) {
  $(el).toggleClass('invalid', !el.validity.valid);
}

FormValidation.prototype.displayError = function(el) {
  const $label = $(`label[for=${el.id}]`);
  const message = this.errorMessage(el, $label);
  console.log(message);
  $label.find('.error').text(message);
}

FormValidation.prototype.errorMessage = function(el, $label) {
  const fieldName = $label.text().split('*')[0].trim();
  if (el.validity.valueMissing) { return `${fieldName} is a required field.`}
  if (el.validity.patternMismatch) { 
    if (el.id === 'phone') { 
      return 'Please enter 10-digit phone number separated with dashes (-)';
    } else {
      return `Please enter a valid ${fieldName}.`
    }
  }
  if (el.validity.tooShort) { return 'Password must be at least 10 characters long.' }
  else { return '' }
}

$(() => {
  new FormValidation().init();
});