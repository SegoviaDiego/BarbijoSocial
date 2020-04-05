const sgMail = require("@sendgrid/mail");

const SENDGRID_API_KEY =
  "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";

export default async function (req, res) {
  if (!req || !req.body) {
    return res.status(400).send("invalid payload");
  }

  const { name, email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).send("invalid payload");
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const content = {
    to: "barbijosocial@gmail.com",
    from: email,
    subject: `${name || "Nombre sin especificar"}: ${subject}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
