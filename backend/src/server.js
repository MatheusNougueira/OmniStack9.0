const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
port = 3030;

const routes = require("./routes");

const app = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-qi0v9.mongodb.net/semana09?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    if (mongoose.connect) {
        console.log("Conectado ao DB")
    } else console.log("Erro ao se conectar com o DB");
});

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(port, () => {
    console.log("Servidor iniciado na porta", port);
});

