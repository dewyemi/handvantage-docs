import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Documentation Pages
import QuickStart from "./pages/docs/QuickStart";
import ApiReference from "./pages/docs/ApiReference";
import VoiceAgentBuild from "./pages/docs/VoiceAgentBuild";
import AgencyBranding from "./pages/docs/AgencyBranding";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Getting Started */}
        <Route path="/quick-start" component={QuickStart} />
        
        {/* Voice Agents */}
        <Route path="/voice-agent/build" component={VoiceAgentBuild} />
        
        {/* Agency Features */}
        <Route path="/agency/branding" component={AgencyBranding} />
        
        {/* API Reference */}
        <Route path="/api-reference" component={ApiReference} />
        
        {/* Fallback for pages not yet implemented - redirect to Home or show 404 */}
        <Route path="/:rest*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" storageKey="handvantage-docs-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
