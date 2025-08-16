import nodemailer from "nodemailer";

export default async function handler(req, res){
  if(req.method !== "POST"){
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { name, email, message } = req.body || {};
  if(!name || !email || !message){
    return res.status(400).json({ error: "Missing required fields" });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO || user;

  if(!user || !pass){
    return res.status(500).json({ error: "Email not configured. Set EMAIL_USER and EMAIL_PASS." });
  }

  try{
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass }
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      subject: `New inquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}
Email: ${email}

${message}`,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p>${message.replace(/\n/g,"<br/>")}</p>`
    });

    return res.status(200).json({ message: "Message sent successfully.", id: info.messageId });
  }catch(err){
    console.error(err);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
