// 🔑 الـ Access Key من Web3Forms (Form Setup)
const ACCESS_KEY = 'adb57509-0905-43cf-8e01-be7f814328fa';

export async function sendDateConfirmation(location: string) {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: '💕 SHE SAID YES! New Date Confirmation',
        from_name: 'Date Website 💌',
        message: `
🎉 SHE SAID YES! 🎉

📍 Location: ${location}
📅 Day: Thursday
⏰ Submitted at: ${new Date().toLocaleString()}

Don't forget to prepare! 💐✨
        `.trim(),
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Email sent successfully!');
      return result;
    } else {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('❌ Email error:', error);
    throw error;
  }
}
