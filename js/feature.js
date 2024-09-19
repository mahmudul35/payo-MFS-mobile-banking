document
  .getElementById("withdraw-btn")
  .addEventListener("click", function withdrawhandle() {
    document.getElementById("cash-form").classList.remove("hidden");
    document.getElementById("add-form").classList.add("hidden");
  });

document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("add-form").classList.remove("hidden");
  document.getElementById("cash-form").classList.add("hidden");
});
