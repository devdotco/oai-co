import { NextRequest, NextResponse } from 'next/server'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'nate@dev.co'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

export async function POST(request: NextRequest) {
  let data: Record<string, string>

  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { firstName, lastName, email, company, message } = data

  if (!firstName || !lastName || !email || !company) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const subject = `New OAI.co Inquiry — ${company}`

  const html = `
<div style="font-family: ui-monospace, 'Cascadia Code', monospace; max-width: 600px; background: #0a0a0a; color: #f0f0f0; padding: 32px;">
  <p style="font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #555; margin: 0 0 24px;">OAI.CO — CONTACT SUBMISSION</p>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #555; width: 120px;">Name</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; font-size: 14px; color: #f0f0f0;">${firstName} ${lastName}</td>
    </tr>
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #555;">Email</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; font-size: 14px;"><a href="mailto:${email}" style="color: #f0f0f0;">${email}</a></td>
    </tr>
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #555;">Company</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; font-size: 14px; color: #f0f0f0;">${company}</td>
    </tr>
  </table>
  ${message ? `
  <div style="border-left: 2px solid #333; padding-left: 16px; margin-bottom: 24px;">
    <p style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #555; margin: 0 0 10px;">Message</p>
    <p style="font-size: 14px; color: #c0c0c0; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
  </div>` : ''}
  <p style="font-size: 11px; color: #333; margin: 0;">Submitted via oai.co/contact</p>
</div>
`

  const resendKey = process.env.RESEND_API_KEY

  if (resendKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          reply_to: email,
          subject,
          html,
        }),
      })

      if (!response.ok) {
        const err = await response.text()
        console.error('Resend API error:', response.status, err)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }
    } catch (error) {
      console.error('Failed to send contact email:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
  } else {
    console.log('[Contact Form]', { firstName, lastName, email, company, message: message?.slice(0, 100) })
  }

  return NextResponse.json({ ok: true })
}
