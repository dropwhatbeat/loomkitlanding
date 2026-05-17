export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, telegram, reason } = req.body ?? {};

  if (!email && !telegram) {
    return res.status(400).json({ error: 'Email or Telegram handle is required' });
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Waitlist`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          ...(email && { Email: email }),
          ...(name && { Name: name }),
          ...(telegram && { Telegram: telegram }),
          ...(reason && { Reason: reason }),
        },
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    return res.status(500).json({ error: 'Failed to save', detail: err });
  }

  return res.status(200).json({ success: true });
}
