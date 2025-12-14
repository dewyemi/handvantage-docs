import DocPage from "../DocPage";

const content = `
## GoHighLevel (GHL) Integration

Integrate Handvantage with GoHighLevel to automate lead follow-ups, appointment booking, and contact syncing.

### Features

*   **Two-Way Sync**: Contacts created in Handvantage appear in GHL, and vice versa.
*   **Conversation Sync**: Chat logs and call transcripts are pushed to the GHL contact's timeline.
*   **Appointment Booking**: The AI can book appointments directly into GHL calendars.
*   **Tagging**: Apply tags in GHL based on call outcomes (e.g., "booked", "interested", "voicemail").

### Step 1: Connect GHL Account

1.  In Handvantage, go to **Integrations**.
2.  Find **GoHighLevel** and click **Connect**.
3.  You will be redirected to the GHL login page.
4.  Select the **Sub-account** (Location) you want to connect.
5.  Authorize the connection.

### Step 2: Configure Calendar

To enable appointment booking:

1.  Go to **Assistants** > **Tools**.
2.  Enable the **Calendar Booking** tool.
3.  Select your **GHL Calendar** from the dropdown.
4.  The AI now has access to your availability and can book slots.

### Step 3: Workflow Triggers (Optional)

You can trigger AI calls from GHL workflows.

1.  In GHL, create a workflow.
2.  Add a **Webhook** action.
3.  **URL**: \`https://api.handvantage360.com/webhooks/ghl/outbound\`
4.  **Method**: POST
5.  **Data**:
    \`\`\`json
    {
      "contact_id": "{{contact.id}}",
      "assistant_id": "YOUR_ASSISTANT_ID"
    }
    \`\`\`

This will trigger an outbound call to the contact whenever the workflow runs.
`;

export default function GHLSetup() {
  return (
    <DocPage
      title="GoHighLevel (GHL) Integration"
      description="Sync contacts, conversations, and appointments with GHL."
      content={content}
      breadcrumbs={[
        { title: "Integrations", href: "/integrations" },
        { title: "GoHighLevel", href: "/integrations/ghl" }
      ]}
    />
  );
}
