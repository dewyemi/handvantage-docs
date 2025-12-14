import DocPage from "../DocPage";

const content = `
## WhatsApp Integration

Deploy your AI chat agent on WhatsApp to engage customers on their favorite messaging app.

### Prerequisites

*   A **Meta Business Manager** account.
*   A phone number not currently registered with WhatsApp (or you must delete the existing account).

### Step 1: Create Meta App

1.  Go to [developers.facebook.com](https://developers.facebook.com/).
2.  Create a new app. Select **Business** as the type.
3.  Add **WhatsApp** product to the app.

### Step 2: Configure WhatsApp API

1.  In the WhatsApp setup, add a phone number.
2.  Verify the number via SMS/Call.
3.  Copy the **Phone Number ID** and **WhatsApp Business Account ID**.
4.  Generate a **System User Access Token** (Permanent Token) in Business Settings.

### Step 3: Connect to Handvantage

1.  In Handvantage, go to **Integrations > WhatsApp**.
2.  Enter your:
    *   **Phone Number ID**
    *   **Business Account ID**
    *   **Access Token**
3.  Click **Save**.

### Step 4: Configure Webhook

1.  Copy the **Webhook URL** and **Verify Token** provided by Handvantage.
2.  Go back to your Meta App Dashboard > WhatsApp > Configuration.
3.  Click **Edit** under Webhook.
4.  Paste the URL and Token.
5.  Subscribe to **messages** events.

### Step 5: Test

Send a WhatsApp message to your connected number. Your AI agent should reply instantly!
`;

export default function WhatsAppSetup() {
  return (
    <DocPage
      title="WhatsApp Integration"
      description="Connect your AI agent to WhatsApp Business API."
      content={content}
      breadcrumbs={[
        { title: "Integrations", href: "/integrations" },
        { title: "WhatsApp", href: "/integrations/whatsapp" }
      ]}
    />
  );
}
