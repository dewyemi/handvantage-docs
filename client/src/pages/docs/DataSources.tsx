import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, Globe, Type, Table, AlertCircle, CheckCircle2, Database } from "lucide-react";

export default function DataSources() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Create and Manage Data Sources</h1>
        <p className="text-xl text-muted-foreground">
          Add knowledge to your AI assistant by uploading documents, scraping websites, or pasting content—so it can answer queries accurately based on your data.
        </p>
      </div>

      <Alert>
        <Database className="h-4 w-4" />
        <AlertDescription>
          Data sources are the foundation of your AI's knowledge. The more comprehensive and accurate your data sources, the better your AI assistant will perform.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Supported Data Source Types</CardTitle>
          <CardDescription>Handvantage 360 supports multiple formats for your knowledge base</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">PDF Upload</h3>
                <p className="text-sm text-muted-foreground">
                  Upload documents like policy guides, manuals, or help docs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Globe className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Website Scraper (HTTP)</h3>
                <p className="text-sm text-muted-foreground">
                  Provide a URL to crawl and extract content automatically
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Type className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Text Blob</h3>
                <p className="text-sm text-muted-foreground">
                  Manually paste raw text content directly
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Table className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">CSV Upload</h3>
                <p className="text-sm text-muted-foreground">
                  Upload structured data with text and optional image URLs
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">Creating a PDF Data Source</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Navigate to Data Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Log in to your Handvantage 360 dashboard</li>
                <li>Click on <strong>Data Sources</strong> in the left sidebar</li>
                <li>Click the <strong>Create Data Source</strong> button</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Select PDF as Data Source Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>From the available options, select <strong>PDF</strong> as your data source type.</p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Tip:</strong> You can add multiple PDFs to expand your assistant's knowledge. Each PDF is processed separately and can be managed independently.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Upload Your PDF File</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Enter a descriptive <strong>name</strong> for your data source (e.g., "Product Manual 2025")</li>
                <li>Add a brief <strong>description</strong> explaining what the document contains</li>
                <li>Click <strong>Upload PDF</strong> and select your file from your computer</li>
                <li>Click <strong>Submit</strong> to begin processing</li>
              </ol>
              
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Processing time varies based on document size. Small PDFs (under 10 pages) typically process in under a minute. Larger documents may take several minutes.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 4: Wait for Indexing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>After submission, your PDF will go through an indexing process:</p>
              <div className="space-y-2 ml-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span><strong>Processing:</strong> The system is extracting and indexing content</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span><strong>Ready to use:</strong> Data source is fully processed and available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span><strong>Failed:</strong> An error occurred during processing</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 5: Connect to Your Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Once the status shows "Ready to use", connect the data source to your AI assistant:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Navigate to <strong>Assistants</strong> in the sidebar</li>
                <li>Find your assistant and click the <strong>Options</strong> menu (three dots)</li>
                <li>Select <strong>Edit Assistant</strong></li>
                <li>Click on the <strong>Data Sources</strong> tab</li>
                <li>Click <strong>Assign Data Source</strong></li>
                <li>Check the box next to your PDF data source</li>
                <li>Click <strong>Close</strong> to confirm</li>
                <li>Click <strong>Save & Exit</strong> to apply changes</li>
              </ol>
              
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  Congratulations! Your data source is now connected. Your assistant can now reference this information in conversations.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Other Data Source Types</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-600" />
                HTTP (Website Scraper)
              </CardTitle>
              <CardDescription>Automatically extract content from websites</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Provide a website base URL for the AI to crawl and specify the maximum number of pages to scrape.</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Configuration Options:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Base URL:</strong> The starting point for the crawler (e.g., https://example.com/docs)</li>
                  <li><strong>Max Pages:</strong> Maximum number of pages to crawl (default: 100)</li>
                  <li><strong>Glob Format:</strong> Include or exclude specific URL patterns</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Glob Format Examples:</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li><code className="bg-background px-2 py-1 rounded">https://example.com/docs/**</code> - Include all pages under /docs</li>
                  <li><code className="bg-background px-2 py-1 rounded">!https://example.com/admin/**</code> - Exclude admin pages</li>
                </ul>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Crawled data is static. If website content changes, you must manually recrawl to update the data source.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5 text-purple-600" />
                Text Blob
              </CardTitle>
              <CardDescription>Paste raw text content directly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Copy and paste raw text content from any source. Ideal for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>FAQs and knowledge base articles</li>
                <li>Product descriptions and specifications</li>
                <li>Company policies and procedures</li>
                <li>Scripts and conversation templates</li>
              </ul>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm"><strong>Best Practice:</strong> Organize your text with clear headings and sections. The AI performs better with well-structured content.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Table className="h-5 w-5 text-orange-600" />
                CSV (Text + Images)
              </CardTitle>
              <CardDescription>Upload structured data with optional image references</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Upload a CSV file containing both text and image references to enhance your knowledge base.</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold">CSV Format Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Two-column format: one for text content, one for image URLs</li>
                  <li>First row should contain column headers</li>
                  <li>Image URLs must be publicly accessible</li>
                  <li>Supported image formats: JPG, PNG, WebP</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Example CSV Structure:</p>
                <pre className="text-xs bg-background p-2 rounded overflow-x-auto">
{`product_name,image_url
"Blue Widget Pro","https://example.com/images/blue-widget.jpg"
"Red Gadget Plus","https://example.com/images/red-gadget.jpg"`}
                </pre>
              </div>

              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Perfect for product catalogs, visual FAQs, or any scenario where images enhance understanding.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Troubleshooting & FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Issue</th>
                  <th className="text-left p-3 font-semibold">Description</th>
                  <th className="text-left p-3 font-semibold">Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Status shows "Failed"</td>
                  <td className="p-3 text-sm">File format is incorrect or website crawler didn't complete indexing</td>
                  <td className="p-3 text-sm">Delete the data source and upload it again. Ensure file is not corrupted.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Unable to delete data source</td>
                  <td className="p-3 text-sm">Data source is currently connected to an assistant</td>
                  <td className="p-3 text-sm">First disconnect it from all assistants, then delete.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">What is word count?</td>
                  <td className="p-3 text-sm">Total number of words in the uploaded data source</td>
                  <td className="p-3 text-sm">Check your usage in Billing & Usage section. Each plan has word count limits.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Add another file to existing source</td>
                  <td className="p-3 text-sm">Want to expand an existing data source</td>
                  <td className="p-3 text-sm">Create a new data source or upload another file of the same type to existing one.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Auto-update after website crawl?</td>
                  <td className="p-3 text-sm">Website content has changed</td>
                  <td className="p-3 text-sm">No automatic updates. You must manually recrawl to refresh the data.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Connect to dynamic database</td>
                  <td className="p-3 text-sm">Need live, frequently updating data</td>
                  <td className="p-3 text-sm">Use Custom Tools under Tools & Integrations to set up API connections.</td>
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
            <strong>Keep data sources focused:</strong> Create separate data sources for different topics rather than one massive document. This improves AI accuracy.
          </div>
          <div>
            <strong>Use descriptive names:</strong> Name your data sources clearly (e.g., "2025 Product Catalog" not "Document1").
          </div>
          <div>
            <strong>Update regularly:</strong> Review and update your data sources monthly to ensure information stays current.
          </div>
          <div>
            <strong>Test after adding:</strong> After connecting a new data source, test your assistant to verify it can access and use the information correctly.
          </div>
          <div>
            <strong>Monitor word count:</strong> Keep track of your total word count across all data sources to stay within plan limits.
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <a 
          href="https://portal.handvantage.com/data-sources" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Manage Data Sources
        </a>
      </div>
    </div>
  );
}
