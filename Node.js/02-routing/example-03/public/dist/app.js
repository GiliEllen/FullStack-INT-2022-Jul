function handleGetUsers() {
    try {
        console.log("trying to get user");
        //@ts-ignore
        axios.get("/api/users").then(function (_a) {
            var data = _a.data;
            console.log(data);
        })["catch"](function (error) { return console.error(error); });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetRandomImage() {
    try {
        //@ts-ignore
        axios.get("/api/images").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var imageSrc = data.imageSrc;
            renderImage(imageSrc);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderImage(imageSrc) {
    var root = document.querySelector(".root");
    var image = document.createElement('img');
    image.src = "" + imageSrc;
    root.appendChild(image);
}
