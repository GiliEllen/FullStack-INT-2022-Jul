console.log("connected");

async function handleGetAllUsers() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
async function handleGetUserById(event) {
  try {
    event.preventDefault()
    const id = event.target.elements.userId.value;
    console.log(id)
    //@ts-ignore
    const { data } = await axios.get(`/api/users/${id}`);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function handleAddUser(event) {
  try {
    event.preventDefault()
    const userName = event.target.elements.userName.value;
    //@ts-ignore
    const { data } = await axios.post("/api/users", {userName});
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}