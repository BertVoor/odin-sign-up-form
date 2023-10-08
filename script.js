console.log("script loaded");

// TODO:
//  Change validation messages

const passwords = document.querySelectorAll(".passwords");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const passwordErrorMessage = document.querySelector("#passwordError");

passwords.forEach((password) => {
	password.addEventListener("input", () => {
		checkPasswords();
	});
});

function checkPasswords() {
	console.log("checking");
	const password = passwordInput.value;
	const confirmPassword = confirmPasswordInput.value;

	if (password === confirmPassword) {
		passwordInput.className = "confirmed";
		confirmPasswordInput.className = "confirmed";
		passwordErrorMessage.style.visibility = "hidden";
	} else {
		passwordInput.className = "error";
		confirmPasswordInput.className = "error";
		passwordErrorMessage.style.visibility = "visible";
	}
}
