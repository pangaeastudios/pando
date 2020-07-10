function disableScroll(){
	window.scrollTo(0,0);
}

function introAnimations(){
	createCookie("Registration", "1", Date.UTC(2020,6,14));

	var landingLogo = document.getElementById("landing-logo");
	var landingSlogan = document.getElementById("landing-slogan");
	var landingTitle = document.getElementById("landing-title");
	var landingApp = document.getElementById("landing-appstore");
	var landingDevices = document.getElementById("landing-devices");
	var navbar = document.getElementById("navbar");

	if(window.innerWidth <= 900)
	{
		window.addEventListener("scroll",disableScroll);
		setTimeout(function(){
			landingLogo.setAttribute("style","opacity: 1;");
		},1000);
		setTimeout(function(){
			landingSlogan.setAttribute("style","opacity: 1;");
		},2000);
		setTimeout(function(){
			landingTitle.setAttribute("style","opacity: 1;");
		},3000);
		setTimeout(function(){
			landingApp.setAttribute("style","opacity: 1;");
		},4000);
		setTimeout(function(){
			landingDevices.setAttribute("style","opacity: 1;");
		},4000);
		setTimeout(function(){
			navbar.setAttribute("style","opacity: 1;");
			window.removeEventListener("scroll",disableScroll);
		},4000);
	} else {
		landingLogo.setAttribute("style","opacity: 1;");
		landingSlogan.setAttribute("style","opacity: 1;");
		landingTitle.setAttribute("style","opacity: 1;");
		landingApp.setAttribute("style","opacity: 1;");
		landingDevices.setAttribute("style","opacity: 1;");
		navbar.setAttribute("style","opacity: 1;");
	}
};

function fadeIn(ElementID)
{
	document.getElementById(ElementID).setAttribute("style","opacity: 1;");
}

// Added stuff (Maxym)...............................................................................................
var partnerList = document.getElementsByClassName("partner-list");
var fadingBottom = document.getElementsByClassName('bottom-fading');
var seeMore = document.getElementsByClassName('see-more');
var clickMore = document.getElementsByClassName('click-more');
var clickMore2 = document.getElementsByClassName('click-more2');

function enlargePartnerList() {
	partnerList[0].setAttribute("style", "height: 100%");
	fadingBottom[0].setAttribute("style", "opacity: 0");
	seeMore[0].setAttribute("style", "opacity: 0");
	clickMore[0].setAttribute("style", "display: none");
	clickMore2[0].setAttribute("style", "display: block");
}

function enlargePartnerList2() {
	partnerList[0].setAttribute("style", "height: 50vh");
	fadingBottom[0].setAttribute("style", "display: block");
	seeMore[0].setAttribute("style", "opacity: 1");
	clickMore[0].setAttribute("style", "display: block");
	clickMore2[0].setAttribute("style", "display: none");
}


//------------------------------------------------------------------------------------------
//Create Account Stuff//------------------------------

function createAccount(step){
	switch(step){
		case "1":
			var input = document.getElementById("create-account-input");
			var text = document.getElementById("fade-text");
			var button = document.getElementById("create-account-button");
		
			setTimeout(function(){
				text.setAttribute("style","opacity: 1");
			},1000);
		
			setTimeout(function(){
				input.setAttribute("style","opacity: 1");
			},2000);
		
			setTimeout(function(){
				text.setAttribute("style","opacity: 0");
				setTimeout(function(){
					text.innerHTML = "Start by telling us your name.";
				},1000);
			},3000);
		
			setTimeout(function(){
				text.setAttribute("style","opacity: 1");
			},5000);
		
			setTimeout(function(){
				button.setAttribute("style","opacity: 1");
			},6000);
			break;
		case "2":
			var input = document.getElementById("create-account-input");
			var text = document.getElementById("fade-text");
			var button = document.getElementById("create-account-button");

			text.setAttribute("style","opacity: 0");
			input.setAttribute("style", "opacity: 1");
			input.setAttribute("type", "date");
			input.setAttribute("min", "1900-01-01");

			button.setAttribute("style", "opacity: 1");

			setTimeout(function(){
				var name = readCookie("Name");
				var message = "Nice to meet you, " + name + "!"
				text.innerHTML = message;
			}, 1000);

			setTimeout(function(){
				text.setAttribute("style", "opacity: 1");
			},2000);

			setTimeout(function(){
				text.setAttribute("style","opacity: 0");
				setTimeout(function(){
					text.innerHTML = "When is your birthday?";
				},1000);
			},4000);

			setTimeout(function(){
				text.setAttribute("style","opacity: 1");
			},5000);

			break;
		case "3":
			var input = document.getElementById("create-account-input");
			var input2 = document.getElementById("create-account-input-2");
			var text = document.getElementById("fade-text");
			var button = document.getElementById("create-account-button");

			inputClear("create-account-input");

			text.setAttribute("style","opacity:0");
			input.setAttribute("type", "password");
			input2.setAttribute("type", "password");
			input.setAttribute("placeholder", "Enter Password");
			input2.setAttribute("placeholder", "Confirm Password");
			input.setAttribute("style", "opacity: 1");
			button.setAttribute("style", "opacity: 1");

			var birthday = readCookie("Birthday");
			var today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = String(today.getFullYear());

			var todayDate = [yyyy,mm,dd];
			var userBirthday = birthday.split("-");
			var age = todayDate[0] - userBirthday[0];

			setTimeout(function(){
				var message = "Awesome! " + age + " years young!";
				text.innerHTML = message;
			}, 1000);

			setTimeout(function(){
				text.setAttribute("style","opacity: 1");
			},2000);

			setTimeout(function(){
				text.setAttribute("style","opacity: 0");
				setTimeout(function(){
					text.innerHTML = "Let's keep this information safe!";
				},1000);
			},4000);

			setTimeout(function(){
				text.setAttribute("style","opacity: 1");
			},5000);
	}
}

function createCookie(key, value, date) {
	var expiration = new Date(date).toUTCString();
	var cookie = escape(key) + "=" + escape(value) + ";expires=" + expiration + ";";
	document.cookie = cookie;
	console.log(cookie);
	console.log("Creating new cookie with key: " + key + " value: " + value + " expiration: " + expiration);
}

function deleteCookie(name)
{
	createCookie(name, "", -1);
}

function readCookie(name) {
	var key = name + "=";
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1, cookie.length);
		}
		if (cookie.indexOf(key) === 0) {
			return cookie.substring(key.length, cookie.length);
		}
	}
	return null;
}

function registNext(){
	var input = $("#create-account-input").val();
	var expDate = Date.UTC(2020,6,14);

	switch(readCookie("Registration")){
		case "1":
			if(input.length > 0)
			{
				deleteCookie("Registration");
				createCookie("Registration", "2", expDate);
				createCookie("Name", input, expDate);

				console.log(readCookie("Registration"));

				createAccount("2");
			} else {
				inputError("create-account-input","Don't be shy!");
			}
			break;
		case "2":
			deleteCookie("Registration");
			createCookie("Registration", "3", expDate);
			createCookie("Birthday", input, expDate);
			createAccount("3");
	}
}

function inputError(inputID, errorMessage)
{
	document.getElementById(inputID).setAttribute("style","border: 2px solid red");
	$("#error-message").css("display", "block");
	$("#error-message").html(errorMessage);
}

function inputClear(inputID)
{
	$("#create-account-input").val("");
	document.getElementById(inputID).setAttribute("style","border: 2px solid white");
	$("#error-message").css("display", "none");
}

function sanitize(event){
	console.log(event.keyCode);
}