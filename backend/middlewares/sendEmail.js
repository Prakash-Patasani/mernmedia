const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  //   const transporter = nodeMailer.createTransport({
  //     host: process.env.SMPT_HOST,
  //     port: process.env.SMPT_PORT,
  //     auth: {
  //       user: process.env.SMPT_EMAIL,
  //       pass: process.env.SMPT_PASSWORD,
  //     },
  //     service: process.env.SMPT_SERVICE
  //   });

  var transporter = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3b507c89bab547",
      pass: "a3caa2c9952e34",
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
