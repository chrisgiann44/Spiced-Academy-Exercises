--WRITE DATA TO A TABLE

DROP TABLE IF EXISTS musicusers;

CREATE TABLE musicusers(
    id SERIAL PRIMARY KEY,
    usernaname VARCHAR(255) not null,
    country VARCHAR(255),
    songs INTEGER
);

INSERT INTO musicusers (usernaname, country, songs)
VALUES ('Petros', 'DE', 22121);

INSERT INTO musicusers (usernaname, country, songs)
VALUES ('Nikos', 'GRE', 2322321);

INSERT INTO musicusers (usernaname, country, songs)
VALUES ('Georgios', 'GRE', 2322321);

INSERT INTO musicusers (usernaname, country)
VALUES ('David', 'SPA' );


-- DELETE DATA

DELETE FROM musicusers where id = 2;

-- UPDATE DATA

UPDATE musicusers SET songs =2233333
WHERE id= 4;


-- READ DATA FROM A TABLE

SELECT * FROM musicusers;
