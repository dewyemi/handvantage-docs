import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MessageSquare, Settings, CheckCircle2, Info, AlertTriangle, Phone } from "lucide-react";

export default function SMSWidget() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">SMS Widget</h1>
        <p className="text-xl text-muted-foreground">
          Deploy your AI chat assistant to handle inbound SMS messages automatically via Twilio.
        </p>
      </div>

      <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription>
          <strong>Important:</strong> SMS deployment supports inbound messages only. Your assistant cannot send an initial message unless triggered by a user.
        </AlertDescription>
      </Alert>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="mb-4">
          Integrating Handvantage 360 with Twilio SMS allows your AI assistant to respond to text messages automatically. Once set up, the assistant will handle user queries received via SMS in real time, providing instant support and information.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Part 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Set up SMS Tool with Twilio integration</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Part 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Create SMS widget and deploy AI assistant</p>
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
            <span>Active Twilio account with SMS-enabled phone number</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Twilio Account SID and Auth Token</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>AI chat assistant created and configured in Handvantage 360</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>SMS Tool configured in Handvantage 360 (see Part 1)</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            Prerequisite: SMS Tool Setup Required
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>
            Before creating an SMS widget, you must first set up the SMS Tool with Twilio integration. This establishes the connection between Handvantage 360 and your Twilio account.
          </p>
          
          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border">
            <p className="font-semibold mb-2">📚 Follow the SMS Tool Setup Guide:</p>
            <p className="text-sm mb-3">Navigate to <strong>Tools & Integration</strong> → <strong>SMS Tool</strong> → <strong>Set Up</strong></p>
            <p className="text-sm mb-3">You'll need to provide:</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Twilio Account SID</li>
              <li>• Twilio Auth Token</li>
              <li>• Integration name</li>
            </ul>
          </div>

          <p className="text-sm">
            Once the SMS Tool is configured and saved, return to this guide to create the SMS widget and deploy your assistant.
          </p>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6">Create SMS Widget</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Navigate to Widgets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in to your <a href="https://portal.handvantage.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Handvantage 360 dashboard</a></li>
                <li>In the left panel, find the <strong>Assistants</strong> section</li>
                <li>Click on <strong>Widgets</strong></li>
                <li>This will take you to the widget setup page</li>
              </ol>
              
              <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
                <Info className="h-4 w-4 text-orange-600" />
                <AlertDescription>
                  <strong>Note:</strong> Ensure you have already created an AI chat assistant before proceeding. If you haven't, create and configure your assistant first.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Create New Widget</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Click <strong>Create New Widget</strong> to start the setup process</li>
                <li>The widget creation wizard will open</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Select Provider Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the widget setup screen, choose <strong>Twilio</strong> as the provider type</li>
                <li>This ensures your widget will be linked to Twilio for SMS handling</li>
                <li>Click <strong>Next</strong> to proceed</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Step 4: Configure Widget Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Fill in the following information:</p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Widget Type</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose <strong>SMS</strong> type
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Name</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose a descriptive name for easy identification (e.g., "Customer Support SMS" or "Sales Inquiry SMS Bot")
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Description</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide a brief description of the widget's purpose (e.g., "Handles customer support inquiries via SMS")
                  </p>
                </div>
              </div>

              <p className="mt-3">Once you've filled in these details, click <strong>Next</strong> to move on.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 5: Select Your Chat Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>From the dropdown list, select the <strong>AI chat assistant</strong> you created earlier</li>
                <li>This is the assistant that will handle all incoming SMS messages</li>
                <li>Click <strong>Next</strong> to continue</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                Step 6: Configure Twilio SMS Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>In this step, configure the Twilio-specific settings for your SMS assistant:</p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold mb-1">Select Your Twilio Account</h4>
                  <p className="text-sm text-muted-foreground">
                    From the dropdown, choose the Twilio account you configured in the SMS Tool setup (Part 1)
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold mb-1">Choose a Phone Number</h4>
                  <p className="text-sm text-muted-foreground">
                    Select an SMS-enabled phone number from your Twilio account. This is the number users will text to reach your AI assistant.
                  </p>
                </div>
              </div>

              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Note:</strong> Only phone numbers with SMS capabilities will appear in the dropdown. If you don't see your number, verify it's SMS-enabled in your Twilio console.
                </AlertDescription>
              </Alert>

              <p className="mt-3">Once configured, click <strong>Finish</strong> to complete deployment.</p>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Deployment Complete!</strong> Your AI assistant is now active and ready to handle SMS messages on the selected Twilio number.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-600" />
            Testing Your SMS Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>To test your SMS widget:</p>
          
          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-semibold mb-2">Send a Test SMS</h4>
            <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
              <li>Use your personal mobile phone or a test device</li>
              <li>Send a text message to the Twilio phone number you configured</li>
              <li>Type a test query (e.g., "Hello" or "What are your hours?")</li>
              <li>Wait for the AI assistant's response</li>
              <li>Verify the response is accurate and appropriate</li>
            </ol>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm"><strong>Testing Checklist:</strong></p>
            <div className="space-y-1 text-sm mt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Assistant responds to initial message</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Response time is acceptable (typically &lt;5 seconds)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Multi-turn conversation works correctly</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Assistant accesses correct knowledge base</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Handoff to human works (if configured)</span>
              </div>
            </div>
          </div>

          <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Tip:</strong> Test with various types of queries to ensure your assistant handles different scenarios appropriately.
            </AlertDescription>
          </Alert>
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
                  <td className="p-3 font-medium">No response to SMS</td>
                  <td className="p-3 text-sm">
                    Verify the widget is deployed and active. Check Twilio webhook configuration. Ensure your Handvantage 360 wallet has sufficient balance.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Phone number not in dropdown</td>
                  <td className="p-3 text-sm">
                    Verify the number is SMS-enabled in Twilio. Check that the SMS Tool integration is properly configured with correct credentials.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Delayed responses</td>
                  <td className="p-3 text-sm">
                    Check your assistant's configuration and data sources. Verify Twilio account status and message queue.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Webhook errors</td>
                  <td className="p-3 text-sm">
                    Verify Twilio webhook URL is correctly configured. Check System Logs in Handvantage 360 for error details.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Messages not reaching assistant</td>
                  <td className="p-3 text-sm">
                    Check Twilio message logs to verify messages are being received. Verify webhook is properly configured and accessible.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Authentication errors</td>
                  <td className="p-3 text-sm">
                    Verify Twilio Account SID and Auth Token are correct in the SMS Tool configuration. Re-authenticate if necessary.
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
            <strong>Set clear expectations:</strong> Configure an auto-reply that explains the assistant is AI-powered and provides expected response times.
          </div>
          <div>
            <strong>Keep responses concise:</strong> SMS has character limits (160 characters per segment). Train your assistant to provide brief, actionable responses.
          </div>
          <div>
            <strong>Enable human handoff:</strong> Configure escalation rules so complex issues can be transferred to human agents via phone or other channels.
          </div>
          <div>
            <strong>Monitor message costs:</strong> Track SMS usage in Twilio to manage costs. Each message segment is billed separately.
          </div>
          <div>
            <strong>Update knowledge base:</strong> Keep your assistant's knowledge current with new products, policies, and FAQs.
          </div>
          <div>
            <strong>Respect opt-out requests:</strong> Ensure your assistant honors STOP, UNSUBSCRIBE, and similar opt-out keywords per SMS regulations.
          </div>
          <div>
            <strong>Test regularly:</strong> Periodically test the assistant with various queries to ensure quality responses.
          </div>
          <div>
            <strong>Monitor conversation logs:</strong> Review SMS conversations to identify areas for improvement and common user questions.
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
        <CardHeader>
          <CardTitle>SMS Compliance and Regulations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>When using SMS for business communications, you must comply with regulations:</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 mt-0.5 text-orange-600" />
              <span><strong>TCPA Compliance (US):</strong> Obtain explicit consent before sending marketing SMS. Keep records of consent.</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 mt-0.5 text-orange-600" />
              <span><strong>Opt-out mechanism:</strong> Honor STOP, UNSUBSCRIBE, CANCEL, END, and QUIT keywords immediately.</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 mt-0.5 text-orange-600" />
              <span><strong>Identification:</strong> Clearly identify your business in messages.</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 mt-0.5 text-orange-600" />
              <span><strong>Timing restrictions:</strong> Avoid sending messages during late night or early morning hours (typically 9 PM - 8 AM local time).</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 mt-0.5 text-orange-600" />
              <span><strong>A2P 10DLC registration:</strong> For US businesses, register your campaigns with Twilio's A2P 10DLC program for better deliverability.</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle>Understanding SMS Limitations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <strong>Inbound only:</strong> The SMS widget handles incoming messages only. Your assistant cannot initiate conversations unless a user texts first.
          </div>
          <div>
            <strong>Character limits:</strong> Standard SMS messages are limited to 160 characters. Longer messages are split into multiple segments, each billed separately.
          </div>
          <div>
            <strong>No rich media:</strong> SMS supports text only. For images, videos, or interactive elements, consider using WhatsApp or Messenger instead.
          </div>
          <div>
            <strong>Delivery not guaranteed:</strong> SMS delivery can be delayed or fail due to carrier issues, network congestion, or invalid numbers.
          </div>
          <div>
            <strong>Rate limits:</strong> Twilio enforces rate limits on SMS sending to prevent spam. High-volume use cases may require special configuration.
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <a 
          href="https://portal.handvantage.com/widgets" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Manage Widgets
        </a>
        <a 
          href="https://console.twilio.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Twilio Console
        </a>
      </div>
    </div>
  );
}
