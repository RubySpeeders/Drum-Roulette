INSERT INTO nickname(nickname)
VALUES('Pershing''s Own'), ('President''s Own');

INSERT INTO branch(branch_name)
VALUES('Navy'), ('Air Force');

INSERT INTO branch(branch_name, nickname_id)
VALUES('Army', 1), ('Marine', 2);

INSERT INTO ensemble(ensemble_name, branch_id)
VALUES('Concert Band', 1), ('Concert Band', 2), ('Concert Band', 3), ('Concert Band', 4);

INSERT INTO instrument(instrument_name)
VALUES('Tenor Drum'), ('Bass Drum'), ('Cymbals'), ('Snare Drum');

INSERT INTO users(first_name, last_name, branch_id, ensemble_id)
VALUES('Chad', 'Crummel', 1, 1), ('Randy', 'Johnson', 1, 1), ('James', 'Swarts', 1, 1), ('Riley', 'Barnes', 1, 1), ('James', 'Cromer', 1,1), ('Jeffrey', 'DeRoche', 1, 1), ('Joseph', 'Gonzalez', 1, 1), ('Nicholas', 'Taylor', 1, 1), ('Mitch', 'Mitchner', 1, 1);