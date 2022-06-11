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

    document.querySelector("#nome_resultado").innerHTML = json.nome;
    document.querySelector("#cep_resultado").innerHTML = `json.endereco.cep`;
    document.querySelector("#logradouro_resultado").innerHTML =
        json.endereco.logradouro;
    document.querySelector("#bairro_resultado").innerHTML =
        json.endereco.bairro;
    document.querySelector("#localidade_resultado").innerHTML =
        json.endereco.localidade;
    document.querySelector("#estado_resultado").innerHTML = json.endereco.uf;
    document.querySelector("#renda_resultado").innerHTML = json.renda;

    return false;
}