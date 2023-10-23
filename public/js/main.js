const emailInput = document.getElementById('email');
const emailConfirmationInput = document.getElementById('email-confirm');
const contactForm = document.getElementById('contact-form');

function validateEmailMatch() {
  const { value: emailText } = emailInput;
  const { value: confirmationText } = emailConfirmationInput;

  if (emailText && confirmationText && emailText !== confirmationText) {
    errorMsg = 'Sorry, your email addresses don\'t match. Please try again.';
    alert(errorMsg);
    emailConfirmationInput.value = '';
  }
}

