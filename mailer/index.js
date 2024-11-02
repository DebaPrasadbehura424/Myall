const http = require("http");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'debaprasadbehura89@gmail.com', // your Gmail address
        pass: 'bhho baef owyk fqeo'  // use an app password if 2FA is enabled
    }
});

const server = http.createServer((req, res) => {
    const mailOptions = {
        from: 'debaprasadbehura89@gmail.com',
        to: 'srinibasbehura@gmail.com',
        subject: 'Your Name',
        html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #4CAF50;">Hello!</h1>
                <p style="font-size: 16px;">Hi! My name is Saurav. I'm excited to connect with you!</p>
                <p style="font-size: 16px;">Looking forward to hearing back from you.</p>
                <div style="margin-top: 20px; font-size: 12px; color: #777;">This is an automated message.</div>
            </div>
        </div>
    `
    
    };

    transporter.sendMail(mailOptions)
        .then(() => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<h1>Email sent successfully!</h1>");
        })
        .catch((error) => {
            console.error(error);
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end("<h1>Email not sent successfully.</h1>");
        });
      
    res.end();
});

server.listen(7800, () => {
    console.log("Server running on port 7800...");
});
