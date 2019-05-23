"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const exphbs = require("express-handlebars");
// const apiRouter = require('./routing/apiRoutes');
// const htmlRouter = require('./routing/htmlRoutes');
const PORT = process.env.PORT || 3000;
// Sets up the Express App
// =============================================================
const app = express();
app.use(express.static("public"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
// app.use('/', htmlRouter);
// app.use('/api', apiRouter);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});
//# sourceMappingURL=server.js.map