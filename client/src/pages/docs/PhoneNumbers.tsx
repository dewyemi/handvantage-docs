import DocPage from "../DocPage";

const content = `
## Managing Phone Numbers

To deploy a voice agent, you need a phone number. Handvantage allows you to purchase new numbers or bring your own via Twilio/Plivo integrations.

### Purchasing a Number

1.  Navigate to the **Phone Numbers** section in the sidebar.
2.  Click the **"Buy Number"** button.
3.  **Search Criteria**:
    *   **Country**: Select the country (e.g., United States, United Kingdom).
    *   **Type**: Choose **Local**, **Mobile**, or **Toll-Free**.
    *   **Area Code**: Enter a specific area code (e.g., 415) to find local numbers.
    *   **Contains**: Search for specific digit patterns (vanity numbers).
4.  Select a number from the list and click **Buy**.
    *   *Cost*: The monthly rental fee will be deducted from your wallet balance.

### Assigning an Agent

Once you own a number, you must tell the system which AI agent should answer calls.

1.  Find your number in the list and click **Edit** (pencil icon).
2.  **Inbound Agent**: Select the voice assistant you created from the dropdown.
3.  **Click Save**.

Now, any call to this number will be handled by that specific AI agent.

### Call Forwarding (Fallback)

You can set up a fallback number for situations where the AI cannot answer or needs to transfer the call.

*   **Forwarding Number**: Enter a human agent's phone number.
*   **Conditions**:
    *   *On Failure*: If the AI crashes or encounters an error.
    *   *On Transfer*: If the AI determines the user needs human assistance (triggered by the "Transfer Call" tool).

### Releasing a Number

If you no longer need a number:
1.  Click the **Delete/Trash** icon next to the number.
2.  Confirm the action.
    *   *Warning*: This action is irreversible. You will stop being billed for the number, but you may not be able to get the same number back later.

### Regulatory Compliance (A2P 10DLC)

For US numbers, you may need to register for A2P 10DLC to ensure high deliverability and avoid spam filtering.
*   Go to **Agency > Compliance** to submit your business details for registration.
`;

export default function PhoneNumbers() {
  return (
    <DocPage
      title="Phone Numbers"
      description="Buy, configure, and manage phone numbers for your voice agents."
      content={content}
      breadcrumbs={[
        { title: "Voice Agents", href: "/voice-agent" },
        { title: "Phone Numbers", href: "/voice-agent/phone-numbers" }
      ]}
    />
  );
}
