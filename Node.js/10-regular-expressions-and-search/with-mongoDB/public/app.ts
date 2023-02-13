async function handleLogin(ev: any) {
  try {
    ev.preventDefault();
    const password = ev.target.elements.passwordLog.value;
    const email = ev.target.elements.emailLog.value;
    console.log(password, email);

    //@ts-ignore
    const { data } = await axios.post("/api/users/login", { password, email });
    console.log(data);
    const { ok, userDB } = data;
    sessionStorage.setItem("id", userDB._id);
    if (ok) {
      console.log("suuccesful Login");
      window.location.href = "./home.html";
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
    const repeatPassword = ev.target.elements.repeatPassword.value;
    const username = ev.target.elements.username.value;
    if (!email || !password || !username || !repeatPassword)
      throw new Error("password and email is required");

    //@ts-ignore
    const { data } = await axios.post("/api/users/register", {
      password,
      email,
      repeatPassword,
      username,
    });
    console.log(data);
    const { register, error } = data;

    if (error) throw error;
    if (register) window.location.href = "./home.html";
  } catch (error) {
    console.error(error);
  }
}

async function updateUser(ev) {
  try {
    const id = sessionStorage.getItem("id");
    //@ts-ignore
    const { data } = await axios.post("/api/users/update", { id });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getUserFromCookie() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/get-user-by-cookie");
    const { userDB } = data;
    const username = document.querySelector("#username");
    username.innerHTML = `${userDB.email}`;
  } catch (error) {
    console.error(error);
  }
}

async function handleCheckIfUserIsconnected() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/get-user-by-cookie");
    const { userDB } = data;

    if (userDB) window.location.href = "./home.html";
  } catch (error) {
    console.error(error);
  }
}

async function handleLogout() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/logout");
    const { logout } = data;
    sessionStorage.removeItem("id");
    if (logout) window.location.href = "./index.html";
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
  } catch (error) {}
}

async function handleUpdateUser(event) {
  try {
    const password = event.target.elements.password.value;
    const userId = event.target.elements.userId.value;
    //@ts-ignore
    const { data } = await axios.patch(`/api/users/${userId}`, { password });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function handleSearch(event) {
  try {
    const root = document.querySelector(".root");
    const searchString = event.target.value;
    const category = event.target.id
    if( searchString === "") {
      root. innerHTML = "";
      return
    }
    console.log(searchString);
    //@ts-ignore
    const { data } = await axios.post(`/api/users/search/${category}`, {
      searchString,
    });
    const { usersDB } = data;
    console.log(usersDB);

    renderListToRoot(usersDB)
  } catch (error) {
    console.error(error);
  }
}

function renderListToRoot(arrayToList) {
  try {
    const root = document.querySelector(".root");
    let html = "<ol>";

    arrayToList.forEach((element) => {
      html += `<li> ${element.username}'s email is: ${element.email}.</li>`;
    });

    html += '</ol>'

    root.innerHTML = html;

  } catch (error) {
    console.error(error)
  }
}
