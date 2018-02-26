class FormValidation {
  constructor() {
    this.$fields = $('input');
    this.$form = $('form');
    this.listenForInputs();
    this.listenForSubmit();
    this.listenForKeypress();
    this.listenForKeyupOnCreditCard();
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
      e.preventDefault();
      if (this.anyInvalid()) {
        this.displayFormError("Form cannot be submitted until errors are corrected.");
        $('input:invalid').each((idx, el) => {
          this.displayError(el);
          this.displayBorder(el);
        })
      } else {
        this.submit();
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
      }
      if (!key.match(pattern)) {
        e.preventDefault();
      }
    });
  }

  listenForKeyupOnCreditCard() {
    $('.go-to-next').on('keyup', (e) => {
      const el = e.target;
      const FIELD_LENGTH = 4;
      if (el.value.length == FIELD_LENGTH) {
        $(el.nextElementSibling).focus();
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

  initializeDataObj() {
    this.data = {};
    this.$fields.each((i, el) => {
      this.data[el.name] = "";
    })
  }

  fillDataObj() {
    this.initializeDataObj();
    this.$fields.each((idx, el) => {
      this.data[el.name] += el.value;
    });
    return this.data;
  }

  dataString() {
    this.fillDataObj();
    let pairs = Object.keys(this.data).map((name) => {
      return encodeURIComponent(name) + '=' + encodeURIComponent(this.data[name])
    })
    return pairs.join('&');
  }

  submit() {
    $('#submitted_data').text(this.dataString());
  }

  fill() {                             // for testing
    $('#first_name').val('Kristen');
    $('#last_name').val('Wilde');
    $('#email').val('hey@you');
    $('#password').val('1234567890');
    $('#phone').val('999-888-7777');
    $('[name=card]').eq(0).val('1111');
    $('[name=card]').eq(1).val('2222');
    $('[name=card]').eq(2).val('3333');
    $('[name=card]').eq(3).val('4444');
  }
}