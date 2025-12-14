import DocPage from "../DocPage";

const content = `
## Configuring Voice Settings

The "Voice" tab in the assistant builder allows you to customize exactly how your AI agent sounds and speaks. This is crucial for creating a natural and engaging user experience.

### Voice Provider & Selection

Handvantage integrates with top-tier voice providers to offer a wide range of realistic voices.

*   **Provider**: Choose from **ElevenLabs**, **Azure**, **PlayHT**, **Cartesia**, or **Deepgram**.
*   **Voice ID**: Select a specific voice persona. We recommend testing different voices to find one that matches your brand's tone.
    *   *Tip*: "Flash" models (like ElevenLabs Turbo) offer lower latency for faster responses.

### Voice Parameters

Fine-tune the delivery of the voice:

*   **Stability**: Controls how consistent the voice sounds.
    *   *High*: More monotone and stable.
    *   *Low*: More expressive and varied.
*   **Similarity Boost**: Determines how closely the AI mimics the original voice sample.
*   **Speed**: Adjust the speaking rate.
    *   *0.8 - 0.9*: Slower, clearer (good for complex information).
    *   *1.0*: Normal conversational speed.
    *   *1.1 - 1.2*: Faster, more energetic.

### Conversation Flow Settings

These settings control the turn-taking dynamics of the conversation.

*   **Silence Timeout**: How long the AI waits after the user stops speaking before it responds.
    *   *Default*: ~1000ms (1 second).
    *   *Adjustment*: Decrease for snappier responses, increase if users tend to pause while thinking.
*   **Interruption Sensitivity**: Determines how easily the user can interrupt the AI while it's speaking.
    *   *Enabled*: Allows users to "barge in" and change the topic.
    *   *Disabled*: The AI will finish its sentence before listening again.

### Background Audio

You can add ambient noise to make the call feel more natural or professional.

*   **Office Ambience**: Subtle background office sounds.
*   **Call Center**: Light chatter to mimic a support center.
*   **White Noise**: Very faint static to prevent "dead air" silence.

### Troubleshooting Voice Issues

*   **Latency**: If the AI takes too long to respond, try switching to a "Turbo" or "Flash" voice model and ensure your server location is close to your users.
*   **Mispronunciation**: If the AI mispronounces a specific word (like a brand name), you can use the **Pronunciation Dictionary** to provide phonetic spellings.
`;

export default function VoiceSettings() {
  return (
    <DocPage
      title="Voice Settings"
      description="Master the art of configuring your agent's voice and speech patterns."
      content={content}
      breadcrumbs={[
        { title: "Voice Agents", href: "/voice-agent" },
        { title: "Settings", href: "/voice-agent/settings" }
      ]}
    />
  );
}
