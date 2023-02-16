console.log("connected");
function getDog() {
    var endpoint = "https://dog.ceo/api/breeds/image/random";
    try {
        //@ts-ignore
        axios
            .get(endpoint)
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            renderImage(data.message);
        })["catch"](function (err) {
            console.error(err);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderImage(src) {
    try {
        var root = document.querySelector(".root");
        root.innerHTML = "";
        root.innerHTML = "<img src=\"" + src + "\"/>";
    }
    catch (error) {
        console.error(error);
    }
}
