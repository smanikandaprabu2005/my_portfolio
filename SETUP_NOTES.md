# Quick Setup Notes

## Before Deploying

### 1. Add Your Profile Photo
- Place your profile photo in the `public/` folder
- Name it exactly: `profile-photo.jpg`
- Recommended size: 350x350px or larger (square image works best)
- If the image doesn't exist, a placeholder with your initials will be shown

### 2. Update Contact Information
Edit `src/components/Contact.jsx` and update:
- Phone number (replace `+91 XXXXXXXXXX`)
- Email address (replace `your.email@example.com`)
- LinkedIn profile URL (replace `https://linkedin.com/in/yourprofile`)

Also update the email in the form's `handleSubmit` function (line ~25).

### 3. Configure EmailJS
- Create an account at https://www.emailjs.com/
- Add a service and email template with fields: `from_name`, `from_email`, `reply_to`, `message`, `to_email`
- Create a `.env` file in the project root with:
  - `VITE_EMAILJS_SERVICE_ID=your_service_id`
  - `VITE_EMAILJS_TEMPLATE_ID=your_template_id`
  - `VITE_EMAILJS_PUBLIC_KEY=your_public_key`
- Restart the Vite server after adding environment variables.

### 4. Add Your Resume
- Place your resume PDF file in the `public/` folder
- Name it exactly: `resume.pdf`
- The download button will automatically link to it

### 4. Optional: Add Favicon
- Add a favicon.ico file to the `public/` folder if desired

## Ready to Deploy

Once you've added your photo, updated the contact information, and added your resume, you're ready to deploy!

See README.md for deployment instructions.

