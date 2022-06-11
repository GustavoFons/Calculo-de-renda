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

    document.querySelector("#nome_resultado").innerHTML = ` Nome do titular: ${json.nome} `;
    document.querySelector("#cep_resultado").innerHTML = `CEP: ${json.endereco.cep}`;
    document.querySelector("#logradouro_resultado").innerHTML =
        ` Endereço: ${json.endereco.logradouro} `;
    document.querySelector("#bairro_resultado").innerHTML =
        `Bairro: ${json.endereco.bairro}`;
    document.querySelector("#localidade_resultado").innerHTML =
        `Cidade: ${json.endereco.localidade}`;
    document.querySelector("#estado_resultado").innerHTML = `Estado: ${json.endereco.uf}`;
    document.querySelector("#renda_resultado").innerHTML = `Renda per capita: ${json.renda} reais`;

    return false;
}