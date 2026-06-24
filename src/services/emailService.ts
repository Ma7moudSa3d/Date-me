import emailjs from '@emailjs/browser';

// 🔑 استبدل القيم دي بقيمك من EmailJS
const SERVICE_ID = 'service_y6fqexg';        // <-- Service ID بتاعك
const TEMPLATE_ID = 'template_hrw18y5';    // <-- Template ID بتاعك  
const PUBLIC_KEY = 'mZ3NAd6oKbkdRBn10';   // <-- Public Key بتاعك

export async function sendDateEmail(location: string) {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        location: location,
        time: 'Thursday',
        timestamp: new Date().toLocaleString(),
      },
      { publicKey: PUBLIC_KEY }
    );
    
    console.log('✅ Email sent!', result.text);
    return result;
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    throw error;
  }
}