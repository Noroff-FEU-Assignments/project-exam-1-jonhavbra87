const Name = document.querySelector("#Name");
const NameError = document.querySelector("#NameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phone");
const story = document.querySelector("#story");
const storyError = document.querySelector("#storyError");

function NameValidator() {
    if (checkLength(Name.value, 4) === true) {
      NameError.style.display = "none";
      return true;
    } else {
      NameError.style.display = "block";
      return false;
    }
  }
  
  function phoneNumberValidator() {
    if (checkLength(phone.value.trim(), 7) === true) {
      phoneError.style.display = "none";
      return true;
    } else {
      phoneError.style.display = "block";
      return false;
    }
  }
  
  function emailValidator() {
    if (validateEmail(email.value) === true) {
      emailError.style.display = "none";
      return true;
    } else {
      emailError.style.display = "block";
      return false;
    }
  }
  
  function storyValidator() {
    if (checkLength(story.value, 24) === true) {
      storyError.style.display = "none";
      return true;
    } else {
      storyError.style.display = "block";
      return false;
    }
}

  //Function that makes the user get a error one at a time:
  // export function formValidator(event) {
  //   if (
  //     !firstNameValidator() ||
  //     !lastNameValidator() ||
  //     !phoneNumberValidator() ||
  //     !emailValidator()
  //   ) {
  //     event.preventDefault();
  //   }
  // }

export function formValidator(event) {
    const Name = NameValidator(); 
    const phoneNumber = phoneNumberValidator(); 
    const email = emailValidator(); 
    const validStory = storyValidator();

    if (!Name || !phoneNumber || !email || !validStory){
        event.preventDefault(); 
    }
}


  function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /^\S+@\S+.\S+$/;
    const patternMatches = regEx.test(email);
    //console.log(typeof patternMatches);
    return patternMatches;
}

const inputs = document.querySelectorAll(".contact input");
inputs.forEach(input => {
  input.addEventListener("change", formValidator)
  input.addEventListener("blur", formValidator)
})


