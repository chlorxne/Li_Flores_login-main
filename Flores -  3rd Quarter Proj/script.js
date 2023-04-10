function Login() {
	var username = document.forms["loginForm"]["username"].value;
	var password = document.forms["loginForm"]["password"].value;
		
		if (username == "" && password == "") {
			alert("Please enter a username and password.");
			return false;
		}

		if (username == "") {
			alert("Please enter a username.");
			return false;
		}

		if (password == "") {
			alert("Please enter a password.");
			return false;
		}

		else  if (username != "" && password != ""){
        window.location.href = "Main/index.html";
    }

}