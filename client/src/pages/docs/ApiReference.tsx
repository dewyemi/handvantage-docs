import DocPage from "../DocPage";

const content = `
## Authentication

All API requests require authentication using an API Key. You can generate an API Key in your dashboard under **Settings > API Keys**.

Include the API Key in the header of your requests:

\`\`\`bash
Authorization: Bearer YOUR_API_KEY
\`\`\`

---

## Base URL

All API endpoints are relative to the following base URL:

\`\`\`
https://api.handvantage360.com/v1
\`\`\`

---

## Assistants

### List Assistants

Retrieve a list of all assistants in your account.

**Endpoint:** \`GET /assistants\`

**Response:**

\`\`\`json
{
  "data": [
    {
      "id": "asst_12345",
      "name": "Support Bot",
      "type": "voice",
      "created_at": "2023-10-27T10:00:00Z"
    }
  ]
}
\`\`\`

### Create Assistant

Create a new AI assistant.

**Endpoint:** \`POST /assistants\`

**Body:**

\`\`\`json
{
  "name": "Sales Agent",
  "type": "voice",
  "model": "gpt-4",
  "prompt": "You are a sales representative..."
}
\`\`\`

---

## Phone Numbers

### List Phone Numbers

Get all phone numbers associated with your account.

**Endpoint:** \`GET /phone-numbers\`

**Response:**

\`\`\`json
{
  "data": [
    {
      "id": "pn_98765",
      "number": "+15550123456",
      "assistant_id": "asst_12345"
    }
  ]
}
\`\`\`

### Purchase Phone Number

Buy a new phone number.

**Endpoint:** \`POST /phone-numbers/buy\`

**Body:**

\`\`\`json
{
  "area_code": "415",
  "country": "US"
}
\`\`\`

---

## Calls

### Make Outbound Call

Trigger an outbound call from an assistant to a user.

**Endpoint:** \`POST /calls/outbound\`

**Body:**

\`\`\`json
{
  "assistant_id": "asst_12345",
  "to": "+15559876543",
  "from": "+15550123456"
}
\`\`\`

### Get Call Logs

Retrieve logs for a specific call.

**Endpoint:** \`GET /calls/{call_id}\`

---

## Webhooks

You can configure webhooks to receive real-time updates about calls and messages.

**Events:**

*   \`call.started\`
*   \`call.ended\`
*   \`message.received\`
*   \`message.sent\`

Configure your webhook URL in the **Settings > Webhooks** section of the dashboard.
`;

export default function ApiReference() {
  return (
    <DocPage
      title="API Reference"
      description="Complete documentation for the Handvantage API."
      content={content}
      breadcrumbs={[{ title: "Developers", href: "/developers" }]}
    />
  );
}
