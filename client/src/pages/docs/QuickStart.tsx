import DocPage from "../DocPage";

const content = `
## Introduction

Welcome to Handvantage! This guide will help you get started with building your first AI agents. Handvantage is a powerful platform that allows you to create, deploy, and manage AI-powered voice and chat agents for your business.

### Prerequisites

Before you begin, make sure you have:

1.  **A Handvantage Account**: Log in to [app.handvantage360.com](https://app.handvantage360.com).
2.  **Credits**: Ensure your wallet has credits (new accounts come with free credits).

---

## Step 1: Create Your First Assistant

The core of Handvantage is the **Assistant**. An assistant defines the personality, knowledge, and capabilities of your AI.

1.  Navigate to the **Assistants** tab in the sidebar.
2.  Click the **"Create Assistant"** button.
3.  Enter a **Name** for your assistant (e.g., "Receptionist").
4.  Select the **Type**:
    *   **Voice**: For phone calls and voice interactions.
    *   **Chat**: For text-based chat widgets.

### Configuring the Model

Once created, you'll be taken to the configuration page.

*   **Model**: Choose the LLM model (e.g., GPT-4o, GPT-3.5-turbo).
*   **Prompt**: This is the most important part. Describe who the assistant is and what it should do.
    *   *Example*: "You are a helpful receptionist for a dental clinic. Your goal is to schedule appointments and answer questions about services."

---

## Step 2: Set Up a Phone Number (Voice Only)

To make or receive calls, your voice assistant needs a phone number.

1.  Go to the **Phone Numbers** section.
2.  Click **"Buy Number"**.
3.  Search for a number by area code or location.
4.  Purchase the number using your wallet credits.
5.  **Assign the Assistant**: In the phone number settings, select the assistant you created in Step 1.

Now, when someone calls this number, your AI assistant will answer!

---

## Step 3: Create a Web Widget (Chat Only)

For chat assistants, you'll want to embed them on your website.

1.  Go to the **Widgets** section.
2.  Click **"Create Widget"**.
3.  Select the **Chat Assistant** you created.
4.  Customize the appearance (color, logo, welcome message).
5.  Copy the **Embed Code**.
6.  Paste the code into the \`<body>\` of your website's HTML.

---

## Next Steps

Now that you have a basic assistant running, explore these advanced features:

*   **[Knowledge Base](/knowledge-base)**: Upload documents (PDFs, text) to train your assistant on your specific business data.
*   **[Tools & Integrations](/integrations)**: Connect your assistant to calendars, CRMs, and other external tools.
*   **[Agency Settings](/agency/branding)**: Customize the platform with your own branding if you are an agency partner.
`;

export default function QuickStart() {
  return (
    <DocPage
      title="Quick Start Guide"
      description="Get up and running with Handvantage in minutes."
      content={content}
      breadcrumbs={[{ title: "Getting Started", href: "/getting-started" }]}
    />
  );
}
