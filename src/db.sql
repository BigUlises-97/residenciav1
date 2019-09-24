CREATE DATABASE empresa;
USE empresa;

CREATE TABLE users(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    email VARCHAR(45) DEFAULT NULL,
    password VARCHAR(45) DEFAULT NULL,
    role VARCHAR(20) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE users;

INSERT INTO users VALUES
	(1, 'fab', 'fab@fab.fab', 'fabulosito', 'admin'),
    (2, 'luis', 'luis@luis.luis', 'negro', 'admin'),
    (3, 'goku', 'goku@goku.goku', 'kakaroto', 'normal');

SELECT * FROM users;

SELECT id FROM users WHERE email = 'fab@fab.fab' AND password = 'fabulosito';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'