CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (
	id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
	name text NOT NULL,
	description text,
	price int NOT NULL,
	image text
);

CREATE TABLE stocks (
	product_id uuid NOT NULL REFERENCES products(id),
	count int NOT NULL DEFAULT 0
);

INSERT INTO products (name, description, price) VALUES ('Warcraft', 'Set in the Warcraft fantasy universe, World of Warcraft takes place within the world of Azeroth, approximately four years after the events of the previous game in the series, Warcraft III: The Frozen Throne.', 100);
INSERT INTO products (name, description, price) VALUES ('Diablo', 'The game takes place in Sanctuary, the dark fantasy world of the Diablo Series, twenty years after the events of Diablo II.', 80);
INSERT INTO products (name, description, price) VALUES ('StarCraft', 'The story of Brood War is presented through its instruction manual, the briefings to each mission, and conversations within the missions themselves, along with the use of cinematic cut scenes at the end of each campaign.', 80);
INSERT INTO products (name, description, price) VALUES ('Overwatch', 'Described as a hero shooter, Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as heroes, with unique abilities.', 100);

INSERT INTO stocks (product_id, count) VALUES ('1b526bf1-4b7d-406f-b5cd-89a7fee02f16', 1);
INSERT INTO stocks (product_id, count) VALUES ('47d4982c-588d-4829-8ec8-2d5bdd881020', 1);
INSERT INTO stocks (product_id, count) VALUES ('80d528b4-d8ce-415e-9719-a5dc34738514', 1);
INSERT INTO stocks (product_id, count) VALUES ('fb45fcf1-25ab-4773-b375-05fd6bcbc2cc', 1);