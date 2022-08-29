
const controller = require("../controller/controller.js")

const initWebRoutes = (app) => {
    app.post('/api/contacts', controller.createNewContact)
    app.get('/api/contacts', controller.getAllContacts)
    app.delete("/api/contacts", controller.deleteAllContact)
    app.get("/api/contacts/favorite", controller.getContactsFavoriet)
    app.get("/api/contacts/:id", controller.getById)
    app.put("/api/contacts/:id", controller.updateContact)
    app.delete("/api/contacts/:id", controller.deleteContactId)

    app.get("*", (req, res) => {
        res.status(404).json("Resource not found")
    })
}
module.exports = initWebRoutes;

