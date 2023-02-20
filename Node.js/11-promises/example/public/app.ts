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

function renderListToRoot(arrayToList) {
  try {
    const root = document.querySelector(".root");
    let html = "<ol>";

    arrayToList.forEach((element) => {
      html += `<li> ${element.username}'s email is: ${element.email}.</li>`;
    });

    html += "</ol>";

    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function handleAddSiblings(event) {
  event.preventDefault();
  const email1 = event.target.elements.email1.value;
  const email2 = event.target.elements.email2.value;

  //to make it faster created wrong route. good route will include the logged in user id with params
  console.log("this is before the promise");
  //@ts-ignore
  axios
    .post("/api/users/add-sibling", { email1, email2 })
    .than(({ data }) => console.log(data + "ok"))
    .catch((err) => console.error(err));

  console.log("this is after the promise");
}

async function handleSearchSiblingsByUsername(event) {
  try {
    event.preventDefault();
    const username = event.target.elements.usernameToSearch.value;

    const { data } = await axios.post("/api/users/search-sibling-by-username", {
      username,
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second




function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}
//              return promise -> pending -> resolved or reject
let promise3 = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise3.then(
  (script) => alert(`${script.src} is loaded!`),
  (error) => alert(`Error: ${error.message}`)
);

promise.then((script) => alert("continue work..."));
