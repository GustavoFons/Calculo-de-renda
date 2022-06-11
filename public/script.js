const form = document.querySelector("#form");
if (form.attachEvent) {
    form.attachEvent("submit", onsubmit);
} else {
    form.addEventListener("submit", onsubmit);
}
async function onsubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    const result = await fetch("/api/calculoRenda", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    }); 
    const json = await result.json();
    console.log(json);

    return false;
}