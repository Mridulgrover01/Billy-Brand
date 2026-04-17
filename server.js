const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Billy Brand Backend Running 🚀");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mridulgrover59@gmail.com",
    pass: "1809",
  },
});

// POST API
app.post("/contact", async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
  await transporter.sendMail({
  from: "Billy Brand <mridulgrover59@gmail.com>",
  replyTo: email,
  to: "mridulgrover9@outlook.com",
  subject: "New Contact Form Message",
  text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
});
    res.json({ success: true, message: "Email sent ✅" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error ❌" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});