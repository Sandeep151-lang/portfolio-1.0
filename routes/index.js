var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer')

/* GET home page. */
// router.get('/', function(req, res, next) {
 
// });

router.post('/message', async (req, res) => {

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json('please fill the required field')
  }
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
      return res.status(503).send(error)
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(204).send(info.response)
    }
  });

})

module.exports = router;
