SELECT posts.img, users.username
FROM posts
JOIN users
ON posts.id = users.id
WHERE users.id = ${id}