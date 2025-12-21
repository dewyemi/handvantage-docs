import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Phone, Cloud, Shield, Settings, CheckCircle2, AlertTriangle } from "lucide-react";

export default function PlivoSetup() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Plivo Setup for Voice AI</h1>
        <p className="text-xl text-muted-foreground">
          Connect your Handvantage 360 voice assistant to a Plivo phone number and let users interact via real phone calls.
        </p>
      </div>

      <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
        <Cloud className="h-4 w-4" />
        <AlertDescription>
          <strong>Ideal for:</strong> Users who want to enable call-based interactions using Plivo as their telephony provider.
        </AlertDescription>
      </Alert>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="mb-4">
          This guide will walk you through three main steps: setting up your Plivo account, integrating it with Handvantage 360, and deploying your voice assistant to a phone number.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Create and configure your Plivo account</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Integrate Plivo with Handvantage 360</p>
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
        <h2 className="text-2xl font-bold mb-6">Part 1: Plivo Account Setup</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Request Plivo Trial Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>To get started with Plivo, you'll first need to sign up for a trial account.</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Visit the <a href="https://www.plivo.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Plivo website</a></li>
                <li>Click on the <strong>"Request Trial"</strong> or <strong>"Sign Up"</strong> button</li>
                <li>Fill in the required details to create your account</li>
                <li>Wait for account approval (typically within a few hours)</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Log In to Plivo Console</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Once your account is approved:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Go to the <a href="https://console.plivo.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Plivo Login Portal</a></li>
                <li>Enter your credentials and sign in</li>
                <li>You'll be taken to your Plivo Console dashboard</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                Step 3: Copy Auth ID and Auth Token
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>On the Plivo Console homepage, locate your account credentials:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Find your <strong>Auth ID</strong> (also called Account SID)</li>
                <li>Find your <strong>Auth Token</strong></li>
                <li>Copy both values and store them securely</li>
              </ol>
              
              <Alert className="border-red-200 bg-red-50 dark:bg-red-950">
                <Shield className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800 dark:text-red-200">
                  <strong>Security Warning:</strong> Treat these credentials as sensitive information. Never share them publicly or commit them to version control.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                Step 4: Buy a Plivo Phone Number
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In your Plivo Console, navigate to <strong>Phone Numbers</strong></li>
                <li>Click <strong>Buy a Number</strong></li>
                <li>Use filters to select:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Your desired country</li>
                    <li>Ensure the number has <strong>Voice capability</strong> enabled</li>
                  </ul>
                </li>
                <li>Select a number from the available options</li>
                <li>Complete the purchase</li>
              </ol>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Tip:</strong> Choose a local number in your target market for better customer trust and lower call costs.</p>
              </div>
            </CardContent>
          </Card>

          <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              <strong>Plivo Setup Complete!</strong> You now have a Plivo account with a phone number. Next, we'll integrate it with Handvantage 360.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Part 2: Plivo Integration with Handvantage 360</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Access Plivo Tool Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in to your Handvantage 360 dashboard</li>
                <li>Navigate to <strong>Tools & Integrations</strong> in the sidebar</li>
                <li>Find and click on <strong>Plivo Tool Setup</strong></li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Create New Plivo Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Click <strong>Start New</strong> to begin configuration</li>
                <li>Provide a descriptive <strong>Name</strong> for this integration (e.g., "Main Business Line")</li>
                <li>Enter your <strong>Auth ID</strong> from Plivo</li>
                <li>Enter your <strong>Auth Token</strong> from Plivo</li>
                <li>Click <strong>Submit</strong> to save the credentials</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Complete Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>After submitting your credentials:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>You may see a message saying <em>"Nothing to set up here"</em> — this is expected</li>
                <li>The tool serves as a simple integration point and doesn't require additional configuration</li>
                <li>Click <strong>Save</strong> to finalize the integration</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Integration Complete!</strong> Your Plivo account is now successfully connected to Handvantage 360.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Part 3: Plivo Widget Setup</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Create Widget</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Navigate to <strong>Widgets</strong> in your Handvantage 360 dashboard</li>
                <li>Click <strong>Create Widget</strong></li>
                <li>Select <strong>Provider Type</strong>: Choose <strong>Plivo</strong></li>
                <li>Select <strong>Widget Type</strong>: Choose <strong>Voice Call</strong></li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Configure Widget Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Provide a <strong>Name</strong> for your widget (e.g., "Customer Support Line")</li>
                <li>Add a <strong>Description</strong> explaining the widget's purpose</li>
                <li>Click <strong>Next</strong> to proceed</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Select Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>From the dropdown menu, select the <strong>AI Assistant</strong> you want to use for this phone number</li>
                <li>Click <strong>Next</strong> to continue</li>
              </ol>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Note:</strong> Make sure your assistant is fully configured and tested before deploying to a live phone number.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Step 4: Configure Plivo Widget Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Set the behavior for your Plivo-powered voice assistant:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Call Recording</h4>
                  <p className="text-sm text-muted-foreground">Enable if you want to record calls. Recordings will be available in your Plivo dashboard.</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Maximum Call Duration</h4>
                  <p className="text-sm text-muted-foreground">Set in seconds (e.g., 300 for 5 minutes, 600 for 10 minutes)</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Plivo Account</h4>
                  <p className="text-sm text-muted-foreground">Select your Plivo account from the dropdown (the one you integrated earlier)</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Phone Number</h4>
                  <p className="text-sm text-muted-foreground">Choose the Plivo phone number you purchased</p>
                </div>
              </div>

              <ol className="list-decimal list-inside space-y-2 ml-2 mt-4">
                <li>Configure all settings according to your requirements</li>
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
                <li>Call the Plivo phone number you just configured</li>
                <li>Verify the AI assistant answers the call</li>
                <li>Test the conversation flow based on your prompts and voice settings</li>
                <li>Check that call transfer, hold, and other features work as expected</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Deployment Complete!</strong> Your voice assistant is now live and ready to handle customer calls.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            Troubleshooting Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">If your voice assistant isn't working as expected, here are common issues and solutions:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Issue</th>
                  <th className="text-left p-3 font-semibold">What to Do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Call not connecting</td>
                  <td className="p-3 text-sm">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Verify the phone number is correctly configured in the widget</li>
                      <li>Check that the number has voice capability enabled in Plivo</li>
                      <li>Ensure your Plivo account has sufficient credit</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">AI not responding</td>
                  <td className="p-3 text-sm">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Check System Logs (click your name/email in bottom-left → Settings → System Logs)</li>
                      <li>Verify your assistant is properly configured and has data sources assigned</li>
                      <li>Test your assistant in the dashboard before deploying to phone</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Trial account limitations</td>
                  <td className="p-3 text-sm">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Ensure your Plivo account is upgraded — free trial accounts may block live calls</li>
                      <li>Trial accounts often have restrictions on which numbers can be called</li>
                      <li>Consider upgrading to a paid Plivo account for full functionality</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Invalid credentials error</td>
                  <td className="p-3 text-sm">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Verify that the Auth Token & Auth ID used in Handvantage 360 match your Plivo console exactly</li>
                      <li>Check for extra spaces or characters when copying credentials</li>
                      <li>Re-enter credentials if necessary</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Call quality issues</td>
                  <td className="p-3 text-sm">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Check call diagnostics in your Plivo console</li>
                      <li>Review call recordings to identify audio quality problems</li>
                      <li>Consider upgrading voice quality settings in your assistant configuration</li>
                    </ul>
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
            <strong>Test thoroughly before going live:</strong> Make multiple test calls to ensure your assistant handles various scenarios correctly.
          </div>
          <div>
            <strong>Enable call recording:</strong> Recordings help you improve your assistant's performance and resolve customer disputes.
          </div>
          <div>
            <strong>Set appropriate call duration limits:</strong> Balance customer experience with cost management by setting reasonable time limits.
          </div>
          <div>
            <strong>Monitor usage regularly:</strong> Check your Plivo usage and Handvantage 360 wallet balance to avoid service interruptions.
          </div>
          <div>
            <strong>Keep credentials secure:</strong> Store your Auth ID and Auth Token in a secure password manager, never in code or public documents.
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <a 
          href="https://console.plivo.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Open Plivo Console
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
