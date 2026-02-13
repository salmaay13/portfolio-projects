let total = 0;

function addExpense() {
  const desc = document.getElementById("desc").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!desc || isNaN(amount)) return;

  const li = document.createElement("li");
  li.innerText = `${desc} : ${amount} DH`;
  document.getElementById("list").appendChild(li);

  total += amount;
  document.getElementById("total").innerText = total;

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}