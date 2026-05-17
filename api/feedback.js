export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, email } = req.body ?? {};

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Feedback`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Message: message,
          ...(email && { Email: email }),
        },
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    console.error('Airtable error:', err);
    return res.status(500).json({ error: 'Failed to save' });
  }

  return res.status(200).json({ success: true });
}
