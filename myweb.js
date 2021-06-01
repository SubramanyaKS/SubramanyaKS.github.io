function validation(){
	var name = document.getElementById("name").value;
	var suject = document.getElementById("subject").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_msg = document.getElementById("error message").value;
	error_msg.style.padding="10px";
	if(name.length<4){
		text="Please enter Valid Name";
		error_msg.innerHTML=text;
		returnfalse;
	}
	
	if(subject.length<6){
		text="Please enter correct Subject";
		error_msg.innerHTML=text;
		returnfalse;
	}
	
	if(email.indexOf("@")==-1 || email.length<6){
		text="Please enter Valid Email";
		error_msg.innerHTML=text;
		returnfalse;
	}
	
	if(message.length <= 20){
		text="please Enter  more than 20 characters";
		error_msg.innerHTML=text;
		returnfalse;
	}
	alert("Form Submitted Success");
	return true;
		
}
function send(event) {
        event.preventDefault();           
        Email.send({
          name:document.getElementById('name').value,    
          Host : "smtp.gmail.com",
          Username : "connectwithsubbu@gmail.com",
          Password : "Subbu@12345",
          To : "connectwithsubbu@gmail.com",
          From : document.getElementById('email').value,
          Subject : document.getElementById('subject').value,
          Body : document.getElementById('message').value
          }).then(function(response){ 
           if (response == 'OK') {              
               alert("Mail sent succeessfully");
            } else {
                throw new Error("Error: " + response.statusText);
            } 
         });
 
    }    