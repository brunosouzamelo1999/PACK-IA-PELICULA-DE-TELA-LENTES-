const { google } = require('googleapis');
const path = require('path');

async function main() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, 'credentials.json'),
    scopes: [
      'https://www.googleapis.com/auth/presentations'
    ]
  });

  const slides = google.slides({ version: 'v1', auth });
  
  try {
    const res = await slides.presentations.create({
      requestBody: {
        title: 'Test Presentation'
      }
    });
    console.log('Created presentation details:');
    console.log(JSON.stringify(res.data, null, 2));
  } catch (err) {
    console.error('Error creating presentation:');
    if (err.response && err.response.data) {
      console.error(JSON.stringify(err.response.data, null, 2));
    } else {
      console.error(err);
    }
  }
}

main();
