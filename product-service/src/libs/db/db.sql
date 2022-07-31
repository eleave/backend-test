CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	name text NOT NULL,
	description text,
	price int NOT NULL,
	image text,
	PRIMARY KEY ("id")
);

CREATE TABLE stocks (
	product_id uuid NOT NULL,
	count int NOT NULL DEFAULT 0,
	FOREIGN KEY ("product_id") REFERENCES products("id") ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO products (name, description, price) VALUES ('Warcraft', 'Set in the Warcraft fantasy universe, World of Warcraft takes place within the world of Azeroth, approximately four years after the events of the previous game in the series, Warcraft III: The Frozen Throne.', 100);
INSERT INTO products (name, description, price) VALUES ('Diablo', 'The game takes place in Sanctuary, the dark fantasy world of the Diablo Series, twenty years after the events of Diablo II.', 80);
INSERT INTO products (name, description, price) VALUES ('StarCraft', 'The story of Brood War is presented through its instruction manual, the briefings to each mission, and conversations within the missions themselves, along with the use of cinematic cut scenes at the end of each campaign.', 80);
INSERT INTO products (name, description, price) VALUES ('Overwatch', 'Described as a hero shooter, Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as heroes, with unique abilities.', 100);

INSERT INTO stocks (product_id, count) VALUES ('291fceae-744c-48f3-b6c7-883621a220eb', 10);
INSERT INTO stocks (product_id, count) VALUES ('3ba6a9a3-20f1-4b58-83c2-b84fea82bc1f', 10);
INSERT INTO stocks (product_id, count) VALUES ('4e06c99d-11c5-4637-9335-208986a5a31e', 10);
INSERT INTO stocks (product_id, count) VALUES ('e716d614-632c-40cf-8db9-0307bd600eff', 10);