CREATE TABLE images (
id SERIAL PRIMARY KEY,
path varchar(200),
description varchar(200),
likes INTEGER
);

INSERT INTO images (path, description, likes)
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.',0),
    ('images/ocean.jpg','Photo of clear ocean water',0),
   ('images/fall.jpg','Photo of country road in fall.',0);