const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "your-email-here",
      pass: "your-password-here",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "lucas.taferdevs@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Informations<h3/>
            <ul>
              <li>Name: ${data.name}<li/>
              <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  transporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields." });
      res.status(200).json({ msg: "Thank you for contact me! I will return as soon as possible :)" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "Server error." });
    }
  });
});
module.exports = router;
