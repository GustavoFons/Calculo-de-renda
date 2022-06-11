const form = document.querySelector("#form");
if (form.attachEvent) {
    form.attachEvent("submit", onsubmit);
} else {
    form.addEventListener("submit", onsubmit);
}
function onsubmit(event) {
    event.preventDefault();
    


    return false;
}