console.log("connected");

function getDog() {
  const endpoint = "https://dog.ceo/api/breeds/image/random";
  //@ts-ignore
  axios
    .get(endpoint)
    .then(({ data }) => {
      console.log(data);
      renderImage(data.message);
    })
    .catch((err) => {
      console.error(err);
    });
}


function renderImage(src) {
  try {
    const root = document.querySelector(".root");
    root!.innerHTML = "";
    root!.innerHTML = `<img src="${src}"/>`;
  } catch (error) {
    console.error(error);
  }
}

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  console.log("this is in the then " + message);
}).catch((message) => {
  console.log("this is in the catch " + message);
});
