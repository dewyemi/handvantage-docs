import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MessageCircle, Settings, CheckCircle2, Info, Instagram, AlertTriangle } from "lucide-react";

export default function InstagramWidget() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Instagram Widget</h1>
        <p className="text-xl text-muted-foreground">
          Deploy your AI chat assistant on Instagram to automatically handle direct messages and engage with followers in real-time.
        </p>
      </div>

      <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription>
          <strong>Important:</strong> Only Professional Instagram accounts (Business or Creator) can be connected for this integration. Personal accounts are not supported.
        </AlertDescription>
      </Alert>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="mb-4">
          Integrating Handvantage 360 with Instagram allows your AI assistant to respond to direct messages (DMs), answer follower questions, and provide support automatically through your Instagram Professional account.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Part 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Set up Instagram tool and connect Professional account</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Part 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Create Instagram widget and deploy AI assistant</p>
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
            <span>Instagram Professional account (Business or Creator)</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Instagram account connected to a Facebook Page</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>AI chat assistant created and configured in Handvantage 360</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Admin access to the connected Facebook Page</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle>Converting to a Professional Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>If you have a personal Instagram account, you'll need to convert it to a Professional account:</p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Open the Instagram app and go to your profile</li>
            <li>Tap the menu icon (three lines) in the top right</li>
            <li>Tap <strong>Settings and privacy</strong></li>
            <li>Tap <strong>Account type and tools</strong></li>
            <li>Tap <strong>Switch to professional account</strong></li>
            <li>Choose <strong>Business</strong> or <strong>Creator</strong></li>
            <li>Follow the on-screen instructions to complete setup</li>
            <li>Connect your Instagram account to a Facebook Page (required for API access)</li>
          </ol>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6">Part 1: Set Up Instagram Tool and Connect Account</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Navigate to Tools & Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>To begin setting up your Instagram integration:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in to your <a href="https://portal.handvantage.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Handvantage 360 dashboard</a></li>
                <li>Select <strong>Tools & Integration</strong> from the left-hand sidebar menu</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Locate and Set Up Instagram Tool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the Tools & Integration section, find <strong>Instagram</strong> from the list of available integrations</li>
                <li>Click the <strong>Set Up</strong> button next to the Instagram tool</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-pink-600" />
                Step 3: Initiate Instagram Connection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Click <strong>Start New</strong> to initiate the Instagram integration setup</li>
                <li>You'll be redirected to Facebook's authorization page (Instagram uses Facebook's API)</li>
              </ol>
              
              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Why Facebook?</strong> Instagram's messaging API is managed through Facebook. You'll log in with the Facebook account that has admin access to the Facebook Page connected to your Instagram Professional account.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 4: Log In and Authorize</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in with your Facebook account that has admin access to the Page linked to your Instagram account</li>
                <li>Review the permissions requested by Handvantage 360</li>
                <li>The permissions include:
                  <ul className="ml-6 mt-2 space-y-1 text-sm">
                    <li>• Read and send messages on Instagram</li>
                    <li>• Access Instagram account information</li>
                    <li>• Manage Instagram messaging</li>
                  </ul>
                </li>
                <li>Click <strong>Continue</strong> or <strong>Allow</strong> to grant permissions</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 5: Confirm Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>After granting permissions, Facebook will display a confirmation message</li>
                <li>Click <strong>Got It</strong> or <strong>Done</strong> to complete the authorization</li>
                <li>You'll be automatically redirected back to Handvantage 360</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 6: Name Your Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Back on the Instagram Tool Setup page in Handvantage 360:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Enter a descriptive <strong>name</strong> for your integration</li>
                <li>Use a clear name like "Support Bot – @brandname" or "Sales Assistant – Instagram"</li>
                <li>Click <strong>Create</strong> to finalize the setup</li>
              </ol>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Tip:</strong> Include your Instagram handle in the integration name to easily identify it when managing multiple accounts.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 7: Complete Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>On the next page, you may see a message that says <em>"Nothing to set up here"</em> — this is expected.</p>
              
              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Why This Happens:</strong> The Instagram tool serves as a simple integration point to link your Instagram account. The actual deployment of your AI chat assistant will be handled separately via an Instagram Widget in Part 2.
                </AlertDescription>
              </Alert>

              <p className="mt-3">Simply click <strong>Save</strong> to complete the integration.</p>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Integration Complete!</strong> Your Instagram Professional account is now connected to Handvantage 360.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Part 2: Create Instagram Widget and Deploy AI Assistant</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Navigate to Widgets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the left panel of your Handvantage 360 dashboard, find the <strong>Assistants</strong> section</li>
                <li>Click on <strong>Widgets</strong></li>
                <li>This will take you to the widget setup page</li>
              </ol>
              
              <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
                <Info className="h-4 w-4 text-orange-600" />
                <AlertDescription>
                  <strong>Important:</strong> Ensure you have already created an AI chat assistant before proceeding. If you haven't, create and configure your assistant first.
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
                <li>In the widget setup screen, choose <strong>Instagram</strong> as the provider type</li>
                <li>This ensures your widget will be linked to Instagram for handling direct messages</li>
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
                    Choose the appropriate type (typically "Chat" for Instagram DMs)
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Name</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose a descriptive name for easy identification (e.g., "Instagram Support Bot" or "DM Assistant")
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Description</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide a brief description of the widget's purpose (e.g., "Handles customer support inquiries via Instagram DMs")
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
                <li>This is the assistant that will handle all Instagram direct messages</li>
                <li>Click <strong>Next</strong> to continue</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-pink-600" />
                Step 6: Select Instagram Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>From the dropdown, select the <strong>Instagram Tool</strong> you integrated in Part 1</li>
                <li>This connects the widget to your Instagram Professional account</li>
                <li>Once selected, click <strong>Finish</strong> to complete the widget setup and deploy the assistant</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Success!</strong> Your AI chat assistant is now active on your Instagram account and ready to handle direct messages.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
            Testing Your Instagram Widget
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>To test your Instagram widget, you have two options:</p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-1">Option 1: Test via Dashboard</h4>
              <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
                <li>In your Widgets list, find the Instagram widget you just created</li>
                <li>Click the <strong>Visit</strong> button next to your widget</li>
                <li>This will open a test interface in a new window</li>
                <li>Interact with the assistant directly to test responses</li>
              </ol>
            </div>

            <div className="border-l-4 border-pink-600 pl-4">
              <h4 className="font-semibold mb-1">Option 2: Test as a Real User</h4>
              <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
                <li>Use a different Instagram account (personal or test account)</li>
                <li>Visit your Instagram Professional account</li>
                <li>Click the <strong>Message</strong> button on the profile</li>
                <li>Send a test direct message</li>
                <li>Verify the AI assistant responds appropriately</li>
              </ol>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm"><strong>Testing Checklist:</strong></p>
            <div className="space-y-1 text-sm mt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Assistant responds to initial greeting</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Conversation flow works smoothly</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Assistant accesses correct knowledge base</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Response time is acceptable</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Handoff to human works (if configured)</span>
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
                  <td className="p-3 font-medium">Personal account error</td>
                  <td className="p-3 text-sm">
                    Convert your Instagram account to a Professional account (Business or Creator) and connect it to a Facebook Page.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Assistant not responding</td>
                  <td className="p-3 text-sm">
                    Verify the widget is deployed and active. Check System Logs for errors. Ensure your Handvantage 360 wallet has sufficient balance.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Authorization failed</td>
                  <td className="p-3 text-sm">
                    Ensure you're using a Facebook account with admin access to the Page connected to your Instagram account. Try disconnecting and reconnecting.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Messages not reaching assistant</td>
                  <td className="p-3 text-sm">
                    Verify the Instagram account is properly connected to a Facebook Page. Check that permissions haven't been revoked.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Delayed responses</td>
                  <td className="p-3 text-sm">
                    Check your assistant's configuration and data sources. Verify network connectivity and API rate limits.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Can't find Instagram in dropdown</td>
                  <td className="p-3 text-sm">
                    Ensure you completed Part 1 successfully and the Instagram tool integration was saved properly.
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
            <strong>Set clear expectations:</strong> Use Instagram's automated greeting feature to explain the assistant is AI-powered and set response time expectations.
          </div>
          <div>
            <strong>Configure quick replies:</strong> Set up common quick reply options to help users navigate conversations efficiently.
          </div>
          <div>
            <strong>Monitor DM quality:</strong> Regularly review Instagram DM conversations to identify areas for improvement.
          </div>
          <div>
            <strong>Update knowledge base:</strong> Keep your assistant's knowledge current with new products, promotions, and FAQs.
          </div>
          <div>
            <strong>Enable human handoff:</strong> Configure escalation rules so complex issues can be transferred to human agents.
          </div>
          <div>
            <strong>Respect Instagram policies:</strong> Ensure your assistant follows Instagram's messaging policies and community guidelines.
          </div>
          <div>
            <strong>Test regularly:</strong> Periodically test the assistant with various queries to ensure quality responses.
          </div>
          <div>
            <strong>Maintain Professional status:</strong> Keep your Instagram account as Professional to maintain API access.
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
        <CardHeader>
          <CardTitle>Instagram Messaging Limitations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>Be aware of Instagram's messaging limitations:</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 mt-0.5 text-orange-600" />
              <span><strong>24-hour window:</strong> After a user sends a message, you have 24 hours to respond. After that, you can only send template messages.</span>
            </div>
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 mt-0.5 text-orange-600" />
              <span><strong>Story replies:</strong> The assistant can respond to story replies within the 24-hour window.</span>
            </div>
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 mt-0.5 text-orange-600" />
              <span><strong>Rate limits:</strong> Instagram enforces rate limits on messaging. Avoid sending too many messages in a short period.</span>
            </div>
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 mt-0.5 text-orange-600" />
              <span><strong>Professional account required:</strong> Personal accounts cannot use the messaging API.</span>
            </div>
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
          href="https://www.instagram.com/accounts/login/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Manage Instagram Account
        </a>
      </div>
    </div>
  );
}
