function selectOnlyThis(id) {
  for (var i = 1; i <= 6; i++) {
    document.getElementById(i).checked = false;
  }
  document.getElementById(id).checked = true;
}

var fanumPoints = parseInt(localStorage.getItem("1"));
var chrisPoints = parseInt(localStorage.getItem("2"));
var kaiPoints = parseInt(localStorage.getItem("3"));
var agentPoints = parseInt(localStorage.getItem("4"));
var davisPoints = parseInt(localStorage.getItem("5"));
var dukePoints = parseInt(localStorage.getItem("6"));

if (!fanumPoints) {
  localStorage.setItem("1", 0);
}
if (!chrisPoints) {
  localStorage.setItem("2", 0);
}
if (!kaiPoints) {
  localStorage.setItem("3", 0);
}
if (!agentPoints) {
  localStorage.setItem("4", 0);
}
if (!davisPoints) {
  localStorage.setItem("5", 0);
}
if (!dukePoints) {
  localStorage.setItem("6", 0);
}



function add(id) {

    if (parseInt(id) === 3) {
        var amountAdded = 3
    } else {
        var amountAdded = 2
    }

  const checkboxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  for (const checkbox of checkboxes) {
    console.log(checkbox.id)
    switch (parseInt(checkbox.id)) {
      case 1:
        fanumPoints += amountAdded;
        localStorage.setItem("1", fanumPoints);
        document.getElementById("fanum").innerHTML = `Fanum: ${fanumPoints}`
        break;
      case 2:
        console.log(chrisPoints)
        chrisPoints += amountAdded;
        localStorage.setItem("2", chrisPoints);
        document.getElementById("chris").innerHTML = `Chris: ${chrisPoints}`
        break;
      case 3:
        kaiPoints += amountAdded;
        localStorage.setItem("3", kaiPoints);
        document.getElementById("kai").innerHTML = `kai: ${kaiPoints}`
        break;
      case 4:
        agentPoints += amountAdded;
        localStorage.setItem("4", agentPoints);
        document.getElementById("agent").innerHTML = `agent: ${agentPoints}`
        break;
      case 5:
        davisPoints += amountAdded;
        localStorage.setItem("5", davisPoints);
        document.getElementById("davis").innerHTML = `davis: ${davisPoints}`
        break;
      case 6:
        dukePoints += amountAdded;
        localStorage.setItem("6", dukePoints);
        document.getElementById("duke").innerHTML = `duke: ${dukePoints}`
        break;
      default:
        return window.alert("Please select one person to add points too.");
    }
  }
}

document.getElementById("fanum").innerHTML = `Fanum: ${fanumPoints}`
document.getElementById("chris").innerHTML = `Chris: ${chrisPoints}`
document.getElementById("kai").innerHTML = `kai: ${kaiPoints}`
document.getElementById("agent").innerHTML = `agent: ${agentPoints}`
document.getElementById("davis").innerHTML = `davis: ${davisPoints}`
document.getElementById("duke").innerHTML = `duke: ${dukePoints}`


function reset() {
  localStorage.setItem("1", 0);
  localStorage.setItem("2", 0);
  localStorage.setItem("3", 0);
  localStorage.setItem("4", 0);
  localStorage.setItem("5", 0);
  localStorage.setItem("6", 0);
  window.location.reload()
}