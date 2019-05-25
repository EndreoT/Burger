USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES 
("Fried Egg Burger", "Fried Egg", FALSE),
("Chicken Burger", "Lettuce", TRUE),
("Everything Burger", "All", False);

SELECT * FROM burgers;