import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
    try {
        const { name, email, institution, message } = await request.json()

        // Validation de base
        if (!name || !email || !message) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
        }

        // Configuration du transporteur d'email
        // Note: Dans un environnement de production, utilisez des variables d'environnement
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || "smtp.gmail.com",
            port: Number.parseInt(process.env.EMAIL_PORT || "587"),
            secure: process.env.EMAIL_SECURE === "true" || false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER || "your-email@gmail.com",
                pass: process.env.EMAIL_PASSWORD || "your-app-password",
            },
        })

        // Préparer l'email
        const mailOptions = {
            from: email,
            to: "contact@beyondgames.fr",
            subject: `Contact Form: ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Institution:</strong> ${institution || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        }

        // Envoyer l'email
        // Commenté pour éviter les erreurs en développement sans configuration SMTP
        // Décommentez cette section et configurez correctement pour l'environnement de production
        /*
        await transporter.sendMail(mailOptions)
        */

        // Pour les besoins de la démonstration, nous simulons un envoi réussi
        console.log("Email would be sent with:", mailOptions)

        // Réponse de succès
        return NextResponse.json({ message: "Message sent successfully" })
    } catch (error) {
        console.error("Error sending email:", error)

        return NextResponse.json({ message: "Failed to send message" }, { status: 500 })
    }
}
