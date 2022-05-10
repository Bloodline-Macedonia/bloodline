import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const { name, birthDate, bloodType, phone, email } = req.body;
    const msg = {
        to: email, // Change to your recipient
        from: 'bloodlinemacedonia@gmail.com', // Change to your verified sender
        subject: 'Sign-up Confirmation',
        text: "Thank you for your sign-up, below is your submitted information: ...",
        html: `<ul>
				<li>
					Full Name: ${name}
				</li>
				<li>
					Birthdate: ${birthDate}
				</li>
				<li>
					Blood Type: ${bloodType}
				</li>
				<li>
					Phone number: ${phone}
				</li>
				<li>
					Email address: ${email}
				</li>
				</ul>`,
    }

    try {
        await sgMail.send(msg);
        res.json({ message: `Email has been sent.` })
    } catch (error) {
        res.status(500).json({ error: "Couldn't send email." })
    }
}