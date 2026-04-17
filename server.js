const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Billy Brand Backend Running 🚀");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mridulgrover59@gmail.com",
    pass: "mgtkdswybilecrly",
  },
});

// POST API
app.post("/contact", async (req, res) => {
  console.log("🔥 API HIT");
  console.log(req.body);

  const { name, phone, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: "Billy Brand <mridulgrover59@gmail.com>",
      replyTo: email,
      to: "mridulgrover9@outlook.com",
      subject: "New Contact Form Message",
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("✅ EMAIL SENT");
    res.json({ success: true });

  } catch (error) {
    console.log("❌ ERROR:", error);
    res.status(500).json({ success: false });
  }
});