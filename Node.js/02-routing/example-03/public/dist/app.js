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
