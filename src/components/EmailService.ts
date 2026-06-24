import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_y6fqexg';
const TEMPLATE_ID = 'template_hrw18y5';
const PUBLIC_KEY = 'TC6lX3r3_uthaJiFp';

export const sendDateConfirmation = async (location: string) => {
  // لو لسه مكتبتش القيم، يطبع في الكونسول بس
  if (SERVICE_ID === 'YOUR_SERVICE_ID' || SERVICE_ID.includes('YOUR_')) {
    console.log('⚠️ EmailJS not configured yet:', {
      location,
      time: 'Thursday',
      timestamp: new Date().toLocaleString()
    });
    return;
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        location: location,
        time: 'Thursday',
        timestamp: new Date().toLocaleString(),
      },
      { publicKey: PUBLIC_KEY }  // ← صلّحت هنا
    );
    
    console.log('✅ Email sent!', response.text);
    return response;
  } catch (error) {
    console.error('❌ EmailJS Error:', error);
    throw error;
  }
};
