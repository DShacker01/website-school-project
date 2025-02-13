function generatePassword() {
    let length = document.getElementById("length").value;
    let useUppercase = document.getElementById("uppercase").checked;
    let useLowercase = document.getElementById("lowercase").checked;
    let useNumbers = document.getElementById("numbers").checked;
    let useSymbols = document.getElementById("symbols").checked;

    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()";

    let allowedChars = "";
    if (useUppercase) allowedChars += uppercaseChars;
    if (useLowercase) allowedChars += lowercaseChars;
    if (useNumbers) allowedChars += numberChars;
    if (useSymbols) allowedChars += symbolChars;

    if (allowedChars === "") {
        alert("Selecteer ten minste één type teken!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById("password").value = password;
}
function copyPassword() {
    let passwordField = document.getElementById("password");

    if (passwordField.value === "") {
        alert("Geen wachtwoord gegenereerd!");
        return;
    }

    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // Voor mobiele apparaten
    navigator.clipboard.writeText(passwordField.value);

    alert("Wachtwoord gekopieerd!");
}
