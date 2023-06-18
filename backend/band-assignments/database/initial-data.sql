INSERT INTO band(band_name)
VALUES('Navy');

INSERT INTO band_nickname(nickname)
VALUES('Pershing''s Own');

INSERT INTO band(band_name, band_nickname_id)
VALUES('Marine', 1);

INSERT INTO users(first_name, last_name, band_id)
VALUES('Chad', 'Crummel', 1), ('Randy', 'Johnson', 1), ('James', 'Swarts', 1), ('Riley', 'Barnes', 1), ('James', 'Cromer', 1), ('Jeffrey', 'DeRoche', 1), ('Joseph', 'Gonzalez', 1), ('Nicholas', 'Taylor', 1), ('Mitch', 'Mitchner', 1);