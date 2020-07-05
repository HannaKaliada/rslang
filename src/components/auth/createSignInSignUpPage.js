import createElement from '../../shared/createElement';

class CreateSignInSignUpPage {
  constructor(func) {
    this.createElement = func;
    this.passwordTipText = 'Password must contain at least 8 characters, at least one uppercase letter, one uppercase letter, one number and one special character from "+-_@$!%*?&#.,;:[]{}]."';
  }

  formHandler(e) {
    e.preventDefault();
    if (!this.passwordCheck()) {
      this.password.classList.add('invalid-password');
      this.password.focus();
    }
    return false;
  }

  passwordCheck() {
    const passValidRegExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\+\-_@$!%*?&#\.,;\:\[\]\{\}])[A-Za-z\d\+\-_@$!%*?&#\.,;\:\[\]\{\}]{8,}$/);
    return !!this.password.value.match(passValidRegExp);
  }

  enterNewPassword() {
    this.password.classList.remove('invalid-password');
  }

  showPasswordTip() {
    if (this.submit.value === 'Sign up') {
      this.passwordTip.style.left = `${this.password.offsetLeft}`;
      this.passwordTip.style.top = `${this.password.offsetHeight + this.password.offsetTop}px`;
      this.passwordTip.style.display = 'block';
      this.passwordTip.innerText = this.passwordTipText;
      const form = document.querySelector('.sign-in-form');
      form.append(this.passwordTip);
    }
  }

  hidePasswordTip() {
    this.passwordTip.style.display = 'none';
  }

  createTitle() {
    this.title = this.createElement('h2', 'auth-page__title');
    this.title.innerText = 'Create an account';
    return this.title;
  }

  createPasswordLabel() {
    const passwordLabel = this.createElement('label', 'sign-in-form__label');
    passwordLabel.innerText = 'Password';
    return passwordLabel;
  }

  createEmail() {
    const emailAttrs = [['type', 'email'], ['name', 'email'], ['placeholder', 'e-mail']];
    const email = this.createElement('input', 'form-control', emailAttrs);
    return email;
  }

  createEmailLabel() {
    const emailLabel = this.createElement('label', 'sign-in-form__label');
    emailLabel.innerText = 'Login';
    return emailLabel;
  }

  createPassword() {
    const passwordAttrs = [['type', 'password'], ['name', 'password'], ['placeholder', 'Password']];
    this.password = this.createElement('input', 'form-control', passwordAttrs);
    this.password.addEventListener('focus', this.showPasswordTip.bind(this));
    this.password.addEventListener('blur', this.hidePasswordTip.bind(this));
    this.password.addEventListener('keydown', this.enterNewPassword.bind(this));
    return this.password;
  }

  toggleSingInSignUpForm(e) {
    e.preventDefault();
    this.password.classList.remove('invalid-password');
    if (e.target.innerText === 'Already have an account') {
      e.target.innerText = 'Create an account';
      this.submit.value = 'Sign in';
      this.title.innerText = 'Sign in to RS Lang';
    } else {
      e.target.innerText = 'Already have an account';
      this.submit.value = 'Sign up';
      this.title.innerText = 'Create an account';
    }
  }

  createToggleFormButton() {
    const toggleButton = this.createElement('button', ['btn', 'btn-default']);
    toggleButton.innerText = 'Already have an account';
    toggleButton.addEventListener('click', this.toggleSingInSignUpForm.bind(this));
    return toggleButton;
  }

  createSubmitButton() {
    const submitAttrs = [['type', 'submit']];
    this.submit = this.createElement('input', ['btn', 'btn-primary'], submitAttrs);
    this.submit.value = 'Sign up';
    return this.submit;
  }

  createFormBlock(label, input) {
    const block = this.createElement('div', 'form-group');
    block.append(label, input);
    return block;
  }

  createForm() {
    const form = this.createElement('form', 'sign-in-form');
    this.passwordTip = this.createElement('div', 'password-tip');
    const emailBlock = this.createFormBlock(this.createEmailLabel(), this.createEmail());
    const passwordBlock = this.createFormBlock(this.createPasswordLabel(), this.createPassword());
    const formElements = [this.createTitle(), emailBlock, passwordBlock,
      this.passwordTip, this.createSubmitButton(), this.createToggleFormButton()];
    form.append(...formElements);
    form.addEventListener('submit', this.formHandler.bind(this));
    return form;
  }

  init() {
    const root = document.querySelector('.root');
    const container = this.createElement('div', 'container');
    container.append(this.createForm());
    root.append(container);
  }
}

const createSignInSignUpPage = new CreateSignInSignUpPage(createElement);

export default createSignInSignUpPage;
