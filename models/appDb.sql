CREATE DATABASE todos_db;
USE todos_db;
CREATE TABLE todos(
    id INT AUTO_INCREMENT NOT NULL,
    text VARCHAR(50) NOT NULL,
    completed BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);


CREATE TABLE users(
      id INT AUTO_INCREMENT NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      PRIMARY KEY(id)
);
