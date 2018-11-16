USE a5krpd2mizr6buac;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers(
    id INT(10) NOT NULL AUTO_INCREMENT
    , burger_name VARCHAR(100) NOT NULL
    , devoured BOOLEAN NOT NULL
    , PRIMARY KEY (id)
);

SELECT * FROM burgers