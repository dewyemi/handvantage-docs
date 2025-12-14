import DocPage from "../DocPage";

const content = `
## Deploying to Your Website

Once your chat agent and widget are configured, it's time to put it on your live site.

### Get the Embed Code

1.  Go to **Widgets**.
2.  Find your widget and click **Install** or **Get Code**.
3.  You will see a script tag similar to this:

\`\`\`html
<script 
  src="https://app.handvantage360.com/loader.js" 
  data-widget-id="YOUR_WIDGET_ID">
</script>
\`\`\`

### Installation Instructions

#### Generic HTML Website
Paste the code snippet just before the closing \`</body>\` tag of your website's HTML file.

#### WordPress
1.  Install a plugin like "Insert Headers and Footers".
2.  Go to the plugin settings.
3.  Paste the code into the **Scripts in Footer** section.
4.  Save changes.

#### Shopify
1.  Go to **Online Store > Themes**.
2.  Click **Actions > Edit Code**.
3.  Open \`theme.liquid\`.
4.  Paste the code before the \`</body>\` tag.
5.  Save.

#### Wix
1.  Go to **Settings > Custom Code**.
2.  Click **+ Add Custom Code**.
3.  Paste the snippet.
4.  Select **Body - End**.
5.  Apply to **All Pages**.

### Verification

Open your website in a new tab. You should see the chat bubble appear in the corner. Try sending a message to verify it's connected to your agent.
`;

export default function DeployToWebsite() {
  return (
    <DocPage
      title="Deploy to Website"
      description="How to embed the chat widget on WordPress, Shopify, Wix, and custom sites."
      content={content}
      breadcrumbs={[
        { title: "Chat Agents", href: "/chat-agent" },
        { title: "Deploy", href: "/chat-agent/deploy" }
      ]}
    />
  );
}
