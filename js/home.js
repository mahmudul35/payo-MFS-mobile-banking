document
  .getElementById("add-btn")
  .addEventListener("click", function handleAddBtn(event) {
    event.preventDefault();
    const pinNumber = document.getElementById("pin").value;

    if (pinNumber === "1234") {
      const balance = parseInt(document.getElementById("balance").innerText);
      const amount = parseInt(document.getElementById("amount").value);
      const updatedBalance = balance + amount;
      document.getElementById("balance").innerText = updatedBalance;
    } else {
      alert("Wrong pin");
    }
  });
