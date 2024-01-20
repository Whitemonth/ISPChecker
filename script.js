let firstResultIP = "Loading...";
let secondResultIP = "Loading...";
let result = "";

const ipfiData = "https://api.ipify.org/?format=json";
const myExternalIPData = "http://myexternalip.com/json";

// Fetching data from ipfi.org and myexternalip.com
function checkISP() {
  fetch(ipfiData)
    .then((resp) => resp.json())
    .then((data) => {
      firstResultIP = data.ip;
    })
    .catch((error) => {
      "Error: No data from ipify.org", error;
    });

  fetch(myExternalIPData)
    .then((resp) => resp.json())
    .then((data) => {
      secondResultIP = data.ip;
    })
    .catch((error) => {
      "Error: No data from Myexternalip.com", error;
    });

  // Diplay data in UI
  document.getElementById("RESULTIP").innerText = firstResultIP;
  document.getElementById("RESULTIPTHIRD").innerText = secondResultIP;
  document.getElementById("DATE").innerText = new Date().toLocaleTimeString();
}
checkISP(); // Calls function for first time.

setInterval(checkISP, 1000); // Repeats function checkISP every second
