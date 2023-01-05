

function handleGetUsers() {
    try {
        console.log("trying to get user");
        //@ts-ignore
        axios.get("/api/users").then(({data}) => {
            console.log(data)
        }).catch((error) => console.error(error))
    } catch (error) {
        console.error(error)
    }
}