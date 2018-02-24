class FormValidation {
  constructor() {
    this.$fields = $('input');
    this.$form = $('form');
    this.listenForInputs();
    this.listenForSubmit();
    this.listenForKeypress();
  }

  listenForInputs() {
    this.$form.on('blur', 'input', (e) => { // 'this' is the FormValidation object
      const el = e.target;
      if (el.name === 'card') {
        return;
      }
      this.displayError(el);
      this.displayBorder(el);
      if (!this.anyInvalid()) { 
        this.displayFormError(''); 
      }
    });
  }
  
  listenForSubmit() {
    this.$form.on('submit', (e) => {
      if (this.anyInvalid()) {
        e.preventDefault();
        this.displayFormError("Form cannot be submitted until errors are corrected.");
        $('input:invalid').each((idx, el) => {
          this.displayError(el);
          this.displayBorder(el);
        })
      }
    });
  };

  listenForKeypress() {
    this.$form.on('keypress', 'input', (e) => {
      const el = e.target;
      const key = e.key;
      let pattern = /./;
      if (el.id == 'first_name' || el.id == 'last_name') {
        pattern = /[A-Za-z '\-]+/;
      } else if (el.id == 'phone') {
        pattern = /[\d-]/;
      } else if (el.getAttribute('name') == 'card') {
        pattern = /\d/;
        if (el.value.length >= 4) {
          e.preventDefault();
        }
      }
      if (!key.match(pattern)) {
        e.preventDefault();
      }
    });
  }

  anyInvalid() {
    return $('input:invalid').length > 0;
  }

  displayFormError(msg) {
    $('p.form_error').text(msg);
  }

  displayError(el) {
    const $label = $(`label[for=${el.id}]`);
    const message = this.errorMessage(el, $label);
    $label.find('.error').text(message);
  }

  errorMessage(el, $label) {
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

  displayBorder(el) {
    $(el).toggleClass('invalid', !el.validity.valid);
  }
}

$(() => {
  new FormValidation();
});