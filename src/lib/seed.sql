-- Create table
CREATE TABLE IF NOT EXISTS
  coaster_rollers (
    id SERIAL PRIMARY key,
    name TEXT,
    country TEXT,
    height INTEGER
  )


--Insert into table 
INSERT INTO coaster_rollers (name, country, height ) VALUES
('Kingda Ka', 'USA', 139),
('Steel Dragon 2000', 'Japan', 97),
('Top Thrill Dragster', 'USA', 128),
('Red Force', 'Spain', 112),
('Fury 325', 'USA', 99);


--Create new table
