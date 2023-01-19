async function handleLogin(ev: any) {
  try {
    ev.preventDefault();
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;
    console.log(password, email);

    //@ts-ignore
    const { data } = await axios.post("/api/users/login", { password, email });
    console.log(data);
    const { ok } = data;
    if (ok) {
      console.log("suuccesful Login");
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleRegister(ev: any) {
  try {
    ev.preventDefault();
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;
    console.log(password, email);

    //@ts-ignore
    const { data } = await axios.post("/api/users/register", {
      password,
      email,
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function handlegetAllUsers() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getUserById(event) {
  try {
    event.preventDefault();
    const userId = event.target.elements.userId.value;
    //@ts-ignore
    const { data } = await axios.get(`/api/users/${userId}`);
    console.log(data);
  } catch (error) {
    
  }
}