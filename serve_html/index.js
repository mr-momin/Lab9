const port = 3000,
    express = require("express"),
    app = express();
    homeController = require("./controllers/homeController");

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.get("/home", homeController.sendReqHTML);
// app.get("/1", homeController.sendReqone);
// app.get("/2", homeController.sendReqtwo);
// app.get("/3", homeController.sendReqthree);
// app.get("/images/1", homeController.sendReqimg);
// app.get("/images/2", homeController.sendReqimg);
// app.get("/images/3", homeController.sendReqimg);
app.get("/images/:pics", homeController.respondWithImage);
app.get("/image", homeController.sendReqcss);

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});
