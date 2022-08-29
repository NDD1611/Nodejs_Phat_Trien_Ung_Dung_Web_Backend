
const { contactModel } = require("../database/config.js")


let createNewContactService = async (contact) => {
    return new Promise(async (resolve, reject) => {
        try {
            await contactModel.create(contact)
            resolve({
                errCode: 0,
                mes: "create contact success!"
            })
        } catch (err) {
            reject({
                errCode: 1,
                mes: "Error Server"
            })
        }
    })
}

let getAllContactService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await contactModel.find()
            resolve({
                errCode: 0,
                data: data
            })
        } catch (err) {
            reject({
                errCode: 1,
                mes: "Error Server"
            })
        }
    })
}

let deleteAllContactService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await contactModel.deleteMany()
            resolve({
                errCode: 0,
                mes: "Delete All Contact Success!"
            })
        } catch (err) {
            reject({
                errCode: 1,
                mes: "Error Server"
            })
        }
    })
}

let getContactFavoriteService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await contactModel.find({ favorite: true })
            resolve({
                errCode: 0,
                data: data
            })
        } catch (err) {
            reject({
                errCode: 1,
                mes: "Error Server"
            })
        }
    })
}

let findById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await contactModel.findById(id)
            if (data) {
                resolve({
                    errCode: 0,
                    data: data
                })
            } else {
                resolve({
                    errCode: 1,
                    mes: "Contact not found"
                })
            }
        } catch (err) {
            reject({
                errCode: 1,
                mes: "Error Server"
            })
        }
    })
}

let updateContactService = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let contact = await contactModel.findById(id)
            if (contact) {
                await contactModel.updateOne({ _id: id }, data)
                resolve({
                    errCode: 0,
                    mes: "Update success!"
                })
            }
            resolve({
                errCode: 2,
                mes: "Id Contact Not Exist"
            })
        } catch (err) {
            reject({
                errCode: 1,
                mes: "Error Server"
            })
        }
    })
}

let deleteContactService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let contact = await contactModel.findById(id)
            if (contact) {
                await contactModel.deleteOne({ _id: id })
                resolve({
                    errCode: 0,
                    mes: "Delete Contact Success"
                })
            }
            resolve({
                errCode: 3,
                mes: "Contact Not Exist"
            })

        } catch (err) {
            reject({
                errCode: 3,
                mes: "Error Server"
            })

        }
    })
}

module.exports = {
    createNewContactService: createNewContactService,
    getAllContactService: getAllContactService,
    getContactFavoriteService: getContactFavoriteService,
    deleteAllContactService: deleteAllContactService,
    findById: findById,
    updateContactService: updateContactService,
    deleteContactService: deleteContactService
}