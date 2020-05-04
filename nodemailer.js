require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io", //smtp сервер mailtrap
    port: 2525,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'ecdfb4f72f-2ac4ea@inbox.mailtrap.io',
    to: 's0673298964@gmail.com',
    subject: 'Sending Email by SMTP',
    text: 'Well hello;)'
};

transporter.sendMail(mailOptions, (err, data) =>{
    if(err){
        throw err;
    }
    else{
        console.log('Email send: ' + data.respons);
    }
});