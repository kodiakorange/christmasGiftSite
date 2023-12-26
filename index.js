document.getElementById("recipient").addEventListener("submit", function (event) {
	event.preventDefault();

	const firstName = document.getElementById("giftName").value.toLowerCase(); // Corrected ID to get the input value

	// Define paths to local HTML files based on different names
	let redirectPath = "";

	// Redirect logic based on different names
	switch (firstName) {
		case "joe":
		case "joseph":
		case "big dicked mentor":
			redirectPath = "././joe.html";
			break;

		case "austin":
			redirectPath = "././austin.html";
			break;

		case "alex":
			redirectPath = "././alex.html";
			break;
		case "marc":
		case "dad":
		case "amy":
			redirectPath = "././dadAmy.html";
			break;
		case "ronda":
		case "mom":
			redirectPath = "././mom.html";
			break;
		case "trent":
		case "trenton":
		case "tbone":
		case "taesar":
			redirectPath = "././trenton.html";
			break;
		case "max":
		case "sejla":
			redirectPath = "././maxSejla.html";
			break;
		case "grandma":
		case "bev":
		case "beverly":
			redirectPath = "././grandma.html";
			break;
		default:
			redirectPath = "././bobby.html";
			break;
	}

	// Redirect the user to the appropriate local HTML file
	if (redirectPath !== "") {
		window.location.href = redirectPath;
	}
});
