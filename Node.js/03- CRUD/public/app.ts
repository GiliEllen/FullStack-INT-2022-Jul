async function handleGetAllTours() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/v1/tours");
    if (!data) throw new Error("no data from server on client get all tours");
    console.log(data);
  } catch (error) {
    console.error(error.messasge);
  }
}

async function getATourByID(event) {
  try {
    event.preventDefault();
    const id = event.target.elements.tourId.value;
    //@ts-ignore
    const { data } = await axios.get(`/api/v1/tours/:${id}`);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}
