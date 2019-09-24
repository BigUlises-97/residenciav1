const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const routes = express.Router();

const dbConnect = require('../config/db');
dbConnect.connect((err, connection) => {
    if (err) throw err;
    if (connection) {
        console.log('DB Connected');
    }
});

routes.get('/', (req, res) => {
    res.json({
        text: 'hola'
    });
});

//LOGIN
routes.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    console.log(user);

    dbConnect.query('SELECT * FROM users WHERE email = ? AND password = ?', [user.email, user.password], (err, result, fields) => {
        if (err) throw err;
        if (result) {
            const userID = result[0].id;
            console.log(userID);
            const token = jwt.sign({ id: userID }, config.secret, {
                expiresIn: 60 * 60 * 24
            });
            res.status(200).json({
                auth: true,
                token,
                userID
            });
        }
    });
});
//Me masturbé luego de hacer esto jalar por mi cuenta :)

//PD: no se que hacer ahora xddxddxd pero ya hay un "login"
module.exports = routes;