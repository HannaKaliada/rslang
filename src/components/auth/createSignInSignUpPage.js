import createElement from '../../shared/createElement';

createForm() {
  const passwordAttrs = [['type', 'password'], ['name', 'password'], ['placeholder', 'Password']];
  const emailAttrs = [['type', 'email'], ['name', 'email'], ['placeholder', 'e-mail']];
  const form = createElement('form', 'sign-in-form');
  const email = createElement('input', 'sign-in-form__name', emailAttrs);
  const password = createElement('input', 'sign-in-form__password', passwordAttrs);
  form.append(email,Password);
}

createSignInSignUpPage() {
  const root = document.querySelector('.root');

}
