import DocPage from "../DocPage";

const content = `
## Building a Chat Agent

Chat agents are perfect for website support, lead capture, and instant messaging channels. This guide covers creating a text-based AI assistant.

### Step 1: Create Assistant

1.  Go to **Assistants** > **Create Assistant**.
2.  Select **Chat** as the type.
3.  Name your assistant (e.g., "Website Support Bot").

### Step 2: Model & Prompt

*   **Model**: For chat, **GPT-4o** or **GPT-3.5-turbo** are popular choices.
    *   *GPT-4o*: Better reasoning, handles complex queries well.
    *   *GPT-3.5*: Faster and cheaper, good for simple FAQs.
*   **Prompt**: Define the bot's persona.
    *   *Example*: "You are a helpful support bot for Handvantage. Answer questions based on the knowledge base. If you don't know the answer, ask the user for their email to follow up."

### Step 3: Knowledge Base (RAG)

To make your bot smart, give it data.

1.  Go to the **Knowledge Base** tab.
2.  **Upload Files**: PDF, DOCX, TXT files containing your FAQs, pricing, or manuals.
3.  **Add URLs**: Enter your website URL to scrape content automatically.
4.  **Q&A**: Manually add specific Question-Answer pairs.

The AI will now "read" this information and use it to answer user queries accurately.

### Step 4: First Message

Set the opening line for the chat.
*   *Example*: "Hi there! 👋 How can I help you with Handvantage today?"

### Step 5: User Form (Lead Gen)

You can require users to provide details before chatting.
*   Enable **Pre-chat Form**.
*   Select fields: Name, Email, Phone Number.
*   This is excellent for capturing leads even if the user doesn't finish the conversation.

### Step 6: Test

Use the **Preview** pane on the right side of the builder to chat with your bot immediately. Test if it answers questions from your knowledge base correctly.
`;

export default function ChatAgentBuild() {
  return (
    <DocPage
      title="Build Your First Chat Agent"
      description="Create an intelligent chatbot for your website or messaging apps."
      content={content}
      breadcrumbs={[
        { title: "Chat Agents", href: "/chat-agent" },
        { title: "Build", href: "/chat-agent/build" }
      ]}
    />
  );
}
