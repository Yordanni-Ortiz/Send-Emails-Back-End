const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail');

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.send("Welcome to express");
});

router.post('/emails/sayhi', async(req, res) => {
    const { name, email, phone, message } = req.body;
    await sendEmail({
        to: "yordannimod@gmail.com",
        subject: `¡${name} te escribió desde tu página web!`,
        html: `<FONT COLOR="purple"><p>${message}</p></FONT>
        <ul>
        <li type="disc"><FONT COLOR="purple"><b>Phone</b> ${phone}</FONT></li>
        <li type="disc"><FONT COLOR="purple"><b>Email</b> ${email}</FONT></li>
        </ul> 
    `
    })
    return res.json({ message: "Email sent successfuly" })
});

router.post('/emails/contact', async(req, res) =>{
    const { name, email, phone, message } = req.body;
    await sendEmail({
        to: "yordannimod@gmail.com",
        subject: `¡${name} te escribió desde tu página web!`,
        html: `
            <FONT COLOR="DarkSlateBlue"><h1>A ${name} le gustaría ponerse en contacto contigo.</h1></FONT>
            <FONT COLOR="DarkSlateBlue"><p>${message}</p></FONT>
            <ul>
            <li type="disc"><FONT COLOR="DarkSlateBlue"><b>Email:</b> ${email}</FONT></li>
            <li type="disc"><FONT COLOR="DarkSlateBlue"><b>Phone:</b> ${phone}</FONT></li>
            </ul> 
        `
    })
    return res.send("Email sent successfuly")
})

module.exports = router;
