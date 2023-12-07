DROP TABLE IF EXISTS diplomas CASCADE;
DROP TABLE IF EXISTS students CASCADE;

CREATE TABLE diplomas (
	id SERIAL PRIMARY KEY,
	"name" VARCHAR,
	description VARCHAR,
	images TEXT [],
	file_path TEXT [],
	deadline VARCHAR
);

CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	"name" VARCHAR,
	qr_id VARCHAR,
	images TEXT [],
	role VARCHAR,
	diplom_id INTEGER REFERENCES diplomas(id) ON DELETE CASCADE
);


INSERT INTO diplomas (name, description, deadline) 
	VALUES
		('Gas Detection', 'WORTH BUYING', '12.02.2024'),
		('Water purification', 'WORTH BUYING TOO', '12.02.2024');
		

INSERT INTO students (name, qr_id, role, diplom_id) 
	VALUES 
		('Berdi Nazarov', 'qawsedrit12y9832486', 'Software', 1),
		('Gurban Taganov', 'awsedi832486', 'Hardware', 1),
		('Dovran Rahymov', 'drit12y9832486', 'BOTH', 2);
