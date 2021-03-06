import sgMail from "@sendgrid/mail";
import { config } from "dotenv";

config();

export default async function (req, res) {
  if (!req || !req.body) {
    return res.status(400).send("invalid payload");
  }

  const { name, email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).send("invalid payload");
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const content = {
    to: ["barbijosocial@gmail.com"],
    from: "contacto.barbijosocial@gmail.com",
    subject: `${subject}`,
    text: message,
    html: `
 ${name ? `<b>Nombre:</b> ${name} <br/>` : ""}
 ${email ? `<b>Email:</b> ${email} <br/>` : ""}
 <b>Contenido:</b> <p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
