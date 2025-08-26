// some utility veriables
let heartBtns = document.querySelectorAll("#container span div:first-of-type button");
let copyBtns = document.querySelectorAll("#container span div:last-of-type button:first-of-type");
let callBtns = document.querySelectorAll("#container span div:last-of-type button:last-of-type");
let historyContainer = document.querySelector("aside>section");

// some utility functions
let ClearHistory = function () {
    historyContainer.innerHTML = "";
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
        let text = e.target.parentElement.parentElement.querySelector("h3").innerText;
        let coin = document.getElementById("coin");
        if (parseInt(coin.innerText) >= 20) {
            alert(`Calling - ${text}`);
            coin.innerText = parseInt(coin.innerText) - 20;
        }else alert("You don't have enough coins");
    });
});
