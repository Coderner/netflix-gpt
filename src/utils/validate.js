export const checkValidateData = (fullName,email,password) =>{
  const error = {
    fullNameError:"",
    emailError:"", 
    passwordError:""
  }
  
  if(fullName===undefined)
     {}
  else if(!fullName)
     error.fullNameError = "Name can't be empty";
  else if(fullName.length<4)
     error.fullNameError = "Name is too short must be atleast 4 characters";

  if(!email)
     error.emailError = "Email can't be empty";
  else if(!(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)))
     error.emailError = "Invalid Email";

  if(!password)
     error.passwordError = "Password can't be empty";
  else if(password.length<8)
     error.passwordError = "Password must be atleast 8 charcters long";
  
  return error;
}