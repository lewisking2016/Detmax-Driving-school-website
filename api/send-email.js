import nodemailer from 'nodemailer';

// ── SMTP Transporter ──────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: 'my.mailbux.com',
  port: 587,
  secure: false,
  auth: {
    user: 'info@detmaxinstitute.co.ke',
    pass: 'Detmax.2026.',
  },
  tls: { rejectUnauthorized: false },
});

// ── HTML Email Templates ──────────────────────────────────────────────────────

function inquiryAutoReply(name, program) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,31,63,0.12);">
  <tr><td style="background:linear-gradient(135deg,#001f3f 0%,#003366 60%,#cc0000 100%);padding:40px 40px 30px;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;letter-spacing:1px;">DETMAX INSTITUTE</h1>
    <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Driving School &amp; Computer College</p>
  </td></tr>
  <tr><td style="padding:0 40px;text-align:center;">
    <div style="display:inline-block;background:#28a745;color:#fff;padding:8px 24px;border-radius:0 0 12px 12px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">✓ &nbsp;Inquiry Received</div>
  </td></tr>
  <tr><td style="padding:36px 40px 10px;">
    <h2 style="color:#001f3f;font-size:20px;margin:0 0 12px;">Hello, ${name}! 👋</h2>
    <p style="color:#444;font-size:15px;line-height:1.7;margin:0 0 20px;">Thank you for reaching out to <strong>Detmax Driving School &amp; Computer College</strong>. We have received your inquiry and will get back to you within <strong>24 hours</strong>.</p>
    <div style="background:#f0f4ff;border-left:4px solid #001f3f;border-radius:8px;padding:18px 20px;margin-bottom:24px;">
      <p style="margin:0 0 8px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Your Inquiry Details</p>
      <p style="margin:0;color:#001f3f;font-size:14px;"><strong>Program of Interest:</strong> ${program || 'General Inquiry'}</p>
    </div>
    <p style="color:#444;font-size:15px;line-height:1.7;margin:0 0 24px;">While you wait, you can also fill out our official <strong>Enrollment Form</strong> to secure your spot!</p>
  </td></tr>
  <tr><td style="padding:0 40px 32px;text-align:center;">
    <a href="https://detmaxinstitute.co.ke/registration.html" style="display:inline-block;background:linear-gradient(135deg,#cc0000,#990000);color:#fff;text-decoration:none;padding:14px 36px;border-radius:50px;font-size:15px;font-weight:700;">Enroll Now →</a>
  </td></tr>
  <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #eee;margin:0;"></td></tr>
  <tr><td style="padding:24px 40px;">
    <p style="color:#888;font-size:13px;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Our Contact Details</p>
    <table cellpadding="0" cellspacing="0">
      <tr><td style="padding:4px 12px 4px 0;font-size:14px;">📞</td><td style="padding:4px 0;color:#555;font-size:14px;">+254 111 379171</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-size:14px;">✉️</td><td style="padding:4px 0;color:#555;font-size:14px;">info@detmaxinstitute.co.ke</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-size:14px;">📍</td><td style="padding:4px 0;color:#555;font-size:14px;">Nairobi, Kenya — P.O BOX 301-00100</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-size:14px;">🕐</td><td style="padding:4px 0;color:#555;font-size:14px;">Mon – Sat: 8:00 AM – 6:00 PM</td></tr>
    </table>
  </td></tr>
  <tr><td style="background:#f8f9fb;padding:20px 40px;text-align:center;border-top:1px solid #eee;">
    <p style="color:#aaa;font-size:12px;margin:0 0 6px;">© 2026 Detmax Limited Company. All Rights Reserved.</p>
    <p style="color:#aaa;font-size:11px;margin:0;">KRA PIN: P051811093F &nbsp;|&nbsp; NTSA Registered</p>
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;
}

function enrollmentAutoReply(name, course, phone) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,31,63,0.12);">
  <tr><td style="background:linear-gradient(135deg,#001f3f 0%,#003366 60%,#cc0000 100%);padding:40px 40px 30px;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;letter-spacing:1px;">DETMAX INSTITUTE</h1>
    <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Driving School &amp; Computer College</p>
  </td></tr>
  <tr><td style="padding:0 40px;text-align:center;">
    <div style="display:inline-block;background:#28a745;color:#fff;padding:8px 24px;border-radius:0 0 12px 12px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">🎉 &nbsp;Application Received!</div>
  </td></tr>
  <tr><td style="padding:36px 40px 10px;">
    <h2 style="color:#001f3f;font-size:20px;margin:0 0 12px;">Congratulations, ${name}! 🎊</h2>
    <p style="color:#444;font-size:15px;line-height:1.7;margin:0 0 20px;">Your enrollment application at <strong>Detmax Driving School &amp; Computer College</strong> has been successfully submitted. Welcome to the Detmax family!</p>
    <div style="background:#f0f4ff;border-radius:12px;padding:20px 24px;margin-bottom:24px;border:1px solid #dde8ff;">
      <p style="margin:0 0 14px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Application Summary</p>
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr><td style="padding:6px 0;color:#555;font-size:14px;width:45%;"><strong style="color:#001f3f;">Student Name</strong></td><td style="padding:6px 0;color:#333;font-size:14px;">${name}</td></tr>
        <tr><td style="padding:6px 0;color:#555;font-size:14px;"><strong style="color:#001f3f;">Program Applied</strong></td><td style="padding:6px 0;color:#333;font-size:14px;">${course || 'Not specified'}</td></tr>
        <tr><td style="padding:6px 0;color:#555;font-size:14px;"><strong style="color:#001f3f;">Phone Number</strong></td><td style="padding:6px 0;color:#333;font-size:14px;">${phone || 'Not provided'}</td></tr>
        <tr><td style="padding:6px 0;color:#555;font-size:14px;"><strong style="color:#001f3f;">Status</strong></td><td style="padding:6px 0;"><span style="background:#fff3cd;color:#856404;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:700;">Under Review</span></td></tr>
      </table>
    </div>
    <p style="color:#001f3f;font-size:15px;font-weight:700;margin:0 0 14px;">📋 What Happens Next?</p>
    <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
      <tr>
        <td style="vertical-align:top;padding:8px 12px 8px 0;"><div style="background:#001f3f;color:#fff;width:24px;height:24px;border-radius:50%;text-align:center;line-height:24px;font-size:12px;font-weight:700;">1</div></td>
        <td style="padding:8px 0;color:#555;font-size:14px;line-height:1.6;">Our enrollment officer will <strong>call or WhatsApp you within 24 hours</strong> to confirm your intake details.</td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:8px 12px 8px 0;"><div style="background:#001f3f;color:#fff;width:24px;height:24px;border-radius:50%;text-align:center;line-height:24px;font-size:12px;font-weight:700;">2</div></td>
        <td style="padding:8px 0;color:#555;font-size:14px;line-height:1.6;">You will receive <strong>payment instructions</strong> and fee breakdown for your chosen program.</td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:8px 12px 8px 0;"><div style="background:#cc0000;color:#fff;width:24px;height:24px;border-radius:50%;text-align:center;line-height:24px;font-size:12px;font-weight:700;">3</div></td>
        <td style="padding:8px 0;color:#555;font-size:14px;line-height:1.6;">Once payment is confirmed, you receive your <strong>Student ID and learning materials</strong>!</td>
      </tr>
    </table>
    <div style="background:linear-gradient(135deg,#001f3f,#003366);border-radius:12px;padding:20px 24px;margin-bottom:24px;color:#fff;">
      <p style="margin:0 0 10px;font-size:13px;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:1px;font-weight:700;">💳 Payment Details</p>
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr><td style="padding:4px 0;color:rgba(255,255,255,0.8);font-size:13px;width:50%;">M-PESA Number</td><td style="padding:4px 0;color:#fff;font-size:14px;font-weight:700;">0119028911</td></tr>
        <tr><td style="padding:4px 0;color:rgba(255,255,255,0.8);font-size:13px;">Paybill</td><td style="padding:4px 0;color:#fff;font-size:14px;font-weight:700;">247247</td></tr>
        <tr><td style="padding:4px 0;color:rgba(255,255,255,0.8);font-size:13px;">Account No</td><td style="padding:4px 0;color:#fff;font-size:14px;font-weight:700;">0300161332168</td></tr>
      </table>
    </div>
  </td></tr>
  <tr><td style="padding:0 40px 28px;">
    <p style="color:#888;font-size:13px;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Have Questions?</p>
    <table cellpadding="0" cellspacing="0">
      <tr><td style="padding:4px 12px 4px 0;font-size:14px;">📞</td><td style="padding:4px 0;color:#555;font-size:14px;">+254 111 379171</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-size:14px;">✉️</td><td style="padding:4px 0;color:#555;font-size:14px;">info@detmaxinstitute.co.ke</td></tr>
    </table>
  </td></tr>
  <tr><td style="background:#f8f9fb;padding:20px 40px;text-align:center;border-top:1px solid #eee;">
    <p style="color:#aaa;font-size:12px;margin:0 0 6px;">© 2026 Detmax Limited Company. All Rights Reserved.</p>
    <p style="color:#aaa;font-size:11px;margin:0;">KRA PIN: P051811093F &nbsp;|&nbsp; NTSA Registered</p>
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;
}

function adminInquiryEmail(data) {
  const rows = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 16px 10px 0;color:#555;font-size:14px;font-weight:600;white-space:nowrap;vertical-align:top;">${k}</td><td style="padding:10px 0;color:#222;font-size:14px;">${v}</td></tr>`)
    .join('');
  return `<!DOCTYPE html><html><body style="font-family:'Segoe UI',Arial,sans-serif;background:#f4f6fb;padding:30px 20px;">
<table width="600" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);margin:auto;">
<tr><td style="background:linear-gradient(135deg,#001f3f,#cc0000);padding:24px 32px;">
  <h2 style="color:#fff;margin:0;font-size:18px;">📩 New Website Inquiry</h2>
  <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;">Submitted via detmaxinstitute.co.ke/contact.html</p>
</td></tr>
<tr><td style="padding:28px 32px;"><table cellpadding="0" cellspacing="0" width="100%">${rows}</table></td></tr>
<tr><td style="background:#f8f9fb;padding:16px 32px;border-top:1px solid #eee;text-align:center;">
  <p style="color:#aaa;font-size:12px;margin:0;">Detmax Institute — info@detmaxinstitute.co.ke</p>
</td></tr>
</table></body></html>`;
}

function adminEnrollmentEmail(data) {
  const rows = Object.entries(data)
    .map(([k, v]) => {
      if (k.startsWith('──')) return `<tr><td colspan="2" style="padding:14px 0 6px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;font-weight:700;border-bottom:2px solid #001f3f;">${k}</td></tr>`;
      return `<tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 16px 10px 0;color:#555;font-size:14px;font-weight:600;white-space:nowrap;vertical-align:top;width:40%;">${k}</td><td style="padding:10px 0;color:#222;font-size:14px;">${v || '—'}</td></tr>`;
    })
    .join('');
  return `<!DOCTYPE html><html><body style="font-family:'Segoe UI',Arial,sans-serif;background:#f4f6fb;padding:30px 20px;">
<table width="600" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);margin:auto;">
<tr><td style="background:linear-gradient(135deg,#001f3f,#003366,#cc0000);padding:24px 32px;">
  <h2 style="color:#fff;margin:0;font-size:18px;">🎓 New Enrollment Application</h2>
  <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;">Submitted via detmaxinstitute.co.ke/registration.html</p>
</td></tr>
<tr><td style="padding:28px 32px;"><table cellpadding="0" cellspacing="0" width="100%">${rows}</table></td></tr>
<tr><td style="background:#f8f9fb;padding:16px 32px;border-top:1px solid #eee;text-align:center;">
  <p style="color:#aaa;font-size:12px;margin:0;">Detmax Institute — info@detmaxinstitute.co.ke</p>
</td></tr>
</table></body></html>`;
}

// ── Main Handler ──────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { type } = body;

    // ── INQUIRY ───────────────────────────────────────────────────────────────
    if (type === 'inquiry') {
      const { name, email, phone, program, message } = body;
      if (!name || !phone) return res.status(400).json({ error: 'Name and phone are required.' });

      // Notify admin
      await transporter.sendMail({
        from: '"Detmax Website" <info@detmaxinstitute.co.ke>',
        to: 'info@detmaxinstitute.co.ke',
        replyTo: email || undefined,
        subject: `📩 New Inquiry — ${name} | ${program || 'General'}`,
        html: adminInquiryEmail({
          'Full Name': name,
          'Email': email || 'Not provided',
          'Phone Number': phone,
          'Program of Interest': program || 'General Inquiry',
          'Message': message || 'No message',
          'Submitted At': new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }),
        }),
      });

      // Auto-reply to user
      if (email) {
        await transporter.sendMail({
          from: '"Detmax Institute" <info@detmaxinstitute.co.ke>',
          to: email,
          subject: 'We Received Your Inquiry — Detmax Driving School & Computer College',
          html: inquiryAutoReply(name, program),
        });
      }

      return res.status(200).json({ success: true });

    // ── ENROLLMENT ────────────────────────────────────────────────────────────
    } else if (type === 'enrollment') {
      const {
        fullName, email, phone, gender, dob, address, idNumber,
        course, startDate, schedule,
        emergencyName, emergencyPhone, emergencyRelation,
        referral, referredBy
      } = body;

      if (!fullName || !phone || !email || !course) {
        return res.status(400).json({ error: 'Required fields are missing.' });
      }

      // Notify admin with full application
      await transporter.sendMail({
        from: '"Detmax Enrollment" <info@detmaxinstitute.co.ke>',
        to: 'info@detmaxinstitute.co.ke',
        replyTo: email,
        subject: `🎓 New Enrollment — ${fullName} | ${course}`,
        html: adminEnrollmentEmail({
          '── PERSONAL INFO ──': '',
          'Full Name': fullName,
          'Gender': gender,
          'Date of Birth': dob,
          'ID / Passport No': idNumber || 'Not provided',
          'Phone (WhatsApp)': phone,
          'Email Address': email,
          'Physical Address': address,
          '── COURSE DETAILS ──': '',
          'Course Applied For': course,
          'Preferred Start Date': startDate,
          'Schedule Preference': schedule,
          '── EMERGENCY CONTACT ──': '',
          'Contact Name': emergencyName,
          'Contact Phone': emergencyPhone,
          'Relationship': emergencyRelation,
          '── REFERRAL ──': '',
          'Heard About Us Via': referral,
          'Referred By': referredBy || 'N/A',
          '── META ──': '',
          'Submitted At': new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }),
        }),
      });

      // Confirmation to student
      await transporter.sendMail({
        from: '"Detmax Institute" <info@detmaxinstitute.co.ke>',
        to: email,
        subject: '🎉 Enrollment Confirmed — Detmax Driving School & Computer College',
        html: enrollmentAutoReply(fullName, course, phone),
      });

      return res.status(200).json({ success: true });

    } else {
      return res.status(400).json({ error: 'Invalid form type.' });
    }

  } catch (err) {
    console.error('[send-email] ERROR:', err.message, err.stack);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
