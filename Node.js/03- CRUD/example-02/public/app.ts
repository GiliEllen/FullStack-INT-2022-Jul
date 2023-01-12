console.log("connected")

const handleGetAllTours = async () => {
    try {
        const {data} = await axios.get("/api/v1/tours");
        console.log(data)
        const {success, tours, error} = data;
        if(success) {
            console.log(tours)
        } else {
            throw error
        }
    } catch (error) {
        console.error(error)
    }
}

async function handleGetTourByID(event) {
    try {
        event.preventDefault();
        const tourId = event.target.elements.tourId.value;

        const {data} =  await axios.get(`/api/v1/tours/${tourId}`)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}