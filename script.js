const form = document.querySelector(".contact_form");
const userInput = document.querySelector("#username");
const passInput = document.querySelector("#password");
const passCheck = document.querySelector("#passwardCheck");
const email = document.querySelector("#email");
const error = document.querySelectorAll(".error");
const errorIcon = document.querySelectorAll(".bxs-error-circle");
const successIcon = document.querySelectorAll(".bxs-check-circle");
const eye = document.querySelectorAll(".fa-eye");

form.addEventListener("submit", (e) => {
	if (userInput.value.length < 6) {
		error[0].innerHTML = "Username cannot be blank";
		errorIcon[0].classList.add("show");
		e.preventDefault();
	} else {
		successIcon[0].classList.add("show");
		error[0].innerHTML = "";
		errorIcon[0].classList.remove("show");
	}

	if (passInput.value.length === 0) {
		error[1].innerHTML = "Password cannot be blank";
		errorIcon[1].classList.add("show");
		e.preventDefault();
	} else {
		successIcon[1].classList.add("show");
		error[1].innerHTML = "";
		errorIcon[1].classList.remove("show");
	}

	if (passCheck.value.length === 0) {
		error[2].innerHTML = "Password cannot be blank";
		errorIcon[2].classList.add("show");
		e.preventDefault();
	} else if (passCheck.value != passInput.value) {
		error[2].innerHTML = "Password do not match";
		errorIcon[2].classList.add("show");
		e.preventDefault();
	} else {
		successIcon[2].classList.add("show");
		error[2].innerHTML = "";
		errorIcon[2].classList.remove("show");
	}

	if (email.value.length === 0) {
		error[3].innerHTML = "Email cannot be blank";
		errorIcon[3].classList.add("show");
		e.preventDefault();
	} else {
		successIcon[3].classList.add("show");
		error[3].innerHTML = "";
		errorIcon[3].classList.remove("show");
	}
});

//display eye after user put smth into input field
passInput.addEventListener("keydown", () => {
	eye[0].classList.add("show");
});

passCheck.addEventListener("keydown", () => {
	eye[1].classList.add("show");
});

//eye for password
eye.forEach((n) => {
	n.addEventListener("click", () => {
		if (n.previousElementSibling.type === "password") {
			n.previousElementSibling.type = "text";
			n.classList.add("fa-eye-slash");
		} else {
			n.previousElementSibling.type = "password";
			n.classList.remove("fa-eye-slash");
		}
	});
});
