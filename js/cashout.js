document
  .getElementById("cash-btn")
  .addEventListener("click", function cashoutHandle(event) {
    event.preventDefault();
    const pinNumber = document.getElementById("pin-cash").value;
    if (pinNumber === "1234") {
      const balance = parseInt(document.getElementById("balance").innerText);
      const cashAmount = parseInt(document.getElementById("cashAmount").value);
      const updateBalance = balance - cashAmount;
      document.getElementById("balance").innerText = updateBalance;
    } else {
      alert("Wrong pin");
    }
  });
