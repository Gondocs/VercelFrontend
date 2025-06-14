export default async function handler(req, res) {
  const { token } = req.body;

  const secret = process.env.REACT_APP_RECAPTCHA_SECRET;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data = await response.json();

  if (data.success) {
    res.status(200).json({ verified: true });
  } else {
    res.status(400).json({ verified: false, errors: data['error-codes'] });
  }
}
