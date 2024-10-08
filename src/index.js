const express = require("express");
const app = express();
const morgan = require("morgan");

const router_index = require("./routes/index");
const router_queries = require("./routes/queries");

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
// app.use(router_index);
app.use(router_queries);

//Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
