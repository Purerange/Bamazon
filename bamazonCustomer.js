var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
    // connection.end();
})

// Begins the application by listing all available products with their department, price, and stock quantity.
function start() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {

        console.log("Available products...");

        for (var i = 0; i < res.length; i++) {
            console.log("Id: " + res[i].id + " || Product Name: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price (USD): " + res[i].price_usd + " || Stock Quantity: " + res[i].stock_quantity);
        }
        console.log("");

        promptUser();

    });
}

function promptUser() {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "Please enter the id of the product you wish to buy."
            },
            {
                name: "quantity",
                type: "input",
                message: "How many do you want to buy?"
            }
        ])
        .then(function(answer) {
            var query = "SELECT * FROM products WHERE id = ?";
            connection.query(query, (parseInt(answer.id)), function(err, res) {
                if (err) throw err;

                if (parseInt(answer.quantity) > res[0].stock_quantity) {
                    console.log("Insufficient quantity!");
                    connection.end();
                } else {
                    var newQuantity = res[0].stock_quantity - parseInt(answer.quantity);
                    console.log("New Quantity: " + newQuantity);
                    var customerTotal = parseInt(answer.quantity) * parseFloat(res[0].price_usd);
                    console.log("Customer Total: $" + customerTotal);

                    var query = "UPDATE products SET stock_quantity = ? WHERE id = ?";
                    connection.query(query, [newQuantity, answer.id], function(err, res) {
                        if (err) throw err;

                        console.log("\n(Admin Only)Store quantity updated!");
                    });

                    connection.end();
                }


            })
        })
}