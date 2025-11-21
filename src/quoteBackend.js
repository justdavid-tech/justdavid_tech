// // server/routes/quote.js
// const express = require('express');
// const router = express.Router();
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// router.post('/submit-quote', async (req, res) => {
//   const { name, email, company, projectType, budget, timeline, description } = req.body;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: 'justdavidtech@gmail.com', // Your email
//     subject: `New Quote Request from ${name}`,
//     html: `
//       <h2>New Quote Request</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Company:</strong> ${company || 'Not provided'}</p>
//       <p><strong>Project Type:</strong> ${projectType}</p>
//       <p><strong>Budget:</strong> ${budget}</p>
//       <p><strong>Timeline:</strong> ${timeline}</p>
//       <p><strong>Description:</strong></p>
//       <p>${description}</p>
//       <br>
//       <p><em>Received on: ${new Date().toLocaleString()}</em></p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Quote request sent successfully!' });
//   } catch (error) {
//     console.error('Email error:', error);
//     res.status(500).json({ error: 'Failed to send quote request' });
//   }
// });

// module.exports = router;