import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 1. Récupération des données du formulaire
    const { name, email, subject, message } = await req.json();

    // 2. Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'SZ Dev <onboarding@resend.dev>',
      to: ['contact.szdev@gmail.com'],
      subject: `Nouveau contact : ${subject}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0070f3; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nouveau message de ton SZ Dev</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message :</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <footer style="margin-top: 20px; font-size: 12px; color: #888;">
            Envoyé depuis le formulaire de contact de ton site.
          </footer>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}