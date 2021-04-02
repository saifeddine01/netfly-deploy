/***************************
 * Imports
 **************************/
const express       = require("express"),
      request       = require("request"),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),
      path          = require('path'),
      compression   = require('compression');

const app           = express();

const PORT       = process.env.PORT || 4000,
      IP         = process.env.IP;



/***************************
 * Compression
 **************************/
app.use(compression())


/***************************
 * Static Directory
 **************************/
app.use(bodyParser.urlencoded({extended: true}), express.static("public"));


/***************************
 * View Engine
 **************************/
app.set("view engine", "ejs");


/***************************
 * View Directory
 **************************/
app.set("views", path.join(__dirname, '/public/views'));

/***************************
 * Routes
 **************************/

    // Home
    app.get("/", function(req, res) {
        res.render("home");
    });

    // Admin
    app.get("/admin", function(req, res) {
        res.render("admin");
    });


/***************************
 * Server
 **************************/
app.listen(PORT, IP, function() {
    console.log("server listening on PORT: " + PORT);
});
