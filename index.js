document.getElementById("recipient").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevents the default form submission behavior

	// Get the value entered in the input field
	const firstName = document.getElementById("giftName").value.toLowerCase(); // Corrected ID to get the input value

	// Define paths to local HTML files based on different names
	let redirectPath = "";

	// Redirect logic based on different names
	switch (firstName) {
		case "austin":
		case "alex":
			redirectPath = "/austinAlex.html";
			break;
		case "marc":
		case "amy":
			redirectPath = "/dadAmy.html";
			break;
		case "ronda":
			redirectPath = "/mom.html";
			break;
		default:
			redirectPath = "/bobby.html";
			break;
	}

	// Redirect the user to the appropriate local HTML file
	if (redirectPath !== "") {
		window.location.href = redirectPath;
	}
});
