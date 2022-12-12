function verification() {
    var unm = document.getElementById("usernm").value;
    var pw = document.getElementById("pswd").value;
    var cpw = document.getElementById("cpswd").value;
    var user = document.getElementById("e").value;
    var num= document.getElementById("pn").value;
  
    var reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var reg_username = /^[a-zA-Z]+$/;
    var strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  
    // check for valid email address
        var user2 = document.getElementById("e");
        var unm2 = document.getElementById("usernm");
        var passw1 = document.getElementById("pswd");
                     
    // check for username
    if(unm == "") {
      alert("Username Cannot be Empty!");
      return false;
    }
    if(num.length<10){
      alert("Please enter valid phone number");
      return false;
    }
    if(num.length>10){
      alert("Enter a valid number(avoid country code)");
      return false;
    }
    //check empty password field
    if(pw == "") {
      alert ("Password Cannot be Blank!"); 
      return false;
    }
    
   //minimum password length validation
    if(pw.length < 8) {
      alert ("Password Length is too short!");
      return false;
    }
  //maximum length of password validation
    if(pw.length > 15) {
       alert("Password length must not exceed 15 characters");
       return false;
    }
    if(cpw != pw){
      alert("Passwords Do Not Match!");
      return false;
    }
    // valid email
    if (reg_email.test(user)) {
              }
              else {
                alert("Invalid E-Mail");
                  user2.style.border = "maroon solid 3px";
                  return false;
              }
    //check for valid username
      if (reg_username.test(unm)) {
      } else {
        unm2.style.border = "maroon solid 3px";
        return false;
      }
  }
      //password strength
      if(strongPassword.test(pw)) {
          passw1.style.border = "blue solid 3px";
      } else {
          passw1.style.border = 'red solid 3px';
      }
      document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      function setCookie()
      {
      var now = new Date();
      now.setMonth( now.getMonth() - 1 );
      cookievalue1 = escape(document.myform.customer.value) + ";"
      cookievalue2 = escape(document.myform.age.value) + ";"
      
      document.cookie = "name=" + cookievalue1;
      document.cookie = "expires=" + now.toUTCString() + ";"
      document.cookie = "age=" + cookievalue2;
      document.cookie = "expires=" + now.toUTCString() + ";"
      document.write ("\nSetting Cookies : " + "name=" + cookievalue1 + "expires=" + now.toUTCString());
      document.write ("\nSetting Cookies : " + "age=" + cookievalue2 );
      }
      function display()  
      {  
          var value = document.getElementById("color").value;  
          if (value != "Select Color")  
          {  
              document.bgColor = value;  
              document.cookie = "color=" + value;  
          }  
      }  
      
      function getcookie()
      { 
          var allcookies = document.cookie;
          document.write ("All Cookies : " + allcookies );
          
          // Get all the cookies pairs in an array
          cookiearray = allcookies.split(';');
          
          // Now take key value pair out of this array
          for(var i=0; i<cookiearray.length; i++) {
             name = cookiearray[i].split('=')[0];
             value = cookiearray[i].split('=')[1];
             document.write ("\nKey is : " + name + " and Value is : " + value);
          }
      }
      
      function deleteCookie()  
      {  
          document.cookie=cookievalue1+";max-age=0"; 
          cookievalue1=document.cookie;  
          document.cookie=cookievalue2+";max-age=0"; 
          cookievalue2=document.cookie;
        alert("Cookies is deleted");  
      }  