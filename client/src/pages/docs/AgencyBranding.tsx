import DocPage from "../DocPage";

const content = `
## White-Labeling Overview

As an agency partner, you can completely customize the Handvantage platform to match your brand identity. This includes the logo, colors, domain, and email settings.

### 1. General Branding

Navigate to **Agency > Branding** in your dashboard.

*   **Agency Name**: This name will appear in emails and page titles.
*   **Logo**: Upload your agency logo.
    *   *Recommended size*: 200x50px (PNG or SVG).
    *   *Background*: Transparent.
*   **Favicon**: Upload a square icon (32x32px) for the browser tab.

### 2. Color Theme

Customize the look and feel of the dashboard for your sub-accounts.

*   **Primary Color**: The main color for buttons and active links.
*   **Sidebar Color**: The background color of the navigation sidebar.
*   **Accent Color**: Used for highlights and secondary elements.

You can choose from preset themes or enter custom hex codes.

### 3. Custom Domain (CNAME)

To serve the platform from your own domain (e.g., \`app.youragency.com\`):

1.  Go to **Agency > Domain**.
2.  Enter your desired subdomain (e.g., \`app\`).
3.  Select your root domain.
4.  **DNS Configuration**:
    *   Log in to your DNS provider (GoDaddy, Namecheap, Cloudflare, etc.).
    *   Create a **CNAME record**.
    *   **Host**: \`app\` (or your chosen subdomain).
    *   **Value**: \`cname.handvantage360.com\` (or the value provided in the dashboard).
    *   **TTL**: Automatic or 1 hour.
5.  Click **Verify** in the dashboard. SSL certificates will be provisioned automatically.

### 4. Email Settings (SMTP)

By default, system emails come from a generic address. To use your own email domain:

1.  Go to **Agency > SMTP**.
2.  Enter your SMTP credentials:
    *   **Host**: (e.g., \`smtp.gmail.com\`, \`smtp.sendgrid.net\`)
    *   **Port**: (usually 587 or 465)
    *   **Username**: Your email address or API user.
    *   **Password**: Your email password or API key.
    *   **From Email**: The email address users will see.
    *   **From Name**: Your agency name.
3.  Click **Save & Test** to verify the connection.

### 5. Custom Scripts

You can add custom JavaScript or CSS to the platform for further customization (e.g., adding a support chat widget for your clients).

1.  Go to **Agency > Scripts**.
2.  Paste your code into the **Head Code** or **Body Code** sections.
3.  Click **Save**.

⚠️ **Note**: Be careful with custom scripts as they can break the UI if not written correctly.
`;

export default function AgencyBranding() {
  return (
    <DocPage
      title="Agency Branding & Customization"
      description="Whitelabel the platform with your own logo, colors, and domain."
      content={content}
      breadcrumbs={[
        { title: "Agency Features", href: "/agency" },
        { title: "Branding", href: "/agency/branding" }
      ]}
    />
  );
}
