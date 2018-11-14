const connection = require('connection.js');

module.exports = (connection) => {
    selectAll = function selectAll() {
        connection.query("SELECT * FROM burgers", (err, res) => {

        })
    }

    insertOne = function insertOne() {
        connection.query("INSERT INTO burgers ", (err, res) => {

        })
    }

    updateOne = function updateOne() {
        connection.query("UPDATE burgers SET ? WHERE ?", (err, res) => {

        })
    }
}