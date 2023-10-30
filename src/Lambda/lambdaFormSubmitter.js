import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-1" });

function generateHTML(payload) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            h1 {
                color: #333;
            }
            p {
                font-size: 16px;
                line-height: 1.5;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Email Form Submission</h1>
            <h1> </h1>
            <h2> Here is the data </h2>
            <br>
            <p><strong>Email:</strong> ${payload.email}</p>
            <p><strong>Subject:</strong> ${payload.subject}</p>
            <p><strong>Message:</strong> ${payload.message}</p>
        </div>
    </body>
    </html>
  `;
}

const verifiedEmail = "put_your_SES_verified_email@here.com";
function generateEmailParams(html) {
  const params = {
    Destination: {
      ToAddresses: [verifiedEmail],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: html,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Form Data Submission",
      },
    },
    Source: verifiedEmail,
  };
  return params;
}
export const handler = async function (event) {
  const payload = JSON.parse(event.body);

  try {
    const data = await ses.send(
      new SendEmailCommand(generateEmailParams(generateHTML(payload)))
    );
    return "Email sent successfully";
  } catch (error) {
    p(error);
    // return "Failed to send email";
    return payload.toString();
  }
};
