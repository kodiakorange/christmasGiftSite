document.getElementById("giftName").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevents the default form submission behavior

	// Get the value entered in the input field
	const firstName = document.getElementById("giftName").value.toLowerCase(); // Convert input to lowercase for comparison

	// Define URLs based on different names
	let redirectUrl = "";

	// Redirect logic based on different names
	switch (firstName) {
		case "austin":
		case "alex":
			redirectUrl = "https://kodiakorange.github.io/christmasGiftSite/austinAlex.html";
			break;
		case "marc":
		case "amy":
			redirectUrl = "https://kodiakorange.github.io/christmasGiftSite/dadAmy.html";
			break;
		case "ronda":
			redirectUrl = "https://kodiakorange.github.io/christmasGiftSite/mom.html";
			break;

		default:
			redirectUrl = "https://kodiakorange.github.io/christmasGiftSite/bobby.html";
			break;
	}

	// Redirect the user to the appropriate URL
	if (redirectUrl !== "") {
		window.location.href = redirectUrl;
	}
});
