// console.log("hello");
function handleLogin() {
  console.log("hello");
}
document
  .getElementById("btn-login")
  .addEventListener("click", function handleLogin(event) {
    event.preventDefault();
    console.log("hello");

    const phone = document.getElementById("phone").value;
    const pin = document.getElementById("pin").value;
    if (phone === "5" && pin === "1234") {
      window.location.href = "./home.html";
    } else {
      alert("Wrong phone or password");
    }
  });
