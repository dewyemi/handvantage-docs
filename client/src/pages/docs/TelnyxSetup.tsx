import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Phone, Key, Settings, CheckCircle2, Shield } from "lucide-react";

export default function TelnyxSetup() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Telnyx Setup for Voice AI</h1>
        <p className="text-xl text-muted-foreground">
          Connect your Handvantage 360 voice assistant to a Telnyx phone number and let users interact via real phone calls.
        </p>
      </div>

      <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
        <Phone className="h-4 w-4" />
        <AlertDescription>
          This guide will walk you through setting up Telnyx and integrating it with Handvantage 360 for enterprise-grade voice communications.
        </AlertDescription>
      </Alert>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="mb-4">
          Telnyx provides enterprise-grade telephony services with global coverage and competitive pricing. This integration enables your AI voice assistant to handle phone calls through Telnyx's infrastructure.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Set up Telnyx account and get API key</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Integrate Telnyx with Handvantage 360</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Deploy voice assistant to phone number</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Part 1: Telnyx Account Setup</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Log In to Telnyx</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>If you don't have a Telnyx account yet, you'll need to create one first.</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Go to <a href="https://telnyx.com/sign-up" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Telnyx Sign Up</a> to create an account</li>
                <li>Once registered, visit the <a href="https://portal.telnyx.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Telnyx Login Portal</a></li>
                <li>Enter your credentials and access your dashboard</li>
                <li>You'll land on the Telnyx Console homepage</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5 text-blue-600" />
                Step 2: Create API Key
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>To integrate Telnyx with Handvantage 360, you'll need to generate an API key:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the top right corner of the Telnyx Console, click on your <strong>profile icon</strong></li>
                <li>From the dropdown menu, select <strong>API Keys</strong></li>
                <li>Click the <strong>Create API Key</strong> button on the right side</li>
                <li>Provide a descriptive name for the key (e.g., "Handvantage 360 Integration")</li>
                <li>Click <strong>Create</strong> to generate the key</li>
                <li>Copy the API key immediately and store it securely</li>
              </ol>
              
              <Alert className="border-red-200 bg-red-50 dark:bg-red-950">
                <Shield className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800 dark:text-red-200">
                  <strong>Important:</strong> The API key will only be shown once. Copy it immediately and store it in a secure location. You won't be able to retrieve it later.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                Step 3: Purchase a Phone Number (Optional)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>If you don't already have a Telnyx phone number, you can purchase one:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the Telnyx Console, navigate to <strong>Numbers</strong> → <strong>Buy Numbers</strong></li>
                <li>Search for available numbers by:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Country/region</li>
                    <li>Area code</li>
                    <li>Number type (local, toll-free, mobile)</li>
                  </ul>
                </li>
                <li>Select a number with <strong>Voice</strong> capability</li>
                <li>Complete the purchase</li>
              </ol>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Tip:</strong> Telnyx offers competitive pricing and global coverage. Choose a local number in your target market for better customer trust.</p>
              </div>
            </CardContent>
          </Card>

          <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              <strong>Telnyx Setup Complete!</strong> You now have your API key ready for integration.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Part 2: Telnyx Integration with Handvantage 360</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Log In to Handvantage 360</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Go to <a href="https://portal.handvantage.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Handvantage 360 Portal</a></li>
                <li>Log in with your credentials</li>
                <li>Access your dashboard</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Navigate to Tools & Integrations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Click on <strong>Tools & Integrations</strong> from the sidebar menu</li>
                <li>Find and select <strong>Telnyx Setup</strong> from the list of available integrations</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Create Telnyx Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Click <strong>Start New</strong> (or <strong>Create New</strong>) to begin configuration</li>
                <li>Enter a descriptive <strong>Name</strong> for this integration (e.g., "Main Business Line")</li>
                <li>Paste your <strong>Telnyx API Key</strong> that you copied earlier</li>
                <li>Click <strong>Create</strong> to save the integration</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 4: Save Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>After creating the integration:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Review the integration details to ensure accuracy</li>
                <li>Click <strong>Save</strong> to finalize the connection</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Integration Complete!</strong> Telnyx is now connected to your Handvantage 360 account.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Part 3: Telnyx Widget Setup</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Navigate to Widgets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In your Handvantage 360 dashboard, click on <strong>Widgets</strong></li>
                <li>Click <strong>Create Widget</strong> to start the setup process</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Select Provider and Widget Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>For <strong>Provider Type</strong>, select <strong>Telnyx</strong></li>
                <li>For <strong>Widget Type</strong>, select <strong>Voice Call</strong></li>
                <li>Provide a <strong>Name</strong> for your widget (e.g., "Customer Support Line")</li>
                <li>Add a <strong>Description</strong> explaining the widget's purpose</li>
                <li>Click <strong>Next</strong> to proceed</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Select AI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>From the dropdown menu, choose the <strong>AI Assistant</strong> you want to use</li>
                <li>Click <strong>Next</strong> to continue to configuration</li>
              </ol>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Note:</strong> Ensure your assistant is fully configured, trained, and tested before deploying to a live phone number.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Step 4: Configure Telnyx Widget Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Configure the behavior of your Telnyx-powered voice assistant:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Call Recording</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Optional:</strong> Enable to record all calls. Recordings will be available in your Telnyx dashboard for review and quality assurance.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Maximum Call Duration</h4>
                  <p className="text-sm text-muted-foreground">
                    Set in seconds (e.g., 300 for 5 minutes, 600 for 10 minutes). Calls will automatically end when this duration is reached.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Telnyx Account</h4>
                  <p className="text-sm text-muted-foreground">
                    Select your Telnyx account from the dropdown (the integration you created in Part 2).
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Phone Number</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose the Telnyx phone number you want to use for this assistant. Only numbers associated with your Telnyx account will appear.
                  </p>
                </div>
              </div>

              <ol className="list-decimal list-inside space-y-2 ml-2 mt-4">
                <li>Configure all settings according to your requirements</li>
                <li>Review all configurations carefully</li>
                <li>Click <strong>Finish</strong> to complete deployment</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                Step 5: Test Your Voice Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Now it's time to test your AI voice assistant:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Call the Telnyx phone number you just configured</li>
                <li>Verify the AI assistant answers the call promptly</li>
                <li>Test the conversation flow based on your prompts and voice settings</li>
                <li>Verify features like call transfer, hold, and voicemail work correctly</li>
                <li>Check call quality and response time</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Deployment Complete!</strong> Your voice assistant is now live on Telnyx and ready to handle customer calls.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Troubleshooting Tips</CardTitle>
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
                  <td className="p-3 font-medium">Invalid API Key error</td>
                  <td className="p-3 text-sm">
                    Verify the API key is copied correctly with no extra spaces. Generate a new key if necessary.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Phone number not appearing</td>
                  <td className="p-3 text-sm">
                    Ensure the number is purchased and active in your Telnyx account. Check that it has voice capability enabled.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Calls not connecting</td>
                  <td className="p-3 text-sm">
                    Check your Telnyx account balance. Verify the number is correctly configured in the widget. Review Telnyx call logs for error details.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Poor call quality</td>
                  <td className="p-3 text-sm">
                    Check Telnyx call diagnostics. Consider upgrading voice quality settings in your assistant configuration. Verify network connectivity.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">AI not responding</td>
                  <td className="p-3 text-sm">
                    Check System Logs in Handvantage 360 (Settings → System Logs). Verify your assistant is properly configured with data sources.
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
            <strong>Secure your API key:</strong> Store it in a password manager and never share it publicly or commit it to code repositories.
          </div>
          <div>
            <strong>Enable call recording:</strong> Recordings help you improve assistant performance and provide evidence for dispute resolution.
          </div>
          <div>
            <strong>Set appropriate call duration limits:</strong> Balance customer experience with cost management by setting reasonable time limits.
          </div>
          <div>
            <strong>Monitor usage and costs:</strong> Regularly check your Telnyx usage dashboard and Handvantage 360 wallet balance.
          </div>
          <div>
            <strong>Test thoroughly:</strong> Make multiple test calls covering various scenarios before directing customer traffic to the number.
          </div>
          <div>
            <strong>Use Telnyx's global network:</strong> Take advantage of Telnyx's worldwide coverage for international deployments.
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <a 
          href="https://portal.telnyx.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Open Telnyx Portal
        </a>
        <a 
          href="https://portal.handvantage.com/widgets" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Manage Widgets
        </a>
      </div>
    </div>
  );
}
