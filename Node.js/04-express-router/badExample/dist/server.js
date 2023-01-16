"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json()); // to get body from client (body = data from client);
app.use(express_1["default"].static("public")); // express knows static files exist on public folder
app.get("/api/v1/tours", function (req, res) {
    res.send({ success: true, tours: tours });
});
app.get("/api/v1/tours/:id", function (req, res) {
    console.log(req.params);
    var id = req.params.id;
    console.log(id);
    var tour = tours.find(function (el) { return el.id == id; });
    console.log(tour);
    res.send({ success: true, tour: tour });
});
app.post("/api/v1/tours", function (req, res) {
    try {
        var _a = req.body, tourName = _a.tourName, price = _a.price;
        if (!tourName || !price)
            throw new Error("no prixe or name provided by client on post(`/api/v1/tours`");
        tours.push({ id: guid(), name: tourName, price: price });
        res.send({ success: true, tours: tours });
    }
    catch (error) {
        res.status(500).send({ success: false, error: error });
    }
});
app["delete"]("/api/v1/tours/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);
    var tourUpdated = tours.filter(function (el) { return el.id != id; });
    console.log(tourUpdated);
    res.send({ success: true, tourUpdated: tourUpdated });
});
app.patch("/api/v1/tours/:id", function (req, res) {
    var id = req.params.id;
    var newName = req.body.newName;
    tours.forEach(function (tour) {
        if (tour.id == id) {
            tour.name = newName;
        }
    });
    res.send({ success: true, tours: tours });
});
app.listen(port, function () {
    console.log("Server listening on port: " + port);
});
app.get('/', function (req, res) {
    res.send('root');
});
app.get('/about', function (req, res) {
    res.send('about');
});
app.get('/random.text', function (req, res) {
    res.send('random.text');
});
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd');
});
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd');
});
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e');
});
app.get(/a/, function (req, res) {
    res.send('/a/');
});
app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/');
});
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
});
var guid = function () {
    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return (s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4());
};
