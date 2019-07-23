DROP TABLE IF EXISTS actors;

CREATE TABLE actors(
    name VARCHAR(255) not null,
    oscars INTEGER,
    age INTEGER
);

INSERT INTO actors (name, oscars, age)
VALUES ('Leonardo', 1, 41);

INSERT INTO actors (name, oscars, age)
VALUES ('Jennifer', 1, 25);

INSERT INTO actors (name, oscars, age)
VALUES ('Samuel', 0, 67);

INSERT INTO actors (name, oscars, age)
VALUES ('Meryl', 3, 66);

INSERT INTO actors (name, oscars, age)
VALUES ('John', 0, 43);

SELECT * FROM actors
WHERE oscars>0;

SELECT * FROM actors
WHERE age>30;
