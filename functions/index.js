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
	origin: true,
});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
  secure: true,
	auth: {
		user: gmailEmail,
		pass: gmailPassword,
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
});

exports.submit = functions.https.onRequest((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader("Access-Control-Allow-Methods", "POST, GET", "OPTION");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	if (req.method === "OPTIONS") {
		res.end();
	} else {
		cors(req, res, () => {
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

			return mailTransport.sendMail(mailOptions, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log("Email sent: " + info.res);
				}
			});
		});
	}
});
