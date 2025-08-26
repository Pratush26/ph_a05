// some utility veriables
let heartBtns = document.querySelectorAll("#container span div:first-of-type button");
let copyBtns = document.querySelectorAll("#container span div:last-of-type button:first-of-type");
let callBtns = document.querySelectorAll("#container span div:last-of-type button:last-of-type");
let historyContainer = document.querySelector("aside>section");

// some utility functions
let ClearHistory = function () {
    historyContainer.innerHTML = "";
}
let callHistory = function (serviceName, number) {
    let now = new Date();
    let historyContainer = document.querySelector("aside>section");
    let div = document.createElement("div");
    div.className = "flex items-center justify-between text-xs text-gray-700 px-4 py-2 gap-2 bg-gray-100 rounded-md";
    div.innerHTML = `
  <span>
      <h5 class="font-bold text-sm text-gray-800">${serviceName}</h5>
      <p>${number}</p>
  </span>
  <span>${now.toLocaleTimeString('en-US', { hour12: true })}</span>`;
    historyContainer.append(div);
}

// event listenrs
heartBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let heartCouter = document.getElementById("heart");
        heartCouter.innerText = parseInt(heartCouter.innerText) + 1;
        alert("Heart added");
    });
});
copyBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let text = e.target.parentElement.parentElement.querySelector("h3").innerText;
        alert(`Copied: ${text}`);
        let copyCouter = document.querySelector("nav button>span");
        copyCouter.innerText = parseInt(copyCouter.innerText) + 1;
        navigator.clipboard.writeText(text)
    });
});
callBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let service = e.target.parentElement.parentElement.querySelector("h4").innerText;
        let text = e.target.parentElement.parentElement.querySelector("h3").innerText;
        let coin = document.getElementById("coin");
        if (parseInt(coin.innerText) >= 20) {
            alert(`Calling - ${text}`);
            coin.innerText = parseInt(coin.innerText) - 20;
            callHistory(service, text);
        } else alert("You don't have enough coins");
    });
});
