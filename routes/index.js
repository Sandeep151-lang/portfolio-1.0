var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer')

/* GET home page. */
// router.get('/', function(req, res, next) {
 
// });

router.post('/message', async (req, res) => {
  console.log(req.body)
  const { name, email, message } = req.body;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sandeepnandanwar92@gmail.com',
      pass: 'rfncmwkkovvsbcsv' // naturally, replace both with your real credentials or an application-specific password
    }
  });
  const mailOptions = {
    from: email,
    to: 'sandeepnandanwar92@gmail.com',
    subject: name,
    html: message
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(400).send(error)
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).send(info.response)
    }
  });
  return res.status(200).send(token)


    

})

module.exports = router;