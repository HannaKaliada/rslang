import createElement from '../../shared/createElement';

class CreateSignInSignUpPage {
  constructor(func) {
    this.createElement = func;
  }

  formHandler(e) {
    e.preventDefault();
    async function loginUser (user) {
      const response = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((answer) => answer.json())
        .then((obj) => {
          state.token = obj.token;
          state.id = obj.id;
          console.log(state.token);
        })
        .catch((err) => console.log(err));
      return response;
    }
    this.passwordCheck();
    const email = document.querySelector('.sign-in-form__name').value;
  }

  passwordCheck() {

  }

  createTitle() {
    this.title = this.createElement('h2', 'auth-page__title');
    this.title.innerText = 'Create an account';
    return this.title;
  }

  toggleSingInSignUpForm(e) {
    if (e.target.value === 'Already have an account') {
      e.target.value = 'Create an account';
      this.submit.value = 'Sign in';
      this.title = 'Sign in to RS Lang';
    } else {
      e.target.value = 'Already have an account';
      this.submit.value = 'Sign up';
      this.title = 'Create an account';
    }
  }

  createToggleFormButton() {
    const toggleButton = this.createElement('button', 'btn,sign-in-form__toggle-btn');
    toggleButton.innerText = 'Already have an account';
    toggleButton.addEventListener('click', this.toggleSingInSignUpForm.bind(this));
    return toggleButton;
  }

  createSubmitButton() {
    const submitAttrs = [['type', 'submit']];
    this.submit = this.createElement('input', 'btn,sign-in-form__submit', submitAttrs);
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
    const formElements = [this.createTitle(), emailLabel, email, passwordLabel, this.password, this.createSubmitButton(), this.createToggleFormButton()];
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
