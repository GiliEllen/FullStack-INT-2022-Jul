console.log("connected");

function getDog() {
  const endpoint = "https://dog.ceo/api/breeds/image/random"
  try {
    //@ts-ignore
    axios
      .get(endpoint)
      .then(({data}) => {
        console.log(data)
        renderImage(data.message)
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.error(error);
  }
}

function renderImage(src) {
  try {
    const root = document.querySelector(".root");
    root!.innerHTML = ""
    root!.innerHTML = `<img src="${src}"/>`
  } catch (error) {
    console.error(error)
  }
}