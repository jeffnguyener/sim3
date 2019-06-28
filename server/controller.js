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
    const { session } = req
    const userFound = await db.check_username({ username })
    if (!userFound[0]) return res.status(401).send('User does not exist')
    const authenticated = bcrypt.compareSync(password, userFound[0].password)
    if (authenticated) {
      session.user = {id: userFound[0].id, username: userFound[0].username}
      res.status(200).send(session.user)
    } else {
      res.status(401).send('Username or Password is incorrect')
    }
  },
  logout: (req, res) => {
    // console.log(req.session)
    req.session.destroy();
    return res.status(200).send("Logged Out");
  },
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    const { session } = req
    if(session.user){
      const usersPosts = await db.get_posts({id: session.user.id
      });
      const { 
        title,
        img, 
        content
      } = usersPosts[0];
      return res.status(200).send({title, img, content})
    }
    return res.status(401).send("Please Log In");
  },
  newPosts: (req, res) => {
    const db = req.app.get('db')
    const { post } = req.body
    db.new_post({title: post.title, img: post.img, content: post.content})
    .then(response => {
      console.log(response)
    })
  }
   
};
