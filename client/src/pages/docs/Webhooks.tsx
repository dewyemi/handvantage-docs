import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Webhook, Settings, FileText, Bot, CheckCircle2, Info, AlertTriangle, Link as LinkIcon } from "lucide-react";

export default function Webhooks() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Webhooks</h1>
        <p className="text-xl text-muted-foreground">
          Send data from Handvantage 360 to other platforms in real-time to automate workflows and keep systems in sync.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="mb-4">
          Webhooks let you send data from Handvantage 360 to external platforms in real-time. When specific events occur—such as a form submission, conversation completion, or assistant action—Handvantage 360 can automatically send data to your chosen endpoint.
        </p>
        
        <p className="mb-4">
          Use webhooks to connect with automation platforms like Zapier, Make (Integromat), or custom applications. This enables you to trigger workflows, update CRMs, send notifications, log data, and integrate Handvantage 360 with your existing tech stack.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Create webhook in Settings</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Connect to form or assistant</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Data flows automatically</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Prerequisites
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Handvantage 360 account with active assistant or form</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Webhook endpoint URL from your automation platform or custom application</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Understanding of the data you want to send and receive</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle>Common Webhook Use Cases</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div><strong>CRM Updates:</strong> Automatically create or update contacts in Salesforce, HubSpot, or Zoho when conversations complete</div>
          <div><strong>Lead Notifications:</strong> Send Slack or email notifications when high-value leads are captured</div>
          <div><strong>Data Logging:</strong> Store conversation transcripts, form submissions, or call recordings in your database</div>
          <div><strong>Workflow Automation:</strong> Trigger multi-step workflows in Zapier or Make based on assistant actions</div>
          <div><strong>Analytics:</strong> Send event data to Google Analytics, Mixpanel, or custom analytics platforms</div>
          <div><strong>Ticketing Systems:</strong> Create support tickets in Zendesk, Freshdesk, or Jira automatically</div>
          <div><strong>Payment Processing:</strong> Trigger payment collection or invoice generation after appointments</div>
          <div><strong>Calendar Integration:</strong> Add events to Google Calendar or Outlook when appointments are booked</div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 1: Add a Webhook in Handvantage 360</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Access Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in to your <a href="https://portal.handvantage.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Handvantage 360 dashboard</a></li>
                <li>Click on <strong>Settings</strong> located in the bottom left corner of the dashboard</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Select Webhooks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the Settings menu, find and click on <strong>Webhooks</strong> from the list of options</li>
                <li>This will open the Webhooks management section</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Click the "+" Button to Add a New Webhook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the Webhooks section, click the <strong>+</strong> button</li>
                <li>This will open a form where you can enter the webhook details</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Webhook className="h-5 w-5 text-purple-600" />
                Enter Webhook Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>In the form, provide the following information:</p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-1">Name</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Enter a clear and descriptive name for your webhook. This helps you identify it later when connecting to forms or assistants.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-sm space-y-1">
                    <div>Example: &quot;Zapier Lead Capture&quot;</div>
                    <div>Example: &quot;CRM Contact Sync&quot;</div>
                    <div>Example: &quot;Slack Notifications&quot;</div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-1">Endpoint URL</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Input the URL from the platform you're creating a workflow with. This is where Handvantage 360 will send the data when the webhook is triggered.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-sm">
                    https://hooks.zapier.com/hooks/catch/123456/abcdef/
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Get this URL from your automation platform (Zapier, Make, etc.) or your custom application endpoint
                  </p>
                </div>
              </div>

              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Where to get your Endpoint URL:</strong><br/>
                  <span className="text-sm">
                    • <strong>Zapier:</strong> Create a &quot;Catch Hook&quot; trigger in a Zap<br/>
                    • <strong>Make:</strong> Use a &quot;Webhooks&quot; module with &quot;Custom webhook&quot;<br/>
                    • <strong>Custom App:</strong> Create an HTTP endpoint that accepts POST requests
                  </span>
                </AlertDescription>
              </Alert>

              <p className="mt-3">Once done, click <strong>Save</strong> or <strong>Create</strong> to add your webhook.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Your Webhook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>After creating the webhook, you'll see it listed in the Webhooks section. Here, you can:</p>
              
              <div className="space-y-2 ml-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
                  <span><strong>Check logs</strong> to see the activity and data sent through this webhook</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
                  <span><strong>Edit</strong> the webhook details if you need to update the name or endpoint URL</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
                  <span><strong>Delete</strong> the webhook if it's no longer needed</span>
                </div>
              </div>

              <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertDescription>
                  <strong>Important:</strong> Each webhook connected to a form or assistant must be unique. Avoid reusing the same webhook across multiple forms or assistants to ensure your data flows correctly and actions trigger without conflicts.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 2: Connect Webhook to Forms</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Go to the Forms Section
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Navigate to the <strong>Library</strong> section in the left sidebar</li>
                <li>Click on <strong>Forms</strong> to view all your forms</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Edit an Existing Form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the Forms section, locate the form you want to connect the webhook to</li>
                <li>Click <strong>Edit</strong> to open the form's settings</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-blue-600" />
                Select the Webhook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Within the form's settings, find the <strong>Webhook</strong> field</li>
                <li>Open the dropdown and select the webhook you created earlier</li>
                <li>This links the form to the webhook, so any form submissions will trigger the webhook automatically</li>
                <li>Click <strong>Save</strong> to apply the changes</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Success!</strong> Now, every time someone submits this form, Handvantage 360 will automatically send the form data to your webhook endpoint.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What Data is Sent?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>When a form is submitted, the webhook sends a JSON payload containing:</p>
              <div className="space-y-2 ml-4 text-sm">
                <div>• All form field values (name, email, phone, custom fields, etc.)</div>
                <div>• Submission timestamp</div>
                <div>• Form ID and name</div>
                <div>• User/contact information (if available)</div>
                <div>• Any additional metadata configured in the form</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 3: Connect Webhook to Assistants</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-purple-600" />
                Edit the Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Navigate to the <strong>Assistants</strong> section in the left sidebar</li>
                <li>Find the assistant you want to connect the webhook to</li>
                <li>Click <strong>Edit</strong> to open the assistant's settings</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect the Webhook in the Advanced Tab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Within the assistant's settings, go to the <strong>Advanced</strong> tab</li>
                <li>Scroll down to find the <strong>Webhook</strong> field</li>
                <li>Select the webhook you want to connect from the dropdown menu</li>
                <li>Click <strong>Save</strong> to apply the changes</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Success!</strong> Your assistant will now send data to the webhook endpoint after each conversation or specific events.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What Data is Sent from Assistants?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>When an assistant triggers a webhook, the JSON payload typically contains:</p>
              <div className="space-y-2 ml-4 text-sm">
                <div>• Conversation transcript (full or summary)</div>
                <div>• Contact information collected (name, email, phone, etc.)</div>
                <div>• Assistant ID and name</div>
                <div>• Conversation start and end timestamps</div>
                <div>• Call duration (for voice assistants)</div>
                <div>• Intent detected (if configured)</div>
                <div>• Custom variables or data extracted during the conversation</div>
                <div>• Sentiment analysis (if enabled)</div>
                <div>• Recording URL (if call recording is enabled)</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Testing Your Webhook
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>After connecting your webhook, test it thoroughly to ensure data flows correctly:</p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-2">1. Submit a Test Form or Start a Test Conversation</h4>
              <p className="text-sm text-muted-foreground">
                Trigger the webhook by submitting a form or having a conversation with the assistant. Use test data to avoid polluting your production systems.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-2">2. Check Webhook Logs in Handvantage 360</h4>
              <p className="text-sm text-muted-foreground">
                Go to Settings → Webhooks and click on your webhook to view logs. Verify that the webhook was triggered and data was sent successfully.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-2">3. Verify Data Received on the Other End</h4>
              <p className="text-sm text-muted-foreground">
                Check your automation platform (Zapier, Make, etc.) or custom application to confirm the data was received correctly and in the expected format.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-2">4. Test Error Scenarios</h4>
              <p className="text-sm text-muted-foreground">
                Temporarily disable your endpoint or provide an invalid URL to see how Handvantage 360 handles failures. Check retry logic and error notifications.
              </p>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm"><strong>Testing Checklist:</strong></p>
            <div className="space-y-1 text-sm mt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Webhook triggers on expected events</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>All required data fields are included</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Data format is correct (JSON structure)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Endpoint receives and processes data</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Logs show successful delivery</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Troubleshooting Common Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Issue</th>
                  <th className="text-left p-3 font-semibold">Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Webhook not triggering</td>
                  <td className="p-3 text-sm">
                    Verify the webhook is properly connected to the form or assistant. Check that the form is being submitted or conversation is completing successfully.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Data not received at endpoint</td>
                  <td className="p-3 text-sm">
                    Verify the endpoint URL is correct and accessible. Check firewall settings. Ensure the endpoint accepts POST requests with JSON payloads.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Incomplete data in payload</td>
                  <td className="p-3 text-sm">
                    Review form fields or assistant configuration to ensure all required data is being collected. Check webhook logs to see what data is actually being sent.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Timeout errors</td>
                  <td className="p-3 text-sm">
                    Ensure your endpoint responds quickly (within 30 seconds). If processing takes longer, acknowledge receipt immediately and process asynchronously.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Duplicate webhook calls</td>
                  <td className="p-3 text-sm">
                    Implement idempotency on your endpoint using unique identifiers. Check that you haven't connected the same webhook multiple times.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Authentication failures</td>
                  <td className="p-3 text-sm">
                    If your endpoint requires authentication, ensure you've configured headers or tokens correctly. Contact support for custom authentication needs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle>💡 Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <strong>Use unique webhooks:</strong> Create separate webhooks for different forms and assistants to keep data flows organized and avoid conflicts.
          </div>
          <div>
            <strong>Descriptive naming:</strong> Use clear, descriptive names that indicate what the webhook is for and where it sends data.
          </div>
          <div>
            <strong>Monitor logs regularly:</strong> Check webhook logs periodically to catch issues early and ensure data is flowing correctly.
          </div>
          <div>
            <strong>Implement error handling:</strong> Design your endpoint to handle errors gracefully and log failures for debugging.
          </div>
          <div>
            <strong>Secure your endpoints:</strong> Use HTTPS for all webhook URLs. Consider adding authentication or IP whitelisting for sensitive data.
          </div>
          <div>
            <strong>Test before production:</strong> Always test webhooks with sample data before connecting to production systems.
          </div>
          <div>
            <strong>Document your integrations:</strong> Keep notes on what each webhook does and how it's configured for future reference.
          </div>
          <div>
            <strong>Handle retries:</strong> Implement idempotency to handle duplicate webhook calls that may occur during retries.
          </div>
          <div>
            <strong>Respond quickly:</strong> Ensure your endpoint responds within 30 seconds to avoid timeouts. Process heavy tasks asynchronously.
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
        <CardHeader>
          <CardTitle>Advanced: Webhook Payload Structure</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>Handvantage 360 sends webhook data as JSON POST requests. Here's a typical payload structure:</p>
          
          <div className="bg-slate-900 p-4 rounded text-sm font-mono text-white overflow-x-auto">
            <pre>{`{
  "event": "conversation_completed",
  "timestamp": "2025-01-20T14:30:00Z",
  "assistant_id": "ast_123456",
  "conversation_id": "conv_789012",
  "contact": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  },
  "transcript": "Full conversation text...",
  "duration": 180,
  "intent": "appointment_booking",
  "custom_data": {
    "appointment_date": "2025-01-25",
    "service_type": "consultation"
  }
}`}</pre>
          </div>

          <p className="text-sm text-muted-foreground mt-3">
            The exact structure may vary based on your configuration and the type of event triggering the webhook. Review webhook logs to see the actual payload structure for your setup.
          </p>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <a 
          href="https://portal.handvantage.com/settings/webhooks" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Manage Webhooks
        </a>
        <a 
          href="https://portal.handvantage.com/forms" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Manage Forms
        </a>
      </div>
    </div>
  );
}
