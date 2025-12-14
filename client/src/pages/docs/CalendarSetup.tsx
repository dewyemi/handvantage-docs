import DocPage from "../DocPage";

const content = `
## Calendar Integration

Enable your AI agents to check availability and book appointments directly on your calendar.

### Supported Providers

*   **Google Calendar**
*   **Outlook / Office 365**
*   **Cal.com**
*   **Calendly** (via link sharing)

### Connecting Google Calendar

1.  Go to **Integrations**.
2.  Click **Sign in with Google**.
3.  Grant permissions to view and edit events.
4.  Select the specific calendar(s) you want the AI to manage.

### Configuring the Booking Tool

Once connected, you need to give the AI the "tool" to use the calendar.

1.  Go to **Assistants** > **Tools**.
2.  Add **Calendar Booking**.
3.  **Settings**:
    *   **Duration**: Default meeting length (e.g., 30 mins).
    *   **Timezone**: Your business timezone.
    *   **Buffer**: Time between meetings.
    *   **Availability**: Set your working hours (e.g., Mon-Fri, 9am-5pm).

### How the AI Handles Booking

*   **Checking Availability**: "I have an opening at 2 PM or 4 PM on Tuesday. Which works for you?"
*   **Booking**: "Great, I've booked you for Tuesday at 2 PM. You'll receive a confirmation email shortly."
*   **Rescheduling**: "No problem, I can move that to Wednesday. Is 10 AM okay?"

### Troubleshooting

*   **Double Booking**: Ensure the AI is checking the correct "Conflicts" calendar.
*   **Timezones**: Always confirm the user's timezone if they are calling from a different region.
`;

export default function CalendarSetup() {
  return (
    <DocPage
      title="Calendar Tools"
      description="Enable appointment booking with Google, Outlook, and Cal.com."
      content={content}
      breadcrumbs={[
        { title: "Integrations", href: "/integrations" },
        { title: "Calendar", href: "/integrations/calendar" }
      ]}
    />
  );
}
