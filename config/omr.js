const connection = require('connection.js');

module.exports = (connection) => {
    selectAll = function selectAll() {
        connection.query("SELECT * FROM burgers", (err, res) => {
            if (err) throw err;
            burgerObj={burger_name: Name,
                       devoured: false}
        })
    }

    insertOne = function insertOne() {
        connection.query("INSERT INTO burgers SET ?",
        {
        burger_name: name,
        devoured: false
        }
        ,(err, res) => {
            if (err) throw err;

        })
    }

    updateOne = function updateOne() {
        connection.query("UPDATE burgers SET ? WHERE ?", [{devoured:true}, req.params],(err, res) => {
            
        })
    }
}