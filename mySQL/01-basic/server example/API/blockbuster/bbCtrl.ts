import connection from "../../DB/database"

export async function getAllProducts(req, res) {
    try {
        const query = 'SELECT * FROM classicmodels.products'
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({results})
            } catch (error) {
                res.status(500).send({error: error.message})
            }
        })
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}