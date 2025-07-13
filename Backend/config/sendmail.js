import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();



const transporter =  nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.GMAIL_PASS
    }
});

const sendEmail = async({sendTo, html,  subject })=>{
    try {

       const info = await transporter.sendMail({
            from:`"SOEZI"  <${process.env.GMAIL_USER}>`,
            to:sendTo,
            subject:subject,
            html:html
        })
        console.log("Email Sent Successfully",info.messageId);
        return info;

        

    } catch (error) {
         console.log("Email Sending Failed",error);
         return {error};
        
    }
}
export default sendEmail;