
const { contactModel } = require("../database/config.js")
const serviceContact = require('../service/contactService.js')

let createNewContact = async (req, res) => {
    let mes = await serviceContact.createNewContactService(req.body)
    res.json(mes)
}

let getAllContacts = async (req, res) => {
    let data = await serviceContact.getAllContactService()
    res.json(data)
}

let deleteAllContact = async (req, res) => {
    let data = await serviceContact.deleteAllContactService()
    res.json(data)
}

let getContactsFavoriet = async (req, res) => {
    let data = await serviceContact.getContactFavoriteService()
    res.json(data)
}
// 62f7524bc659b0e2d96e2636
let getById = async (req, res) => {
    try {
        let url = req.url;
        let startIndex = url.indexOf("/", 7) + 1
        let id = url.slice(startIndex, url.length)
        let data = await serviceContact.findById(id)
        res.json(data)
    } catch (err) {
        res.json({
            errCode: 2,
            mes: "contact not found"
        })
    }
}

let updateContact = async (req, res) => {
    try {
        // console.log("controller", req.body)
        let url = req.url;
        let startIndex = url.indexOf("/", 7) + 1
        let id = url.slice(startIndex, url.length)
        let data = await serviceContact.updateContactService(id, req.body)
        res.json(data)
    } catch (err) {
        res.json({
            errCode: 3,
            mes: "Contact Not Exist"
        })
    }
}

let deleteContactId = async (req, res) => {
    try {
        let url = req.url;
        let startIndex = url.indexOf("/", 7) + 1
        let id = url.slice(startIndex, url.length)
        let data = await serviceContact.deleteContactService(id)
        res.json(data)
    } catch (err) {
        res.json({
            errCode: 3,
            mes: "Contact Not Exist"
        })
    }

}

module.exports = {
    createNewContact: createNewContact,
    getAllContacts: getAllContacts,
    getContactsFavoriet: getContactsFavoriet,
    deleteAllContact: deleteAllContact,
    getById: getById,
    updateContact: updateContact,
    deleteContactId: deleteContactId
}