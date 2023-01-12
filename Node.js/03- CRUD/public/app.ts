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
    const { data } = await axios.get(`/api/v1/tours/${id}`);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

async function addTour(event) {
  try {
    event.preventDefault();
    const tourName = event.target.elements.tourName.value;
    const price = event.target.elements.price.value;
    //@ts-ignore
    const { data } = await axios.post("/api/v1/tours", {tourName, price});
    console.log(data);
    
  } catch (error) {
    console.error(error.messasge)
  }
}

async function deleteATourByID(event) {
  try {
    event.preventDefault();
    const id = event.target.elements.tourId.value;
    //@ts-ignore
    const { data } = await axios.delete(`/api/v1/tours/${id}`);
    console.log(data);
  } catch (error) {
    console.error(error.messasge)
  }
}

async function updateTour(event) {
  try {
    event.preventDefault();
    const newName = event.target.elements.newName.value;
    const id = event.target.elements.tourId.value;
    //@ts-ignore
    const { data } = await axios.patch(`/api/v1/tours/${id}`, {newName});
    console.log(data);
    
  } catch (error) {
    console.error(error.messasge)
  }
}