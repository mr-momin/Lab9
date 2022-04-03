exports.sendReqHTML = (req, res) => {
    res.render("home")
};
exports.respondWithImage = (req, res) => {
    let pics = req.params.pics;
    res.render(pics);
};
exports.sendReqcss = (req, res) => {
    res.sendFile(`./public/css/${req.url}.css`, {
        root: "./"
    })
};
