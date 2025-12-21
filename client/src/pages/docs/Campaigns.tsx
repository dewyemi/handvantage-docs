import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Phone, Users, Calendar, CheckCircle2, Info } from "lucide-react";

export default function Campaigns() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Campaigns</h1>
        <p className="text-xl text-muted-foreground">
          Automate outbound outreach with scheduled voice calls using AI voice agents.
        </p>
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
            <span>Voice agent deployed on a phone number (Twilio, Plivo, or Telnyx)</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>List of contacts you want to reach during the campaign</span>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="h-6 w-6 text-blue-600" />
          Add Contacts
        </h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Single Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Go to <strong>Contacts</strong> section</li>
                <li>Click <strong>Add Contact</strong></li>
                <li>Fill out contact details and click <strong>Submit</strong></li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bulk Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Go to <strong>Contacts</strong> section</li>
                <li>Click <strong>Bulk</strong></li>
                <li>Upload CSV file with contact list</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Phone className="h-6 w-6 text-green-600" />
          Create Campaign (5 Steps)
        </h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Navigate to Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Click <strong>Campaigns</strong> in the left panel</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Create New Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Click <strong>Create Campaign</strong> button</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Step 3: Configure Campaign Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div><strong>Campaign Name:</strong> e.g., "Lead Qualification Campaign"</div>
              <div><strong>Voice Widget:</strong> Select the voice agent to use for calls</div>
              <div><strong>Start Date:</strong> When the campaign should begin</div>
              <div><strong>Time Zone:</strong> Set your timezone</div>
              <div><strong>Calling Hours:</strong> Daily time window for calls</div>
              <div><strong>Days of Week:</strong> Which days to run the campaign</div>
              <p className="mt-3">Click <strong>Add</strong> to save configuration</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 4: Select Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Choose contacts to include in the campaign, then click <strong>Close</strong></p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 5: Enable Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Toggle to <strong>Enable</strong> the campaign. It will run based on your schedule.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>After Campaign</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>Review campaign results:</p>
          <div><strong>Contacts Section:</strong> View conversations for specific contacts</div>
          <div><strong>Engagement Section:</strong> Track all campaign conversations</div>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <a 
          href="https://portal.handvantage.com/campaigns" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Manage Campaigns
        </a>
        <a 
          href="https://portal.handvantage.com/contacts" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Manage Contacts
        </a>
      </div>
    </div>
  );
}
