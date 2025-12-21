import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Wallet, Mic, MessageSquare } from "lucide-react";

export default function BillingPayAsYouGo() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Billing: Pay As You Go</h1>
        <p className="text-xl text-muted-foreground">
          Only pay for what you use. No subscriptions, no monthly minimums.
        </p>
      </div>

      <Alert>
        <Wallet className="h-4 w-4" />
        <AlertDescription>
          Handvantage 360 uses a wallet-based system. Each new account comes preloaded with <strong>$10 worth of credits for FREE</strong> to get you started!
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            How the Wallet System Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Your wallet is a prepaid credit system that you top up as needed. Usage charges are automatically deducted from your wallet balance based on your actual consumption across voice and chat services.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Add credits to your wallet at any time</li>
            <li>No expiration on wallet credits</li>
            <li>Receive low-balance notifications (default: $10 and $5 thresholds)</li>
            <li>Services pause when wallet reaches $0 to prevent unexpected charges</li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="h-5 w-5 text-blue-600" />
              Voice AI Pricing
            </CardTitle>
            <CardDescription>Charged per minute of conversation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$0.06</div>
              <div className="text-sm text-muted-foreground">per minute (base rate)</div>
              <div className="text-xs text-muted-foreground mt-1">Using gpt-3.5-turbo + Azure Standard Voice</div>
            </div>
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                Voice usage is measured per second and prorated accordingly for precise billing.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-green-600" />
              Chat AI Pricing
            </CardTitle>
            <CardDescription>Charged per customer query</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">$0.015</div>
              <div className="text-sm text-muted-foreground">per customer query</div>
              <div className="text-xs text-muted-foreground mt-1">Using gpt-3.5-turbo</div>
            </div>
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                Each message sent by the customer counts as one query. AI responses do not incur additional charges.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Voice Service Breakdown</CardTitle>
          <CardDescription>Voice pricing consists of 4 components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Component</th>
                  <th className="text-right p-3 font-semibold">Cost per Minute</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Transcription (Speech-to-Text)</td>
                  <td className="text-right p-3 font-mono">$0.01</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">LLM (AI Processing)</td>
                  <td className="text-right p-3 font-mono">$0.01</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Voice (Text-to-Speech)</td>
                  <td className="text-right p-3 font-mono">$0.02</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Platform Fee</td>
                  <td className="text-right p-3 font-mono">$0.02</td>
                </tr>
                <tr className="bg-muted/50 font-bold">
                  <td className="p-3">Total (Base Rate)</td>
                  <td className="text-right p-3 font-mono">$0.06</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Each component may use multipliers depending on which service or AI model you choose.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Voice Pricing Examples</CardTitle>
          <CardDescription>Costs vary based on your selected voice provider and AI model</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Configuration</th>
                  <th className="text-center p-3 font-semibold">Multipliers<br/>(T, LLM, Voice, Platform)</th>
                  <th className="text-right p-3 font-semibold">Cost/Min</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50 dark:bg-green-950">
                  <td className="p-3">Regular LLM + Azure Voice</td>
                  <td className="text-center p-3 font-mono">1, 1, 1, 1</td>
                  <td className="text-right p-3 font-mono font-bold text-green-600">$0.06</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Regular LLM + ElevenLabs Voice</td>
                  <td className="text-center p-3 font-mono">1, 1, 2.5, 1</td>
                  <td className="text-right p-3 font-mono">$0.09</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Regular LLM + Cartesia Voice</td>
                  <td className="text-center p-3 font-mono">1, 1, 1.75, 1</td>
                  <td className="text-right p-3 font-mono">$0.075</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Regular LLM + PlayHT Voice</td>
                  <td className="text-center p-3 font-mono">1, 1, 2.5, 1</td>
                  <td className="text-right p-3 font-mono">$0.09</td>
                </tr>
                <tr className="border-b bg-blue-50 dark:bg-blue-950">
                  <td className="p-3">Regular LLM + Your Own API Keys</td>
                  <td className="text-center p-3 font-mono">1, 1, 0, 1</td>
                  <td className="text-right p-3 font-mono font-bold text-blue-600">$0.04</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">o3-mini + Azure Voice</td>
                  <td className="text-center p-3 font-mono">1, 2, 1, 1</td>
                  <td className="text-right p-3 font-mono">$0.07</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">o3-mini + ElevenLabs Voice</td>
                  <td className="text-center p-3 font-mono">1, 2, 2.5, 1</td>
                  <td className="text-right p-3 font-mono">$0.10</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">OpenAI Realtime (4o-mini)</td>
                  <td className="text-center p-3 font-mono">0, 10, 0, 1</td>
                  <td className="text-right p-3 font-mono">$0.12</td>
                </tr>
                <tr className="border-b bg-red-50 dark:bg-red-950">
                  <td className="p-3">OpenAI Realtime (4o)</td>
                  <td className="text-center p-3 font-mono">0, 46, 0, 1</td>
                  <td className="text-right p-3 font-mono font-bold text-red-600">$0.48</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chat AI Model Pricing</CardTitle>
          <CardDescription>Cost per customer query varies by AI model</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">AI Model</th>
                  <th className="text-center p-3 font-semibold">Multiplier</th>
                  <th className="text-right p-3 font-semibold">Cost per Query</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50 dark:bg-green-950">
                  <td className="p-3">gpt-3.5-turbo</td>
                  <td className="text-center p-3 font-mono">1x</td>
                  <td className="text-right p-3 font-mono font-bold text-green-600">$0.015</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">o3-mini</td>
                  <td className="text-center p-3 font-mono">2x</td>
                  <td className="text-right p-3 font-mono">$0.030</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">gpt-4o</td>
                  <td className="text-center p-3 font-mono">10x</td>
                  <td className="text-right p-3 font-mono">$0.150</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">gpt-4</td>
                  <td className="text-center p-3 font-mono">20x</td>
                  <td className="text-right p-3 font-mono">$0.300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle>💡 Cost Optimization Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <strong>Use Bring Your Own Keys (BYOK):</strong> Connect your own API keys for voice providers to save $0.02 per minute (33% reduction).
          </div>
          <div>
            <strong>Start with base models:</strong> gpt-3.5-turbo provides excellent performance for most use cases at the lowest cost.
          </div>
          <div>
            <strong>Choose voice providers wisely:</strong> Azure Standard offers the best balance of quality and cost. Premium voices like ElevenLabs increase costs by 50%.
          </div>
          <div>
            <strong>Monitor your usage:</strong> Set up low-balance alerts and review usage reports regularly to optimize spending.
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <a 
          href="https://portal.handvantage.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Add Credits to Wallet
        </a>
        <a 
          href="https://portal.handvantage.com/usage" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          View Usage Reports
        </a>
      </div>
    </div>
  );
}
