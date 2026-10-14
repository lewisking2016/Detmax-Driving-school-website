import nodemailer from 'nodemailer';

// ── SMTP Transporter ──────────────────────────────────────────────────────────
// Credentials can be overridden with SMTP_HOST / SMTP_PORT / SMTP_USER /
// SMTP_PASS (e.g. Vercel environment variables) so the mailbox password can be
// rotated without a code change. The literals remain as a fallback so the
// existing deployment keeps sending without any dashboard configuration.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'my.mailbux.com',
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE || 'false') === 'true',
  auth: {
    user: process.env.SMTP_USER || 'info@detmaxinstitute.co.ke',
    pass: process.env.SMTP_PASS || 'Detmax.2026.',
  },
  tls: { rejectUnauthorized: false },
});

// ── Shared layout ─────────────────────────────────────────────────────────────
const emailShell = (content, preview) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>Detmax Institute</title>
</head>
<body style="margin:0;padding:0;background:#EEF2F7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0A1628;-webkit-font-smoothing:antialiased;">
<span style="display:none;visibility:hidden;mso-hide:all;font-size:1px;color:#EEF2F7;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${preview}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EEF2F7;padding:40px 16px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border:1px solid #E2E8F0;">
      <tr><td style="background:#001F3F;padding:28px 32px;border-bottom:4px solid #DC2626;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="vertical-align:middle;">
            <div style="font-size:11px;letter-spacing:0.18em;color:#94A3B8;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Detmax Limited Company</div>
            <div style="font-size:20px;font-weight:800;color:#FFFFFF;letter-spacing:0.04em;">DETMAX INSTITUTE</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.7);letter-spacing:0.08em;text-transform:uppercase;margin-top:2px;">Driving School &amp; Computer College</div>
          </td>
          <td align="right" style="vertical-align:middle;">
            <div style="font-size:10px;letter-spacing:0.14em;color:#94A3B8;font-weight:700;text-transform:uppercase;">Est. 2022</div>
            <div style="font-size:10px;letter-spacing:0.1em;color:#94A3B8;margin-top:2px;">KRA PIN: P051811093F</div>
          </td>
        </tr></table>
      </td></tr>
      ${content}
      <tr><td style="background:#001F3F;padding:24px 32px;color:rgba(255,255,255,0.6);font-size:12px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="vertical-align:top;">
            <div style="color:#FFFFFF;font-weight:700;font-size:13px;margin-bottom:6px;letter-spacing:0.05em;">Detmax Limited Company</div>
            <div>Nairobi, Kenya — P.O BOX 301-00100</div>
            <div style="margin-top:4px;"><a href="mailto:info@detmaxinstitute.co.ke" style="color:#FFFFFF;text-decoration:none;">info@detmaxinstitute.co.ke</a></div>
            <div style="margin-top:4px;">+254 111 379171 · +1 801 319 5465</div>
          </td>
          <td align="right" style="vertical-align:top;">
            <a href="https://detmaxinstitute.co.ke" style="color:#FFFFFF;text-decoration:underline;">detmaxinstitute.co.ke</a>
          </td>
        </tr></table>
        <div style="border-top:1px solid rgba(255,255,255,0.12);padding-top:14px;margin-top:18px;font-size:11px;color:rgba(255,255,255,0.5);">
          © 2026 Detmax Limited Company. All rights reserved. NTSA Registered.
        </div>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;

// ── Templates ────────────────────────────────────────────────────────────────

function inquiryAutoReply(name, program) {
  const body = `
    <tr><td style="padding:32px 32px 0;">
      <div style="display:inline-block;background:#001F3F;color:#FFFFFF;padding:6px 14px;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;border-left:3px solid #DC2626;">Inquiry Received</div>
      <h1 style="font-size:24px;font-weight:800;color:#001F3F;margin:20px 0 8px;letter-spacing:-0.01em;line-height:1.25;">Hello, ${name}.</h1>
      <p style="font-size:15px;line-height:1.7;color:#334155;margin:0 0 20px;">Thank you for reaching out to <strong>Detmax Driving School &amp; Computer College</strong>. We have received your inquiry and will respond within <strong>24 hours</strong> with personalized course guidance.</p>
    </td></tr>
    <tr><td style="padding:24px 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E2E8F0;border-left:3px solid #001F3F;">
        <tr><td style="padding:18px 22px;">
          <div style="font-size:10px;letter-spacing:0.18em;color:#64748B;font-weight:700;text-transform:uppercase;margin-bottom:8px;">Inquiry Summary</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:4px 0;font-size:13px;color:#64748B;width:42%;">Program of Interest</td><td style="padding:4px 0;font-size:14px;color:#001F3F;font-weight:600;">${program || 'General Inquiry'}</td></tr>
            <tr><td style="padding:4px 0;font-size:13px;color:#64748B;">Status</td><td style="padding:4px 0;font-size:14px;color:#001F3F;font-weight:600;">Under Review</td></tr>
            <tr><td style="padding:4px 0;font-size:13px;color:#64748B;">Expected Response</td><td style="padding:4px 0;font-size:14px;color:#001F3F;font-weight:600;">Within 24 hours</td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:8px 32px 24px;">
      <p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 20px;">While you wait, you can lock in your slot by completing our official enrollment form — it takes under 2 minutes.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;"><tr><td style="background:#DC2626;">
        <a href="https://detmaxinstitute.co.ke/registration" style="display:inline-block;padding:14px 28px;color:#FFFFFF;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.04em;">Complete Enrollment →</a>
      </td></tr></table>
      <p style="font-size:14px;line-height:1.7;color:#334155;margin:0;">For instant answers, message us on WhatsApp at <a href="https://wa.me/18013195465" style="color:#001F3F;font-weight:700;text-decoration:none;">+1 801 319 5465</a>.</p>
    </td></tr>
  `;
  return emailShell(body, `We've received your inquiry, ${name}. Detmax will respond within 24 hours.`);
}

function enrollmentAutoReply(name, course, phone) {
  const body = `
    <tr><td style="padding:32px 32px 0;">
      <div style="display:inline-block;background:#001F3F;color:#FFFFFF;padding:6px 14px;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;border-left:3px solid #DC2626;">Application Received</div>
      <h1 style="font-size:24px;font-weight:800;color:#001F3F;margin:20px 0 8px;letter-spacing:-0.01em;line-height:1.25;">Welcome, ${name}.</h1>
      <p style="font-size:15px;line-height:1.7;color:#334155;margin:0 0 20px;">Your enrollment application at <strong>Detmax Driving School &amp; Computer College</strong> has been successfully submitted. Welcome to the Detmax family.</p>
    </td></tr>
    <tr><td style="padding:0 32px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E2E8F0;border-left:3px solid #001F3F;">
        <tr><td style="padding:20px 22px;">
          <div style="font-size:10px;letter-spacing:0.18em;color:#64748B;font-weight:700;text-transform:uppercase;margin-bottom:12px;">Application Summary</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:6px 0;font-size:13px;color:#64748B;width:42%;">Student Name</td><td style="padding:6px 0;font-size:14px;color:#001F3F;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:6px 0;font-size:13px;color:#64748B;">Program Applied</td><td style="padding:6px 0;font-size:14px;color:#001F3F;font-weight:600;">${course || 'Not specified'}</td></tr>
            <tr><td style="padding:6px 0;font-size:13px;color:#64748B;">Phone (WhatsApp)</td><td style="padding:6px 0;font-size:14px;color:#001F3F;font-weight:600;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding:6px 0;font-size:13px;color:#64748B;">Status</td><td style="padding:6px 0;font-size:13px;color:#001F3F;font-weight:700;">Under Review</td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:8px 32px 24px;">
      <div style="font-size:11px;letter-spacing:0.18em;color:#001F3F;font-weight:700;text-transform:uppercase;margin-bottom:14px;">What Happens Next</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:10px 0;vertical-align:top;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background:#001F3F;color:#FFFFFF;width:24px;height:24px;text-align:center;line-height:24px;font-size:12px;font-weight:800;">1</td></tr></table>
        </td><td style="padding:10px 0 10px 14px;font-size:14px;line-height:1.6;color:#334155;">Our enrollment officer will <strong>call or WhatsApp you within 24 hours</strong> to confirm your intake details.</td></tr>
        <tr><td style="padding:10px 0;vertical-align:top;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background:#001F3F;color:#FFFFFF;width:24px;height:24px;text-align:center;line-height:24px;font-size:12px;font-weight:800;">2</td></tr></table>
        </td><td style="padding:10px 0 10px 14px;font-size:14px;line-height:1.6;color:#334155;">You will receive <strong>payment instructions</strong> and a complete fee breakdown for your chosen program.</td></tr>
        <tr><td style="padding:10px 0;vertical-align:top;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background:#DC2626;color:#FFFFFF;width:24px;height:24px;text-align:center;line-height:24px;font-size:12px;font-weight:800;">3</td></tr></table>
        </td><td style="padding:10px 0 10px 14px;font-size:14px;line-height:1.6;color:#334155;">After payment confirmation, you receive your <strong>Student ID and learning materials</strong>.</td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:0 32px 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#001F3F;">
        <tr><td style="padding:20px 24px;">
          <div style="color:rgba(255,255,255,0.7);font-size:10px;letter-spacing:0.18em;font-weight:700;text-transform:uppercase;margin-bottom:10px;">Payment Channels</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:4px 0;font-size:13px;color:rgba(255,255,255,0.7);width:42%;">M-PESA Paybill</td><td style="padding:4px 0;font-size:14px;color:#FFFFFF;font-weight:700;">247247</td></tr>
            <tr><td style="padding:4px 0;font-size:13px;color:rgba(255,255,255,0.7);">Account Number</td><td style="padding:4px 0;font-size:14px;color:#FFFFFF;font-weight:700;">0300161332168</td></tr>
            <tr><td style="padding:4px 0;font-size:13px;color:rgba(255,255,255,0.7);">M-PESA Number</td><td style="padding:4px 0;font-size:14px;color:#FFFFFF;font-weight:700;">0119028911</td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  `;
  return emailShell(body, `Welcome to Detmax, ${name}! Your enrollment has been received.`);
}

function applicationAutoReply(name, course, wantsUpdates) {
  const body = `
    <tr><td style="padding:32px 32px 0;">
      <div style="display:inline-block;background:#001F3F;color:#FFFFFF;padding:6px 14px;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;border-left:3px solid #DC2626;">Application Received</div>
      <h1 style="font-size:24px;font-weight:800;color:#001F3F;margin:20px 0 8px;letter-spacing:-0.01em;line-height:1.25;">Thank you, ${name}.</h1>
      <p style="font-size:15px;line-height:1.7;color:#334155;margin:0 0 20px;">We have received your course application for <strong>${course || 'your selected programme'}</strong> at <strong>Detmax Driving School &amp; Computer College</strong>. Our admissions team reviews every application within <strong>24 hours</strong>.</p>
    </td></tr>
    <tr><td style="padding:0 32px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E2E8F0;border-left:3px solid #001F3F;">
        <tr><td style="padding:18px 22px;">
          <div style="font-size:10px;letter-spacing:0.18em;color:#64748B;font-weight:700;text-transform:uppercase;margin-bottom:8px;">Application Summary</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:4px 0;font-size:13px;color:#64748B;width:42%;">Applicant</td><td style="padding:4px 0;font-size:14px;color:#001F3F;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:4px 0;font-size:13px;color:#64748B;">Course Applied For</td><td style="padding:4px 0;font-size:14px;color:#001F3F;font-weight:600;">${course || 'Not specified'}</td></tr>
            <tr><td style="padding:4px 0;font-size:13px;color:#64748B;">Intake Updates</td><td style="padding:4px 0;font-size:14px;color:#001F3F;font-weight:600;">${wantsUpdates ? 'Subscribed' : 'Not requested'}</td></tr>
            <tr><td style="padding:4px 0;font-size:13px;color:#64748B;">Status</td><td style="padding:4px 0;font-size:14px;color:#001F3F;font-weight:700;">Under Review</td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
    ${wantsUpdates ? `<tr><td style="padding:0 32px 20px;"><p style="font-size:14px;line-height:1.7;color:#334155;margin:0;">You will be notified by email as soon as a new intake opens for your selected course, so you can reserve a slot before it fills.</p></td></tr>` : ''}
    <tr><td style="padding:8px 32px 24px;">
      <p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 20px;">Once your application is approved, complete your official enrollment to lock in your place and receive your payment instructions.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;"><tr><td style="background:#DC2626;">
        <a href="https://detmaxinstitute.co.ke/registration" style="display:inline-block;padding:14px 28px;color:#FFFFFF;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.04em;">Complete Enrollment →</a>
      </td></tr></table>
      <p style="font-size:14px;line-height:1.7;color:#334155;margin:0;">Questions? Reply to this email or call <a href="tel:+254111379171" style="color:#001F3F;font-weight:700;text-decoration:none;">+254 111 379171</a>.</p>
    </td></tr>
  `;
  return emailShell(body, `Application received, ${name}. Detmax reviews it within 24 hours.`);
}

function adminInquiryEmail(data) {
  const rows = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:10px 14px 10px 0;color:#64748B;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;vertical-align:top;width:36%;">${k}</td><td style="padding:10px 0;color:#001F3F;font-size:14px;font-weight:600;">${v}</td></tr>`)
    .join('');
  return emailShell(`
    <tr><td style="padding:28px 32px;border-bottom:1px solid #E2E8F0;">
      <div style="font-size:10px;letter-spacing:0.18em;color:#DC2626;font-weight:700;text-transform:uppercase;margin-bottom:8px;">Website Lead</div>
      <h1 style="font-size:22px;font-weight:800;color:#001F3F;margin:0;letter-spacing:-0.01em;">New Website Inquiry</h1>
      <div style="font-size:12px;color:#64748B;margin-top:4px;">Submitted via detmaxinstitute.co.ke</div>
    </td></tr>
    <tr><td style="padding:24px 32px 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
    </td></tr>
  `, 'New website inquiry submitted');
}

function adminEnrollmentEmail(data, title = 'New Enrollment Application', subtitle = 'Submitted via detmaxinstitute.co.ke/registration') {
  const rows = Object.entries(data)
    .map(([k, v]) => {
      if (k.startsWith('──')) return `<tr><td colspan="2" style="padding:18px 0 6px;font-size:10px;color:#DC2626;text-transform:uppercase;letter-spacing:0.18em;font-weight:700;border-bottom:2px solid #001F3F;">${k.replace(/──/g, '').trim()}</td></tr>`;
      return `<tr><td style="padding:10px 14px 10px 0;color:#64748B;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;vertical-align:top;width:36%;">${k}</td><td style="padding:10px 0;color:#001F3F;font-size:14px;font-weight:600;">${v || '—'}</td></tr>`;
    })
    .join('');
  return emailShell(`
    <tr><td style="padding:28px 32px;border-bottom:1px solid #E2E8F0;">
      <div style="font-size:10px;letter-spacing:0.18em;color:#DC2626;font-weight:700;text-transform:uppercase;margin-bottom:8px;">Website Lead</div>
      <h1 style="font-size:22px;font-weight:800;color:#001F3F;margin:0;letter-spacing:-0.01em;">${title}</h1>
      <div style="font-size:12px;color:#64748B;margin-top:4px;">${subtitle}</div>
    </td></tr>
    <tr><td style="padding:24px 32px 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
    </td></tr>
  `, 'New enrollment application submitted');
}

// ── Main Handler ──────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { type } = body;

    if (type === 'inquiry') {
      const { name, email, phone, program, message } = body;
      if (!name || !phone) return res.status(400).json({ error: 'Name and phone are required.' });

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

      if (email) {
        await transporter.sendMail({
          from: '"Detmax Institute" <info@detmaxinstitute.co.ke>',
          to: email,
          subject: 'We Received Your Inquiry — Detmax Driving School & Computer College',
          html: inquiryAutoReply(name, program),
        });
      }

      return res.status(200).json({ success: true });

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

      await transporter.sendMail({
        from: '"Detmax Enrollment" <info@detmaxinstitute.co.ke>',
        to: 'info@detmaxinstitute.co.ke',
        replyTo: email,
        subject: `🎓 New Enrollment — ${fullName} | ${course}`,
        html: adminEnrollmentEmail({
          '── Personal Info ──': '',
          'Full Name': fullName,
          'Gender': gender,
          'Date of Birth': dob,
          'ID / Passport No': idNumber || 'Not provided',
          'Phone (WhatsApp)': phone,
          'Email Address': email,
          'Physical Address': address,
          '── Course Details ──': '',
          'Course Applied For': course,
          'Preferred Start Date': startDate,
          'Schedule Preference': schedule,
          '── Emergency Contact ──': '',
          'Contact Name': emergencyName,
          'Contact Phone': emergencyPhone,
          'Relationship': emergencyRelation,
          '── Referral ──': '',
          'Heard About Us Via': referral,
          'Referred By': referredBy || 'N/A',
          '── Meta ──': '',
          'Submitted At': new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }),
        }),
      });

      await transporter.sendMail({
        from: '"Detmax Institute" <info@detmaxinstitute.co.ke>',
        to: email,
        subject: '🎉 Enrollment Confirmed — Detmax Driving School & Computer College',
        html: enrollmentAutoReply(fullName, course, phone),
      });

      return res.status(200).json({ success: true });

    } else if (type === 'application') {
      const {
        fullName, email, phone, county, category, course,
        intake, notifyUpdates, referral, message
      } = body;

      if (!fullName || !phone || !email || !course) {
        return res.status(400).json({ error: 'Required fields are missing.' });
      }

      await transporter.sendMail({
        from: '"Detmax Applications" <info@detmaxinstitute.co.ke>',
        to: 'info@detmaxinstitute.co.ke',
        replyTo: email,
        subject: `📝 New Course Application — ${fullName} | ${course}`,
        html: adminEnrollmentEmail({
          '── Applicant ──': '',
          'Full Name': fullName,
          'Phone (WhatsApp)': phone,
          'Email Address': email,
          'County / Town': county || 'Not provided',
          '── Course Applied For ──': '',
          'Programme': category || 'Not selected',
          'Course': course,
          'Preferred Intake': intake || 'Next available',
          'Wants Intake Updates': notifyUpdates ? 'Yes — notify when new intakes open' : 'No',
          '── Message ──': '',
          'Notes From Applicant': message || 'No additional notes',
          'Heard About Us Via': referral || 'Not provided',
          '── Meta ──': '',
          'Submitted At': new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }),
        }, 'New Course Application', 'Submitted via detmaxinstitute.co.ke/application'),
      });

      await transporter.sendMail({
        from: '"Detmax Institute" <info@detmaxinstitute.co.ke>',
        to: email,
        subject: '🎯 Application Received — Detmax Driving School & Computer College',
        html: applicationAutoReply(fullName, course, Boolean(notifyUpdates)),
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
