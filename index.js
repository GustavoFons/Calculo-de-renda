const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post("/api/calculoRenda", async (req, res) => {
    const dados = req.body;

    const endereco = await axios.get(
       ` https://viacep.com.br/ws/${dados.cep}/json/ `
       );

    res.send({
        nome: dados.nome,
        endereco: endereco.data,
        renda: dados.renda / dados.dependentes,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});

