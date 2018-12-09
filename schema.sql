DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price_usd DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("Bamazon Becho", "Electronics", 15.00, 500000);
INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("Black Beanie", "Clothing", 12.99, 20000);
INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("Flame TV Stick", "Electronics", 24.99, 100000);
INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("Super Smash Bros. Ultimate", "Video Games", 60.00, 50000);
INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("Becoming by Michelle Obama", "Books", 19.50, 200000);
INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("Nintendo Switch Pro Controller", "Video Games", 69.99, 50000);
INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("The Wonky Donky", "Books", 5.05, 100000);
INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("$10 Playstation Store Gift Card", "Video Games", 10.00, 500000);
INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("Whose Boat Is This Boat?", "Books", 8.94, 500);
INSERT INTO products (product_name, department_name, price_usd, stock_quantity) VALUES ("Crocs", "Clothing", 19.99, 90000);

SELECT * FROM products;