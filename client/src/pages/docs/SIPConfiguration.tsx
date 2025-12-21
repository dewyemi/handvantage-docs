import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Network, Phone, Shield, Settings, CheckCircle2, AlertTriangle, Info } from "lucide-react";

export default function SIPConfiguration() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">SIP Configuration Guide</h1>
        <p className="text-xl text-muted-foreground">
          Connect your existing SIP trunk to Handvantage 360 for enterprise voice AI capabilities.
        </p>
      </div>

      <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription>
          <strong>Important Note:</strong> SIP provider interfaces vary significantly. Field names and locations may differ from this guide. We recommend sharing these instructions with your SIP provider's support team for accurate configuration assistance.
        </AlertDescription>
      </Alert>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="mb-4">
          SIP (Session Initiation Protocol) integration allows you to connect your existing telephony infrastructure to Handvantage 360. This is ideal for enterprises with established SIP trunks who want to add AI voice capabilities without changing providers.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Configure Origination for inbound calls</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Configure Termination for outbound calls</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Create SIP widget in Handvantage 360</p>
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
            <span>Active SIP trunk with your provider</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Access to your SIP trunk configuration panel</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>SIP authentication credentials (username & password)</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Phone number (DID) assigned to your SIP trunk</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Your SIP trunk's origin server IP address</span>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 1: Set Up Origination (Inbound Calls)</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600" />
              Configure Inbound Call Routing
            </CardTitle>
            <CardDescription>
              Origination settings tell your SIP provider where to send incoming calls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Navigate to Origination Settings</h4>
              <p className="text-sm text-muted-foreground mb-2">
                In your SIP trunk configuration panel, find the section for <strong>Origination</strong>, <strong>Inbound Routing</strong>, or <strong>Incoming Calls</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">2. Add Handvantage 360 SIP URI</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Configure your SIP trunk to forward incoming calls to Handvantage 360 using this format:
              </p>
              
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                sip:+&lt;Phone_Number&gt;@sip.insighto.ai
              </div>
              
              <div className="mt-3 p-3 bg-muted rounded-lg">
                <p className="text-sm"><strong>Example:</strong></p>
                <p className="text-sm font-mono mt-1">sip:+14155551234@sip.insighto.ai</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Replace <code>+14155551234</code> with your actual phone number (DID) including country code
                </p>
              </div>
            </div>

            <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> The phone number in the SIP URI must match the DID assigned to your SIP trunk and the number you'll enter in the Handvantage 360 widget configuration.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 2: Set Up Termination (Outbound Calls)</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5 text-purple-600" />
                Configure Outbound Call Routing
              </CardTitle>
              <CardDescription>
                Termination settings allow Handvantage 360 to make outbound calls through your SIP trunk
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Navigate to Termination Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Find the section for <strong>Termination</strong>, <strong>Outbound Routing</strong>, or <strong>Outgoing Calls</strong> in your SIP trunk panel.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Configure Authentication</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Set up authentication credentials that Handvantage 360 will use to make outbound calls:
                </p>
                
                <div className="space-y-2">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="font-medium text-sm">Username</p>
                    <p className="text-xs text-muted-foreground">Your SIP trunk username for authentication</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="font-medium text-sm">Password</p>
                    <p className="text-xs text-muted-foreground">Your SIP trunk password for authentication</p>
                  </div>
                </div>

                <Alert className="border-red-200 bg-red-50 dark:bg-red-950 mt-3">
                  <Shield className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800 dark:text-red-200">
                    <strong>Security:</strong> Store these credentials securely. You'll need them when creating the SIP widget in Handvantage 360.
                  </AlertDescription>
                </Alert>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Whitelist Handvantage 360 IP Address</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Add the following IP address to your SIP trunk's whitelist for SIP signaling:
                </p>
                
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  54.236.168.131
                </div>
                
                <p className="text-sm text-muted-foreground mt-3">
                  This allows Handvantage 360 servers to communicate with your SIP trunk for outbound calls.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 3: Create SIP Widget in Handvantage 360</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Part A: Create Widget</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in to your <a href="https://portal.handvantage.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Handvantage 360 dashboard</a></li>
                <li>Navigate to <strong>Widgets</strong></li>
                <li>Click <strong>Create Widget</strong></li>
                <li>Select widget type as <strong>SIP</strong></li>
                <li>Enter the <strong>phone number</strong> with country code (e.g., +14155551234)</li>
                <li>Enable both <strong>Inbound Calls</strong> and <strong>Outbound Calls</strong> checkboxes</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Part B: Configure Outbound Call Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Enter the termination details from Step 2:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Termination Phone URL</h4>
                  <p className="text-sm text-muted-foreground">
                    The SIP URI provided by your SIP trunk provider for outbound calls
                  </p>
                  <p className="text-xs font-mono mt-1 text-muted-foreground">
                    Example: sip:yourdomain.sipprovider.com
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">SIP Username</h4>
                  <p className="text-sm text-muted-foreground">
                    Authentication username from Step 2
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">SIP Password</h4>
                  <p className="text-sm text-muted-foreground">
                    Authentication password from Step 2
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Part C: Configure Inbound Call Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Enter your SIP trunk's origin server details:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold mb-1">IP Address of Origin Server</h4>
                  <p className="text-sm text-muted-foreground">
                    Your SIP trunk's IP address that will send calls to Handvantage 360
                  </p>
                  <p className="text-xs font-mono mt-1 text-muted-foreground">
                    Example: 203.0.113.45
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold mb-1">IP Subnet Mask</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Specify the subnet mask for IP whitelisting:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Use <strong>32</strong> for a single fixed IP address</li>
                    <li>• Use appropriate CIDR notation for IP ranges (e.g., 24 for /24 subnet)</li>
                  </ul>
                </div>
              </div>

              <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertDescription>
                  <strong>Critical:</strong> The origin server IP must be whitelisted by Handvantage 360. Please contact support at <a href="mailto:support@dg.handvantage.com" className="text-blue-600 hover:underline">support@dg.handvantage.com</a> with your IP address to complete whitelisting.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Part D: Verify DID Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> Ensure the DID (Direct Inward Dialing number) configured in your SIP trunk matches exactly with the phone number entered in the Handvantage 360 platform, including country code.
                </AlertDescription>
              </Alert>

              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm font-semibold mb-2">Configuration Checklist:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                    <span>Phone number format consistent across all configurations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                    <span>Inbound and Outbound calls both enabled</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                    <span>Authentication credentials entered correctly</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                    <span>IP address whitelisting completed</span>
                  </div>
                </div>
              </div>

              <p className="text-sm">
                Once all settings are configured, click <strong>Finish</strong> to create the SIP widget.
              </p>
            </CardContent>
          </Card>

          <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              <strong>Configuration Complete!</strong> Your SIP trunk is now connected to Handvantage 360. Test both inbound and outbound calls to verify functionality.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-green-600" />
            Testing Your SIP Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-2">Inbound Call Test</h4>
            <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
              <li>Call your configured phone number from an external phone</li>
              <li>Verify the AI assistant answers the call</li>
              <li>Test the conversation flow and voice quality</li>
              <li>Check that call transfer and hold features work correctly</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Outbound Call Test</h4>
            <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
              <li>Configure your assistant to make an outbound call (using campaigns or webhooks)</li>
              <li>Verify the call connects successfully</li>
              <li>Check caller ID displays correctly</li>
              <li>Test conversation quality and assistant responses</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            Troubleshooting Common Issues
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Issue</th>
                  <th className="text-left p-3 font-semibold">Possible Cause</th>
                  <th className="text-left p-3 font-semibold">Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Inbound calls not connecting</td>
                  <td className="p-3 text-sm">Incorrect SIP URI in origination settings</td>
                  <td className="p-3 text-sm">Verify the SIP URI format and phone number match exactly</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Outbound calls failing</td>
                  <td className="p-3 text-sm">Authentication credentials incorrect or IP not whitelisted</td>
                  <td className="p-3 text-sm">Double-check username/password and verify IP 54.236.168.131 is whitelisted</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">403 Forbidden error</td>
                  <td className="p-3 text-sm">Origin server IP not whitelisted by Handvantage 360</td>
                  <td className="p-3 text-sm">Contact support to whitelist your SIP trunk's IP address</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">DID mismatch error</td>
                  <td className="p-3 text-sm">Phone number format inconsistent</td>
                  <td className="p-3 text-sm">Ensure phone number includes country code and matches across all configs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">One-way audio</td>
                  <td className="p-3 text-sm">Firewall or NAT issues</td>
                  <td className="p-3 text-sm">Check firewall rules and ensure RTP ports are open (typically 10000-20000)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Poor call quality</td>
                  <td className="p-3 text-sm">Network latency or bandwidth issues</td>
                  <td className="p-3 text-sm">Check network quality, consider QoS settings, verify codec compatibility</td>
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
            <strong>Work with your SIP provider:</strong> SIP configurations vary significantly between providers. Share this guide with their support team for accurate field mapping.
          </div>
          <div>
            <strong>Document your settings:</strong> Keep a record of all configuration values, IP addresses, and credentials in a secure location.
          </div>
          <div>
            <strong>Test thoroughly:</strong> Test both inbound and outbound calls in various scenarios before going live.
          </div>
          <div>
            <strong>Monitor call quality:</strong> Regularly review call recordings and logs to ensure optimal performance.
          </div>
          <div>
            <strong>Keep credentials secure:</strong> Store SIP authentication credentials in a password manager, never in code or public documents.
          </div>
          <div>
            <strong>Plan for redundancy:</strong> Consider configuring multiple SIP trunks for failover and high availability.
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>
            SIP configuration can be complex. If you encounter issues or need assistance:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-1 text-orange-600" />
              <span>Contact your SIP provider's support team with this guide</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-1 text-orange-600" />
              <span>Email Handvantage 360 support at <a href="mailto:support@dg.handvantage.com" className="text-blue-600 hover:underline">support@dg.handvantage.com</a></span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-1 text-orange-600" />
              <span>Check System Logs in your dashboard (Settings → System Logs) for error details</span>
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
          href="mailto:support@dg.handvantage.com" 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
