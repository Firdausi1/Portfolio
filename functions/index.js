const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const nodemailer = require("nodemailer");
const cors = require("cors")({
	origin: "*"
});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: gmailEmail,
		pass: gmailPassword,
	},
});

exports.submit = functions.https.onRequest((req, res) => {

  cors(req, res, () => {
	res.set("Access-Control-Allow-Origin", "*");
	res.set("Access-Control-Allow-Credentials", "true");
	res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
	res.set("Access-Control-Allow-Headers", "Content-Type");
	res.set("Access-Control-Max-Age", "3600");

	if (req.method === "OPTIONS") {
		res.end();
	} else {
			if (req.method !== "POST") {
				return;
			}

			const mailOptions = {
				from: req.body.email,
				replyTo: req.body.email,
				to: gmailEmail,
				subject: `${req.body.name} just messaged me from my website`,
				text: req.body.message,
				html: `<p>${req.body.message}</p>`,
			};

			return mailTransport.sendMail(mailOptions).then(() => {
				console.log("New email sent to:", gmailEmail);
				res.status(200).send({
					isEmailSend: true,
				});
				return;
			});
  }
  
});
});
