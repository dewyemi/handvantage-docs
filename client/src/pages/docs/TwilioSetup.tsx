import DocPage from "../DocPage";

const content = `
## Twilio Integration (BYOT)

"Bring Your Own Twilio" allows you to use your own Twilio account for telephony while leveraging Handvantage's AI capabilities. This gives you full control over your phone numbers and billing.

### Prerequisites

*   A [Twilio Account](https://www.twilio.com/).
*   A purchased phone number in Twilio.

### Step 1: Get Twilio Credentials

1.  Log in to your Twilio Console.
2.  Copy your **Account SID**.
3.  Copy your **Auth Token**.

### Step 2: Connect to Handvantage

1.  In Handvantage, go to **Integrations**.
2.  Find **Twilio** and click **Connect**.
3.  Paste your **Account SID** and **Auth Token**.
4.  Click **Save**.

### Step 3: Configure the Phone Number

You need to point your Twilio number to Handvantage's webhook.

1.  In Twilio, go to **Phone Numbers > Manage > Active Numbers**.
2.  Click on the number you want to use.
3.  Scroll down to the **Voice & Fax** section.
4.  **A Call Comes In**: Select **Webhook**.
5.  **URL**: Enter the Handvantage Voice Webhook URL:
    *   \`https://api.handvantage360.com/webhooks/twilio/voice\`
    *   Method: **POST**
6.  Click **Save**.

### Step 4: Assign Agent

1.  Back in Handvantage, go to **Phone Numbers**.
2.  Click **Import Twilio Numbers**.
3.  Select the number you just configured.
4.  Assign your AI Assistant to this number.

Now, calls to your Twilio number will be processed by Handvantage.
`;

export default function TwilioSetup() {
  return (
    <DocPage
      title="Twilio Setup Guide"
      description="Connect your own Twilio account to use existing phone numbers."
      content={content}
      breadcrumbs={[
        { title: "Integrations", href: "/integrations" },
        { title: "Twilio", href: "/integrations/twilio" }
      ]}
    />
  );
}
