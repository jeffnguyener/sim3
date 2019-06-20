CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password TEXT,
    profile TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(id)
);