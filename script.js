let firstResultIP = "0";
let secondResultIP = "0";
let thirdResultIP = "0";
let result = "";

const ipOne = "http://myexternalip.com/raw";
ipTwo = "https://api.ipify.org/?format=json";
ipThree = "http://myexternalip.com/json";

function checkISP() {
  fetch(ipOne)
    .then((resp) => resp.text())
    .then((data) => console.log(data))
    .catch((error) => {
      "error in getting ip", error;
    });

  fetch(ipTwo)
    .then((resp) => resp.json())
    .then((data) => {
      secondResultIP = data.ip;
      console.log(secondResultIP);
    })
    .catch((error) => {
      "error in getting ip", error;
    });

  fetch(ipThree)
    .then((resp) => resp.json())
    .then((data) => {
      thirdResultIP = data.ip;
      console.log(thirdResultIP);
    })
    .catch((error) => {
      "error in getting ip", error;
    });

  if (firstResultIP || secondResultIP || thirdResultIP === "109.124.78.178") {
    result = "109.124.78.178 (Megafon)";
  } else if (
    firstResultIP ||
    secondResultIP ||
    thirdResultIP === "84.52.83.180 (WestCall)"
  ) {
    result = "84.52.83.180";
  } else {
    result = "Error, there is no connection to all 3 servers!";
  }

  document.getElementById("RESULTIP").innerText = result;
  document.getElementById("DATE").innerText = new Date().toLocaleTimeString();
}
checkISP();

setInterval(checkISP, 5000);
