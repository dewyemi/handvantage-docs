import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Intents() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Intents</h1>
        <p className="text-xl text-muted-foreground">
          Automatically categorize conversations and route them to the right team.
        </p>
      </div>

      <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription>
          <strong>Note:</strong> Intents work only with chat assistants, not voice assistants.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Auto Intents (Built-in)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div><strong>CAREER:</strong> Job inquiries → HR team</div>
            <div><strong>SALES:</strong> Product questions → Sales team</div>
            <div><strong>LEAD:</strong> Pricing + contact info → Sales</div>
            <div><strong>SUPPORT:</strong> Technical issues → Support team</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create Custom Intents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <strong>Step 1:</strong> Library → Intents → Create Intent
          </div>
          <div>
            <strong>Step 2:</strong> Name it (e.g., REFUND) and describe when it triggers
          </div>
          <div>
            <strong>Step 3:</strong> Assistants → Edit → Advanced → Assign Intent
          </div>
          <div>
            <strong>Step 4:</strong> Set notification email and save
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <a 
          href="https://portal.handvantage.com/library/intents" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Manage Intents
        </a>
      </div>
    </div>
  );
}
