import express from "express";
const app = express();
const port = 3000;

app.use(express.json()); // to get body from client (body = data from client);
app.use(express.static("public")); // express knows static files exist on public folder

app.get("/api/v1/tours", (req, res) => {
  res.send({ success: true, tours });
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  let { id } = req.params;

  console.log(id);
  const tour = tours.find((el) => el.id == id);
  console.log(tour);
  res.send({ success: true, tour });
});

app.post("/api/v1/tours", (req, res) => {
  try {
    const { tourName, price } = req.body;
    if (!tourName || !price) throw new Error("no prixe or name provided by client on post(`/api/v1/tours`")
    tours.push({ id: guid(), name: tourName, price });
    res.send({ success: true, tours });
  } catch (error) {
    res.status(500).send({ success: false, error })
  }
});

app.delete("/api/v1/tours/:id", (req, res) => {
    let { id } = req.params;
    console.log(id)
  
    const tourUpdated = tours.filter((el) => el.id != id);
    console.log(tourUpdated);
    res.send({ success: true, tourUpdated });
  });

  app.patch("/api/v1/tours/:id", (req, res) => {
    let { id } = req.params;
    const {newName} = req.body
    tours.forEach((tour) => {
        if (tour.id == id) {
            tour.name = newName
        }
    })

    res.send({ success: true, tours });
  });



app.get('/', (req, res) => {
    res.send('root')
  })

  app.get('/about', (req, res) => {
    res.send('about')
  })

  app.get('/about/books', (req, res) => {
    res.send('about')
  })

    app.get('/about/books/:id', (req, res) => {
    res.send('about')
  })


  app.get('/random.text', (req, res) => {
    res.send('random.text')
  })

  app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
  })

  app.get('/ab+cd', (req, res) => {
    res.send('ab+cd')
  })

  app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })

  app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e')
  })

  app.get(/a/, (req, res) => {
    res.send('/a/')
  })

  app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  })

  app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })

let guid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
