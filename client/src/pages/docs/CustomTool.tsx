import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Wrench, Code, Settings, CheckCircle2, Info, AlertTriangle, Link as LinkIcon } from "lucide-react";

export default function CustomTool() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Custom Tool</h1>
        <p className="text-xl text-muted-foreground">
          Connect any external API or platform to your AI assistant using custom tool integrations.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="mb-4">
          Custom Tools allow you to integrate any external API or service with your Handvantage 360 assistant. Once connected, your assistant can call these APIs to perform actions, retrieve data, or automate workflows—all through natural conversation.
        </p>
        
        <p className="mb-4">
          Whether you need to check inventory, create support tickets, update CRM records, or integrate with proprietary systems, Custom Tools provide the flexibility to connect anything with a REST API.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Create Custom Tool with base URL</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Configure functions and endpoints</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Set up tool configuration</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Step 4</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Connect to your assistant</p>
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
            <span>External API with REST endpoints</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>API documentation with endpoint details and parameters</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>Authentication credentials (if required by the API)</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-1 text-green-600" />
            <span>AI assistant created in Handvantage 360</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle>What You Can Build with Custom Tools</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div><strong>CRM Integration:</strong> Create contacts, update deals, log activities in Salesforce, HubSpot, or custom CRMs</div>
          <div><strong>Inventory Management:</strong> Check stock levels, update quantities, create purchase orders</div>
          <div><strong>Ticketing Systems:</strong> Create support tickets, update status, assign to teams</div>
          <div><strong>Payment Processing:</strong> Check payment status, process refunds, retrieve transaction history</div>
          <div><strong>Scheduling:</strong> Book appointments, check availability, send reminders</div>
          <div><strong>Data Retrieval:</strong> Fetch customer information, order status, account details</div>
          <div><strong>Workflow Automation:</strong> Trigger multi-step processes, send notifications, update databases</div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 1: Create Your Custom Tool</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Navigate to Tools & Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in to your <a href="https://portal.handvantage.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Handvantage 360 dashboard</a></li>
                <li>From the left-hand sidebar, click on <strong>Tools & Integration</strong></li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Click "Add Custom Tool"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Find the <strong>Add Custom Tool</strong> button in the interface</li>
                <li>Click on it to open the Add Tool dialog</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Fill Out the Add Tool Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>In the Add Tool dialog box, input the following details:</p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Name</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter a descriptive name for your custom tool (e.g., "Shopify Inventory", "Zendesk Tickets", "Custom CRM")
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Base URL</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The fixed part of the external API URL. This is the root domain and path that all endpoints will extend from.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-sm">
                    Example: https://api.example.com/v1
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Individual function endpoints will be appended to this base URL
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Description</h4>
                  <p className="text-sm text-muted-foreground">
                    Write a brief description of what your custom tool does and how you plan to use it. This helps you identify the tool later and provides context for the AI assistant.
                  </p>
                </div>
              </div>

              <p className="mt-3">Once done, click <strong>Add</strong> to save your custom tool.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 2: Configure Functions for Your Custom Tool</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Locate and Edit Your Tool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Find the custom tool you just created in the Tools & Integration list</li>
                <li>Click on <strong>Edit</strong> to open the tool configuration</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Click on the "Functions" Tab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>In the popup that appears after clicking Edit:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Click on the <strong>Functions</strong> tab</li>
                <li>This is where you'll define the API endpoints your assistant can call</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Click "Create Function"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Click the <strong>Create Function</strong> button</li>
                <li>The function definition form will appear</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-600" />
                Define Your Tool Function
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Fill out the following fields to define your API function:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-1">Endpoint</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The URL path that will be appended to your base URL. Include any path parameters.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-sm space-y-1">
                    <div>Example 1: /customers</div>                    <div>Example 2: /orders/&#123;orderId&#125;</div>
                    <div>Example 3: /inventory/check</div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-1">HTTP Method</h4>
                  <p className="text-sm text-muted-foreground">
                    Select the appropriate HTTP method: GET (retrieve data), POST (create data), PUT (update data), DELETE (remove data)
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-1">Content Type</h4>
                  <p className="text-sm text-muted-foreground">
                    Specify the content type, typically <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">application/json</code>
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-1">Function Name</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    A clear, descriptive name that the AI will use to identify this function. Use snake_case or camelCase.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-sm space-y-1">
                    <div>Example: get_customer_info</div>
                    <div>Example: create_support_ticket</div>
                    <div>Example: check_inventory_level</div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-1">Function Description</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    A detailed description that helps the AI understand when and how to use this function. Be specific about what it does.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded text-sm">
                    Example: &quot;Retrieves customer information including name, email, phone, and account status based on customer ID&quot;
                  </div>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-2">Properties (Parameters)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Define the parameters this function accepts. Each parameter needs:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-slate-900 p-3 rounded border">
                      <p className="font-semibold text-sm mb-1">Type</p>
                      <p className="text-xs text-muted-foreground">Data type: string, integer, number, boolean, array, object</p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 p-3 rounded border">
                      <p className="font-semibold text-sm mb-1">Name</p>
                      <p className="text-xs text-muted-foreground">Parameter name (e.g., customer_id, email, quantity)</p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 p-3 rounded border">
                      <p className="font-semibold text-sm mb-1">Description</p>
                      <p className="text-xs text-muted-foreground">Clear explanation of what this parameter is for</p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 p-3 rounded border">
                      <p className="font-semibold text-sm mb-1">Required</p>
                      <p className="text-xs text-muted-foreground">Whether this parameter is mandatory</p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Example Function Configuration:</strong><br/>
                  <span className="text-sm">
                    Function: get_order_status<br />                    Endpoint: /orders/&#123;orderId&#125;<br />
                    Method: GET<br/>
                    Parameters: orderId (string, required) - &quot;The unique order identifier&quot;
                  </span>
                </AlertDescription>
              </Alert>

              <p className="mt-3">Click <strong>Create</strong> to save the function.</p>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Tip:</strong> You can create multiple functions for the same Custom Tool. Each function represents a different API endpoint or action.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 3: Set Up Your Custom Tool Configuration</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Click "Set Up"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Locate your Custom Tool in the Tools & Integration list</li>
                <li>Click <strong>Set Up</strong> to create a configuration instance</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Click "Start New"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>A popup will appear</li>
                <li>Click <strong>Start New</strong> to create a new configuration</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Name Your Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Enter a descriptive name for your tool configuration</li>
                <li>This helps you identify different configurations if you have multiple setups (e.g., "Production API", "Test Environment")</li>
                <li>Click <strong>Create</strong></li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Enable Required Functions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>You'll see a list of all functions you created for this tool</li>
                <li>Toggle on all the functions you want your assistant to be able to use</li>
                <li>You can enable or disable specific functions based on your needs</li>
                <li>Click <strong>Save</strong> to finalize the configuration</li>
              </ol>
              
              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Why enable/disable functions?</strong> This gives you granular control over what your assistant can do. You might want to enable read-only functions but disable functions that modify data until you've thoroughly tested.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Step 4: Connect Custom Tool to Your Assistant</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Navigate to Your Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Go to the <strong>Assistants</strong> section in the left sidebar</li>
                <li>Find the assistant you want to connect this tool to</li>
                <li>Click <strong>Edit</strong> on that assistant</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Navigate to the Tools Tab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>In the assistant editor, click on the <strong>Tools</strong> tab</li>
                <li>This shows all available tools that can be connected to this assistant</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-blue-600" />
                Connect Your Custom Tool
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Find your newly created Custom Tool in the list</li>
                <li>Toggle it on or click <strong>Connect</strong></li>
                <li>Select the configuration you created in Step 3</li>
                <li>Save the assistant settings</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Success!</strong> Your assistant can now call your Custom Tool's functions during conversations.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add Prompts to Trigger Tool Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To ensure your assistant uses the Custom Tool effectively, add specific instructions in the assistant's system prompt:</p>
              
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded space-y-3">
                <p className="font-semibold text-sm">Example Prompt Instructions:</p>
                <div className="text-sm space-y-2">
                  <p>"When a customer asks about their order status, use the available tool to check the order information."</p>
                  <p>"If a customer wants to update their contact information, use the available tool to make the changes."</p>
                  <p>"When checking inventory levels, always use the available tool to get real-time stock data."</p>
                </div>
              </div>

              <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
                <Info className="h-4 w-4 text-orange-600" />
                <AlertDescription>
                  <strong>Important:</strong> Use the phrase "using the available tool" in your prompts to ensure the assistant activates the Custom Tool correctly.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-green-600" />
            Testing Your Custom Tool
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>After connecting your Custom Tool, test it thoroughly:</p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-2">1. Test Individual Functions</h4>
              <p className="text-sm text-muted-foreground">
                Use the assistant's test interface to trigger each function with sample queries. Verify the API calls are made correctly and responses are handled properly.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-2">2. Check API Logs</h4>
              <p className="text-sm text-muted-foreground">
                Review the System Logs in Handvantage 360 to see the actual API requests and responses. This helps debug any issues.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-2">3. Test Error Handling</h4>
              <p className="text-sm text-muted-foreground">
                Try queries that should fail (invalid IDs, missing parameters) to ensure the assistant handles errors gracefully.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold mb-2">4. Verify Data Accuracy</h4>
              <p className="text-sm text-muted-foreground">
                Cross-check the data returned by the Custom Tool against your actual system to ensure accuracy.
              </p>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm"><strong>Testing Checklist:</strong></p>
            <div className="space-y-1 text-sm mt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Functions are called when appropriate</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Parameters are passed correctly</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>API responses are parsed properly</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Error messages are user-friendly</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Authentication works (if required)</span>
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
                  <td className="p-3 font-medium">Function not being called</td>
                  <td className="p-3 text-sm">
                    Ensure the function is enabled in the tool configuration. Add clearer instructions in the assistant's system prompt using "using the available tool".
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">API authentication errors</td>
                  <td className="p-3 text-sm">
                    Verify API credentials are correct. Check if the API requires headers or tokens. Add authentication parameters to your function definition.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Wrong parameters sent</td>
                  <td className="p-3 text-sm">
                    Review parameter definitions (type, name, description). Ensure descriptions clearly explain what each parameter is for.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Timeout errors</td>
                  <td className="p-3 text-sm">
                    Check if the external API is slow or down. Verify network connectivity. Consider adding retry logic or caching.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Incorrect base URL</td>
                  <td className="p-3 text-sm">
                    Verify the base URL is correct and doesn't include endpoint paths. Check for trailing slashes.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Response parsing errors</td>
                  <td className="p-3 text-sm">
                    Verify the API returns JSON. Check the response structure matches expectations. Review System Logs for actual responses.
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
            <strong>Start simple:</strong> Begin with read-only GET functions before implementing functions that modify data (POST, PUT, DELETE).
          </div>
          <div>
            <strong>Clear naming:</strong> Use descriptive function names and parameter names that clearly indicate their purpose.
          </div>
          <div>
            <strong>Detailed descriptions:</strong> Write comprehensive function descriptions to help the AI understand when and how to use each function.
          </div>
          <div>
            <strong>Error handling:</strong> Design your API to return clear error messages that the assistant can relay to users.
          </div>
          <div>
            <strong>Test thoroughly:</strong> Test all functions with various inputs before deploying to production.
          </div>
          <div>
            <strong>Monitor usage:</strong> Regularly review System Logs to identify issues and optimize function calls.
          </div>
          <div>
            <strong>Version control:</strong> If your API changes, create new configurations rather than modifying existing ones to avoid breaking active assistants.
          </div>
          <div>
            <strong>Security:</strong> Never expose sensitive API keys in function descriptions. Use secure authentication methods.
          </div>
          <div>
            <strong>Rate limiting:</strong> Be aware of API rate limits and design your assistant to handle rate limit errors gracefully.
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
        <CardHeader>
          <CardTitle>Advanced: Authentication and Headers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>Many APIs require authentication. You can add authentication in several ways:</p>
          <div className="space-y-2 text-sm">
            <div>
              <strong>API Key in Header:</strong> Add an "Authorization" or "X-API-Key" parameter to your function properties
            </div>
            <div>
              <strong>Bearer Token:</strong> Include &quot;Authorization: Bearer &#123;token&#125;&quot; as a header parameter
            </div>
            <div>
              <strong>Basic Auth:</strong> Use base64-encoded credentials in the Authorization header
            </div>
            <div>
              <strong>Custom Headers:</strong> Add any required headers as function parameters
            </div>
          </div>
          <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription>
              <strong>Security Note:</strong> Store sensitive credentials securely. Consider using environment variables or secure credential storage rather than hardcoding in function definitions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <a 
          href="https://portal.handvantage.com/tools" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Manage Custom Tools
        </a>
        <a 
          href="https://portal.handvantage.com/assistants" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Manage Assistants
        </a>
      </div>
    </div>
  );
}
