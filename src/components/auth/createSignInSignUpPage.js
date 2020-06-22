import createElement from '../../shared/createElement';

class CreateSignInSignUpPage {
  constructor(func) {
    this.createElement = func;
    this.passwordTipText = 'Password must contain at least 8 characters, at least one uppercase letter, one uppercase letter, one number and one special character from "+-_@$!%*?&#.,;:[]{}]."';
  }

  formHandler(e) {
    e.preventDefault();
    if (!this.passwordCheck()) {
      this.password.focus();
    }
  }

  passwordCheck() {
    const passValidRegExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\+\-_@$!%*?&#\.,;\:\[\]\{\}])[A-Za-z\d\+\-_@$!%*?&#\.,;\:\[\]\{\}]{8,}$/);
    return !!this.password.match(passValidRegExp);
  }

  showPasswordTip() {
    if (this.submit.value === 'Sign up') {
      this.passwordTip = this.createElement('div', 'password-tip');
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

  toggleSingInSignUpForm(e) {
    e.preventDefault();
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
    const toggleButton = this.createElement('button', ['btn', 'sign-in-form__toggle-btn']);
    toggleButton.innerText = 'Already have an account';
    toggleButton.addEventListener('click', this.toggleSingInSignUpForm.bind(this));
    return toggleButton;
  }

  createSubmitButton() {
    const submitAttrs = [['type', 'submit']];
    this.submit = this.createElement('input', ['btn', 'sign-in-form__submit'], submitAttrs);
    this.submit.value = 'Sign up';
    return this.submit;
  }

  createForm() {
    const passwordAttrs = [['type', 'password'], ['name', 'password'], ['placeholder', 'Password']];
    const emailAttrs = [['type', 'email'], ['name', 'email'], ['placeholder', 'e-mail']];
    const form = this.createElement('form', 'sign-in-form');
    const emailLabel = this.createElement('label', 'sign-in-form__label');
    emailLabel.innerText = 'Login';
    const email = this.createElement('input', 'sign-in-form__name', emailAttrs);
    const passwordLabel = this.createElement('label', 'sign-in-form__label');
    passwordLabel.innerText = 'Password';
    this.password = this.createElement('input', 'sign-in-form__password', passwordAttrs);
    this.password.addEventListener('focus', this.showPasswordTip.bind(this));
    this.password.addEventListener('blur', this.hidePasswordTip.bind(this));
    const formElements = [this.createTitle(), emailLabel, email, passwordLabel];
    formElements.push(this.password, this.createSubmitButton(), this.createToggleFormButton());
    form.append(...formElements);
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
