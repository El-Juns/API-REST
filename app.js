/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.");
});

// User Routes Loading
const userRoutes = require("./routes/user.routes");
userRoutes(app);

// token middleware
tkFn = require("./middleware/verifyToken")
app.use(tkFn)

// celular Routes Loading
const celularRoutes = require("./routes/celular.routes");
celularRoutes(app);

// comnputadoras Routes Loading
const comnputadorasRoutes = require("./routes/comnputadoras.routes");
comnputadorasRoutes(app);

// reproductoresSonido Routes Loading
const reproductoresSonidoRoutes = require("./routes/reproductoresSonido.routes");
reproductoresSonidoRoutes(app);

// routers Routes Loading
const routersRoutes = require("./routes/routers.routes");
routersRoutes(app);

// televisores Routes Loading
const televisoresRoutes = require("./routes/televisores.routes");
televisoresRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
});
