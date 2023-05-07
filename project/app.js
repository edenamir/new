function validatePassword(password) 
{
    const minLength = 6;
    const uppercaseRegex = /^(?=.*[A-Z]).+$/;
    const lowercaseRegex = /^(?=.*[a-z]).+$/;
    const numberRegex = /^(?=.*\d).+$/;
    const specialCharRegex = /^(?=.*[!@#$%^&*()\-_=+\\\|[\]{};:'",.<>\/?]).+$/;
  
    if (password.length < minLength) 
    {
      return 'Password must be at least 6 characters long.';
    }
  
    if (!uppercaseRegex.test(password)) 
    {
      return 'Password must include at least one uppercase character.';
    }
  
    if (!lowercaseRegex.test(password)) 
    {
      return 'Password must include at least one lowercase character.';
    }
  
    if (!numberRegex.test(password)) 
    {
      return 'Password must include at least one number.';
    }
  
    if (!specialCharRegex.test(password)) 
    {
      return 'Password must include at least one special character (!, @, #, $, %, ^, &, *, (, ), -, _, =, +, \\, |, [, ], {, }, ;, :, /, ?, ., >, <).';
    }
  
    return true;
}

  
function validateEmail(email) 
{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!emailRegex.test(email)) 
    {
      return 'Please enter a valid email address.';
    }
  
    return true;
}

function alertWithAllUserInput(email,password)
{
  window.alert("Email: " + email + "\nPassword: " + password);
}
  

// const form = document.getElementById('registration-form');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const emailError = document.getElementById('email-error');
// const passwordError = document.getElementById('password-error');

// form.addEventListener('submit', (event) => {
// // Prevent form submission
// event.preventDefault();

// // Validate email field
// const email = emailInput.value.trim();
// const emailValidationResult = validateEmail(email);
// if (emailValidationResult !== true) {
//     emailError.textContent = emailValidationResult;
//     return;
// }
// emailError.textContent = '';

// // Validate password field
// const password = passwordInput.value;
// const passwordValidationResult = validatePassword(password);
// if (passwordValidationResult !== true) {
//     passwordError.textContent = passwordValidationResult;
//     return;
// }
// passwordError.textContent = '';

// // If both fields are valid, submit the form
// form.submit();
// });
  

function validateAllFields(isSignUp)
{
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  if (emailInput == null|| passwordInput == null)
  {
    return;
  }
  const email = emailInput.value.trim();
  const emailValidationResult = validateEmail(email);


  if (emailValidationResult !== true) {
      window.alert(emailValidationResult);
      return;
  }

  // Validate password field
  const password = passwordInput.value;
  const passwordValidationResult = validatePassword(password);
  if (passwordValidationResult !== true) {
      window.alert(passwordValidationResult);
      return;
  }

  if (isSignUp == true)
  {
    const confirmation = document.getElementById("Confirmation").value;
    if (confirmation !== password)
    {
      window.alert("Password & Confirm password should match");
      return;
    }
  }

  alertWithAllUserInput(email,password);

}