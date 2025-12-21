import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MessageCircle, Settings, CheckCircle2, Info, Facebook } from "lucide-react";

export default function MessengerWidget() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Facebook Messenger Widget</h1>
        <p className="text-xl text-muted-foreground">
          Deploy your AI chat assistant on Facebook Messenger to automatically handle customer messages in real-time.
        </p>
      </div>

      <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
        <MessageCircle className="h-4 w-4" />
        <AlertDescription>
          This guide walks you through connecting your Facebook Page and deploying your AI assistant to handle user messages via Messenger.
        </AlertDescription>
      </Alert>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="mb-4">
          Integrating Handvantage 360 with Facebook Messenger allows your AI assistant to respond to customer inquiries, provide support, and engage with users directly through your Facebook Page's messaging interface.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Part 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Set up Messenger tool and connect Facebook Page</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Part 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Create Messenger widget and deploy AI assistant</p>
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
            <span>Active Facebook Page with admin access</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>AI chat assistant created and configured in Handvantage 360</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Facebook account with Page management permissions</span>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6">Part 1: Set Up Messenger Tool and Connect Facebook</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Navigate to Tools & Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>To begin setting up your Facebook Messenger integration:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in to your <a href="https://portal.handvantage.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Handvantage 360 dashboard</a></li>
                <li>Select <strong>Tools & Integration</strong> from the left-hand sidebar menu</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Locate and Set Up Messenger Tool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the Tools & Integration section, find <strong>Messenger</strong> from the list of available integrations</li>
                <li>Click the <strong>Set Up</strong> button next to the Messenger tool</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Facebook className="h-5 w-5 text-blue-600" />
                Step 3: Connect Your Facebook Account
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Click <strong>Start New</strong> to initiate the Messenger integration setup</li>
                <li>You'll be redirected to Facebook's authorization page</li>
                <li>Log in with the Facebook account that has <strong>admin access</strong> to your desired Facebook Page</li>
                <li>Review the permissions requested by Handvantage 360</li>
              </ol>
              
              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Note:</strong> You must use a Facebook account with admin or editor permissions for the Page you want to connect.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 4: Choose Which Pages to Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>After logging in, you'll be prompted to select how you'd like to connect your Facebook Pages. You'll see two options:</p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Option 1: Opt in to all current and future Pages</h4>
                  <p className="text-sm text-muted-foreground">
                    This allows your AI assistant to be deployed on all Pages you currently manage, as well as any new ones you add in the future. Choose this if you manage multiple Pages and want automatic access.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold mb-1">Option 2: Opt in to current Pages only</h4>
                  <p className="text-sm text-muted-foreground">
                    This lets you manually select which specific Pages you want to connect now. Choose this if you prefer more control over which Pages should be available for AI assistant deployment.
                  </p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Best Practice:</strong> If you're testing or managing multiple brands, choose "current Pages only" for better control.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 5: Confirm Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>After selecting your Pages, Facebook will display a confirmation message</li>
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
              <p>Back on the Messenger Tool Setup page in Handvantage 360:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Enter a descriptive <strong>name</strong> for your integration</li>
                <li>Use a clear name like "Support Bot – Main Page" or "Sales Assistant – Brand Page"</li>
                <li>Click <strong>Create</strong> to finalize the setup</li>
              </ol>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Tip:</strong> Use names that clearly identify both the purpose and the Page to help you manage multiple integrations later.</p>
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
                  <strong>Why This Happens:</strong> The Messenger tool serves as a simple integration point to link your Facebook Page. The actual deployment of your AI chat assistant will be handled separately via a Messenger Widget in Part 2.
                </AlertDescription>
              </Alert>

              <p className="mt-3">Simply click <strong>Save</strong> to complete the integration.</p>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Integration Complete!</strong> Your Facebook Page is now connected to Handvantage 360.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Part 2: Create Messenger Widget and Deploy AI Assistant</h2>
        
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
                <li>In the widget setup screen, choose <strong>Messenger</strong> as the provider type</li>
                <li>This ensures your widget will be linked to Facebook Messenger for handling user messages</li>
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
                    Choose the appropriate type (typically "Chat" for Messenger)
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Name</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose a descriptive name for easy identification (e.g., "Customer Support Chat" or "Sales Inquiry Bot")
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Description</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide a brief description of the widget's purpose (e.g., "Handles customer support inquiries via Messenger")
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
                <li>This is the assistant that will handle all conversations on Messenger</li>
                <li>Click <strong>Next</strong> to continue</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Facebook className="h-5 w-5 text-blue-600" />
                Step 6: Select Messenger Tool and Facebook Page
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>From the dropdown, select the <strong>Messenger Tool</strong> you integrated in Part 1</li>
                <li>A second dropdown will appear showing your connected Facebook Pages</li>
                <li>Choose the specific <strong>Facebook Page</strong> where you want to deploy your AI chat assistant</li>
                <li>Once selected, click <strong>Finish</strong> to complete the widget setup and deploy the assistant</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Success!</strong> Your AI chat assistant is now active on your Facebook Page and ready to handle user messages via Messenger.
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
            Testing Your Messenger Widget
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>To test your Messenger widget, you have two options:</p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-1">Option 1: Test via Dashboard</h4>
              <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
                <li>In your Widgets list, find the Messenger widget you just created</li>
                <li>Click the <strong>Visit</strong> button next to your widget</li>
                <li>This will open the Messenger conversation in a new window</li>
                <li>Interact with the assistant directly to test responses</li>
              </ol>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold mb-1">Option 2: Test as a Real User</h4>
              <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
                <li>Visit your Facebook Page as a regular user (use a different Facebook account or ask a colleague)</li>
                <li>Click the <strong>Send Message</strong> button on the Page</li>
                <li>Send a test message to the Page</li>
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
                <span>Conversation flow works as expected</span>
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
                  <td className="p-3 font-medium">Assistant not responding</td>
                  <td className="p-3 text-sm">
                    Verify the widget is deployed and the correct assistant is selected. Check System Logs for errors.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Page not appearing in dropdown</td>
                  <td className="p-3 text-sm">
                    Ensure you have admin access to the Page and it was selected during Facebook authorization.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Authorization failed</td>
                  <td className="p-3 text-sm">
                    Try disconnecting and reconnecting the Messenger tool. Ensure you're using an admin account.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Delayed responses</td>
                  <td className="p-3 text-sm">
                    Check your assistant's configuration and data sources. Verify your Handvantage 360 wallet has sufficient balance.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Messages not reaching assistant</td>
                  <td className="p-3 text-sm">
                    Verify the widget is active and not paused. Check that Facebook Page permissions haven't changed.
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
            <strong>Set clear expectations:</strong> Add an automated greeting that explains the assistant is AI-powered and sets response time expectations.
          </div>
          <div>
            <strong>Configure handoff to human:</strong> Set up escalation rules so complex issues can be transferred to human agents.
          </div>
          <div>
            <strong>Monitor conversations:</strong> Regularly review chat logs to identify areas for improvement in your assistant's responses.
          </div>
          <div>
            <strong>Update knowledge base:</strong> Keep your assistant's knowledge base current with new products, policies, and FAQs.
          </div>
          <div>
            <strong>Test regularly:</strong> Periodically test the assistant to ensure it's responding correctly to common queries.
          </div>
          <div>
            <strong>Use descriptive names:</strong> Name your widgets clearly so you can easily identify them when managing multiple Pages.
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
          href="https://www.facebook.com/pages" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Manage Facebook Pages
        </a>
      </div>
    </div>
  );
}
