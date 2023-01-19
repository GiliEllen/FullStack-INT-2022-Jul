const users = [];

export function getAllUsers(req, res) {
try {
    res.send({users})
} catch (error) {
    res.status(500).send({error: error.message})
}
}