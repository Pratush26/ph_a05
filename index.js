let heartBtns = document.querySelectorAll("#container span div:first-of-type button");
let callBtns = document.querySelectorAll("#container span div:last-of-type button:last-of-type");
let copyBtns = document.querySelectorAll("#container span div:last-of-type button:first-of-type");
let historyContainer = document.querySelector("aside>section");
let ClearHistory = function() {
    historyContainer.innerHTML = "";
}
heartBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        alert("adding...");
});
});
callBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        alert("Calling...");
});
});
copyBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        alert("Copying...");
});
});
