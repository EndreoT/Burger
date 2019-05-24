import * as express from 'express';

const exphbs = require("express-handlebars");

import {apiRouter} from './routes/apiRoutes';
import {htmlRouter} from './routes/htmlRoutes';

const PORT = process.env.PORT || 3000;

// Sets up the Express App
// =============================================================
const app: express.Application = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routing
// =============================================================
app.use('/', htmlRouter);
app.use('/api', apiRouter);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
