import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import LandingPage from "./pages/LandingPage";
import MarketingAssets from "./pages/MarketingAssets";

// Documentation Pages
import QuickStart from "./pages/docs/QuickStart";
import ApiReference from "./pages/docs/ApiReference";
import PlatformOverview from "./pages/docs/PlatformOverview";

// Voice Agents
import VoiceAgentBuild from "./pages/docs/VoiceAgentBuild";
import VoiceSettings from "./pages/docs/VoiceSettings";
import PhoneNumbers from "./pages/docs/PhoneNumbers";

// Chat Agents
import ChatAgentBuild from "./pages/docs/ChatAgentBuild";
import WidgetCustomization from "./pages/docs/WidgetCustomization";
import DeployToWebsite from "./pages/docs/DeployToWebsite";

// Integrations
import TwilioSetup from "./pages/docs/TwilioSetup";
import GHLSetup from "./pages/docs/GHLSetup";
import WhatsAppSetup from "./pages/docs/WhatsAppSetup";
import CalendarSetup from "./pages/docs/CalendarSetup";

// Agency Features (Removed as per request, but keeping file for reference if needed later)
// import AgencyBranding from "./pages/docs/AgencyBranding";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/marketing-assets" component={MarketingAssets} />
        <Route path="/guides" component={Guides} />
        
        {/* Getting Started */}
        <Route path="/quick-start" component={QuickStart} />
        <Route path="/overview" component={PlatformOverview} />
        
        {/* Voice Agents */}
        <Route path="/voice-agent/build" component={VoiceAgentBuild} />
        <Route path="/voice-agent/settings" component={VoiceSettings} />
        <Route path="/voice-agent/phone-numbers" component={PhoneNumbers} />
        
        {/* Chat Agents */}
        <Route path="/chat-agent/build" component={ChatAgentBuild} />
        <Route path="/chat-agent/widget" component={WidgetCustomization} />
        <Route path="/chat-agent/deploy" component={DeployToWebsite} />
        
        {/* Integrations */}
        <Route path="/integrations/twilio" component={TwilioSetup} />
        <Route path="/integrations/ghl" component={GHLSetup} />
        <Route path="/integrations/whatsapp" component={WhatsAppSetup} />
        <Route path="/integrations/calendar" component={CalendarSetup} />
        
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
