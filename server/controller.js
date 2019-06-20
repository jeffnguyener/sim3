const bcrypt = require('bcrypt')

module.exports = {
  register: async (req, res) => {
    const { username, password, profile } = req.body;
    const db = req.app.get("db");
    const { session } = req;
    const userFound = await db.check_username({ username });
    if (userFound[0]) return res.status(409).send('Username already exists')
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const createUser = await db.register_user({ username, password: hash, profile})
    session.user = { id: createUser[0].id, username: createUser[0].username, profile: createUser[0].profile }
    res.status(200).send(session.user)
  },
  login: async (req, res) => {
    const { username, password } = req.body
    const db = req.app.get('db')
  }
  
};
