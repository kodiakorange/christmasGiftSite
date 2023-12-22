document.getElementById("giftName").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevents the default form submission behavior

	// Get the value entered in the input field
	const firstName = document.getElementById("giftName").value.toLowerCase(); // Convert input to lowercase for comparison

	// Define URLs based on different names
	let redirectUrl = "";

	// Redirect logic based on different names
	switch (firstName) {
		case "john":
			redirectUrl = "https://example.com/john";
			break;
		case "emma":
			redirectUrl = "https://example.com/emma";
			break;
		default:
			redirectUrl = "https://example.com/default";
			break;
	}

	// Redirect the user to the appropriate URL
	if (redirectUrl !== "") {
		window.location.href = redirectUrl;
	}
});
