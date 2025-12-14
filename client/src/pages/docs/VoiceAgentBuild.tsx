import DocPage from "../DocPage";

const content = `
## Overview

Building a voice agent involves defining its personality, configuring its voice settings, and connecting it to a telephony provider. This guide walks you through the entire process.

### Step 1: Create a New Assistant

1.  Log in to your dashboard.
2.  Go to **Assistants** and click **Create Assistant**.
3.  Select **Voice** as the type.
4.  Give your assistant a recognizable name.

### Step 2: Configure the Prompt (System Instruction)

The prompt is the "brain" of your agent. It tells the AI how to behave.

**Best Practices for Prompts:**
*   **Role Definition**: Clearly state who the AI is (e.g., "You are a senior support specialist").
*   **Goal**: Define the objective (e.g., "Help the user troubleshoot their internet connection").
*   **Constraints**: Set boundaries (e.g., "Do not ask for credit card information").
*   **Tone**: Specify the tone (e.g., "Be polite, patient, and professional").

**Example Prompt:**
> You are Alex, a booking agent for City Hotel. Your goal is to help customers book rooms. Ask for their check-in date, check-out date, and number of guests. If a room is available, confirm the booking. Be friendly and concise.

### Step 3: Voice Settings

Navigate to the **Voice** tab to configure how your agent sounds.

*   **Provider**: Choose from providers like ElevenLabs, Azure, or PlayHT.
*   **Voice ID**: Select a specific voice (e.g., "Rachel", "Josh").
*   **Stability & Similarity**: Adjust these sliders to control the emotional range and consistency of the voice.
*   **Speed**: Set the speaking rate (1.0 is normal).

### Step 4: Transcriber Settings

The transcriber converts the user's speech into text for the AI to process.

*   **Language**: Select the primary language (e.g., English, Spanish).
*   **Model**: Choose a transcription model (Deepgram Nova-2 is recommended for speed).
*   **Keywords**: Add specific keywords (like your company name) to improve recognition accuracy.

### Step 5: Testing

Before deploying, use the **"Test Voice"** button in the dashboard. This allows you to have a conversation with your agent directly in the browser to verify the prompt and voice settings.

### Step 6: Assign to Phone Number

Once you are happy with the agent:
1.  Go to **Phone Numbers**.
2.  Select a number.
3.  Choose your new assistant from the **Inbound Agent** dropdown.
4.  Click **Save**.

Your voice agent is now live and ready to take calls!
`;

export default function VoiceAgentBuild() {
  return (
    <DocPage
      title="Build Your First Voice Agent"
      description="Learn how to create, configure, and deploy an AI voice assistant."
      content={content}
      breadcrumbs={[
        { title: "Voice Agents", href: "/voice-agent" },
        { title: "Build", href: "/voice-agent/build" }
      ]}
    />
  );
}
