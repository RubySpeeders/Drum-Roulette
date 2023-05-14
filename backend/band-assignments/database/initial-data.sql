INSERT INTO band(band_name)
VALUES('Navy');

INSERT INTO band_nickname(nickname)
VALUES('Pershing''s Own');

INSERT INTO band(band_name, band_nickname_id)
VALUES('Marine', 1);

INSERT INTO users(first_name, last_name, band_id)
VALUES('testUserFirstName', 'testUserLastName', 1);