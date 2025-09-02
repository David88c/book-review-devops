INSERT INTO greetings (id, name)
VALUES (1, 'Hello from DB')
ON DUPLICATE KEY UPDATE name = VALUES(name);