
import connection from './../../01-basic/server example/DB/database';
export async function addNewDress(req, res) {
try {
    const {dressName, dressSrc, dressInfo, dressSizeArray} = req.body;
    if (!dressName || !dressSrc || !dressInfo || !dressSizeArray) throw new Error("no information from body on addNewDress")

    const query = `SELECT * FROM dresses WHERE dress.dress_name = '${dressName}' OR dress.dress_src = '${dressSrc}'`;
    connection.query(query, (err, results) => {
        try {
            if (err) throw err;
            //@ts-ignore
            if(results.length > 0) {
                res.send({ok: false, message: "Dress Already Exists"})
            } else {
                const query2 = `INSERT INTO dresses (dress_name, dress_src, dress_info) VALUES ('${dressName}', '${dressSrc}', '${dressInfo}')`;
                connection.query(query2, async (err, results2) => {
                    try {
                        if (err) throw err;

                        //@ts-ignore
                        const dress_id = results2.insertId;
                        const query3 = `INSERT INTO inventory (dress_id, size_id, amount) VALUES ?`;
                        connection.query(query3, [dressSizeArray], function(err) {
                            if (err) throw err;
                            res.send({ok: true, message: "Dress And Sizes Added successFully"})
                        })

                      
                    } catch (error) {
                        console.error(error)
                        res.status(500).send({error: error.message})
                    }
                })
            }
        } catch (error) {
            console.error(error)
            res.status(500).send({error: error.message})
        }
    })
} catch (error) {
    console.error(error)
    res.status(500).send({error: error.message})
}
}