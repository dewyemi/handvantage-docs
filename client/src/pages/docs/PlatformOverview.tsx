import DocPage from "../DocPage";

const content = `
## What is Handvantage?

Handvantage is an all-in-one AI communication platform designed to help businesses automate customer interactions through voice and chat. Whether you need an AI receptionist to handle inbound calls, an outbound sales agent, or a smart chatbot for your website, Handvantage provides the tools to build, deploy, and manage these agents with ease.

### Key Capabilities

#### 🗣️ Voice Agents
Create human-like voice assistants that can:
*   **Handle Inbound Calls**: Answer customer queries, book appointments, and route calls.
*   **Make Outbound Calls**: Conduct lead qualification, surveys, and appointment reminders.
*   **Natural Conversation**: Powered by advanced LLMs (like GPT-4) and ultra-low latency voice engines for seamless interaction.

#### 💬 Chat Agents
Deploy intelligent chatbots across multiple channels:
*   **Website Widget**: Embed a chat bubble on your site to engage visitors 24/7.
*   **Messaging Apps**: Connect with WhatsApp, Facebook Messenger, Instagram, and Telegram.
*   **Multi-Modal**: Support for text, images, and rich media.

#### 🔌 Integrations
Connect your AI agents to the tools you already use:
*   **CRM**: Sync contacts and conversations with GoHighLevel (GHL), HubSpot, and Salesforce.
*   **Calendar**: Real-time appointment booking with Google Calendar and Outlook.
*   **Communication**: Bring your own Twilio or Plivo accounts for telephony.

### How It Works

1.  **Build**: Define your agent's personality, knowledge base, and skills using our intuitive builder.
2.  **Test**: Simulate conversations directly in the dashboard to fine-tune performance.
3.  **Deploy**: Assign a phone number or embed a widget to go live instantly.
4.  **Analyze**: Monitor call logs, transcripts, and analytics to improve your agent over time.

### Getting Help

If you need assistance, our support team is here to help. You can access support directly from the dashboard or browse this documentation for detailed guides.
`;

export default function PlatformOverview() {
  return (
    <DocPage
      title="Platform Overview"
      description="Understand the core capabilities and features of Handvantage."
      content={content}
      breadcrumbs={[{ title: "Getting Started", href: "/getting-started" }]}
    />
  );
}
