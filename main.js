function myForm() {
  //userName
  userName = document.getElementById("name").value;
  if (userName.match (/^(?=.{3,20}$)(?![_.])(?![0-9])[a-zA-Z0-9._]+(?<![_.])$/)) {
    textUser="";
    
  } else if (userName.length == 0 ) {
    textUser="لطفا نام کاربری را وارد نمایید";
  } else {
    textUser= "نام کاربری باید با حروف الفبا شروع شود و حداقل سه کاراکتر باشد";
  }
  document.getElementById("message").innerHTML=textUser;
  
  //ID-Code
  idNumber = document.getElementById("id-card").value;
  if (idNumber.match(!/^\d{10}$/)) {
    textCode = "کد ملی حداقل باید ۱۰ رقم باشد";
  } else if (idNumber.length == 0) {
    textCode = "لطفا کد ملی را وارد نمایید"
  } else {
    code = idNumber[9];
    console.log(code);
    var sum = 0;
    var i;
    for (i=0; i<9; i++) {
      sum+= idNumber[i] * (10 - i);
    }
    sum %=11;
    if ((sum < 2 && code == sum) || (sum >=2 && sum + code == 11) ) {
      textCode = "";
    }
    else {
      textCode = "کد ملی نامعتبر است";
    }
  }
  document.getElementById("id-message").innerHTML=textCode;

  //PHONE NUMBER
  phoneNumber = document.getElementById("phone").value;
  if (phoneNumber.match (/^\(?([0]{1})\)?([9]{1})?([0-9]{9})$/)) {
    textPhone = "";
  } else if (phoneNumber.length == 0) {
    textPhone = "لطفا شماره همراه خود را وارد نمایید"
  } else {
    textPhone = "شماره همراه نامعتبر است."
  }

  //PASSWORD
  inputPass = document.getElementById("pass").value;
  if (inputPass.match (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
    textPass = "";
  } else {
    textPass = "رمز عبور باید حداقل ۸ کاراکتر و شامل حروف کوچک بزرگ و عدد باشد";
  }
  document.getElementById("pass-message").innerHTML = textPass;
  //Confirm-Pass 
  confirmPass = document.getElementById("confirm-pass").value;
  if (inputPass === confirmPass) {
    confirmText = "";
  } else {
    confirmText = "عدم تطابق با رمز عبور";
  }
  document.getElementById("confirm-text").innerHTML = confirmText;
};
