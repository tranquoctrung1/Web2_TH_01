const express = require('express');

const route = express.Router();


route.get('/', function(req, res)
{
    res.render('register', {title: "Register", layout: false});
}) 


route.post('/', function(req, res)
{
    let {name, email} = req.body;

    res.send(`Wellcome ${name} (${email})`);
})

module.exports = route;
