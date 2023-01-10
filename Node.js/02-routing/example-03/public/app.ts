function handleGetUsers() {
  try {
    console.log("trying to get user");
    //@ts-ignore
    axios
      .get("/api/users")
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
}

// function handleGetRandomImage() {
//     try {
//         //@ts-ignore
//         axios.get("/api/images").then(({data}) => {
//             console.log(data)
//             const {imageSrc} = data;
//             renderImage(imageSrc)
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }

async function handleGetRandomImage() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/images");
    console.log(data);
    const { imageSrc } = data;
    renderImage(imageSrc);
    // const {imageSrc} = data
  } catch (error) {}
}

function renderImage(imageSrc) {
  const root = document.querySelector(".root");
  const image = document.createElement("img");
  image.src = `${imageSrc}`;
  root.appendChild(image);
}
