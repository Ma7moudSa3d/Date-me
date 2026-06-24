// 🔑 الـ Access Key من Web3Forms
const ACCESS_KEY = 'e6f5ad71-ccbd-423a-be06-0e7c94edcfe2';

export const sendDateConfirmation = async (location: string) => {
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
};