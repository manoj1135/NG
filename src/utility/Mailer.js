var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manoj.naik1135@gmail.com',
    pass: '9880511333'
  }
});
var mailOptions = {
  from: 'manoj.naik1135@gmail.com',
  to: 'manoj.naik1135@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

module.exports.sendMail = function(){
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
