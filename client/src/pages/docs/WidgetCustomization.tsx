import DocPage from "../DocPage";

const content = `
## Widget Customization

The web widget is the visible chat interface on your website. You can fully customize its appearance to match your brand.

### Accessing Widget Settings

1.  Go to **Widgets**.
2.  Select your chat widget or create a new one.
3.  Click on the **Appearance** tab.

### Visual Settings

*   **Brand Color**: Choose the primary color for the chat bubble and header.
*   **Logo**: Upload your company logo (displayed in the header).
*   **Bot Avatar**: Upload an image for the AI persona (e.g., a robot icon or a photo of a team member).
*   **Position**: Choose **Bottom Right** (default) or **Bottom Left**.

### Text & Labels

*   **Header Title**: The text at the top of the chat window (e.g., "Chat with us").
*   **Sub-header**: A short description (e.g., "Online 24/7").
*   **Input Placeholder**: Text in the typing area (e.g., "Type your message...").
*   **Send Button Label**: Text on the send button.

### Behavior

*   **Auto-Open**: Automatically open the chat window after a set delay (e.g., 5 seconds).
*   **Sound Notifications**: Play a sound when a new message arrives.
*   **Mobile Behavior**: Choose if the widget should be minimized or full-screen on mobile devices.

### Custom CSS

For advanced styling, you can inject custom CSS to override default styles.
*   *Example*: Change the font family or border radius.

\`\`\`css
.chat-window {
  font-family: 'Inter', sans-serif;
  border-radius: 12px;
}
\`\`\`
`;

export default function WidgetCustomization() {
  return (
    <DocPage
      title="Widget Customization"
      description="Style your chat widget to perfectly match your website's design."
      content={content}
      breadcrumbs={[
        { title: "Chat Agents", href: "/chat-agent" },
        { title: "Widget", href: "/chat-agent/widget" }
      ]}
    />
  );
}
