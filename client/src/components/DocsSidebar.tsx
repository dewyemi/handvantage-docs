import { Link, useRoute } from "wouter";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface NavSection {
  title: string;
  items: NavItem[];
}

interface NavItem {
  title: string;
  path: string;
}

const navigationSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", path: "/" },
      { title: "Quick Start: Voice Agent", path: "/voice-agent/quick-start" },
      { title: "Quick Start: Chat Agent", path: "/chat-agent/quick-start" },
    ],
  },
  {
    title: "Voice Agent",
    items: [
      { title: "Build Voice Agent", path: "/voice-agent/build" },
      { title: "Configure Voice", path: "/voice-agent/configure" },
      { title: "Phone Numbers", path: "/voice-agent/phone-numbers" },
    ],
  },
  {
    title: "Chat Agent",
    items: [
      { title: "Build Chat Agent", path: "/chat-agent/build" },
      { title: "Widget Customization", path: "/chat-agent/widget" },
      { title: "Deploy to Website", path: "/chat-agent/deploy" },
    ],
  },
  {
    title: "Billing & Guides",
    items: [
      { title: "Pay As You Go", path: "/billing/pay-as-you-go" },
      { title: "Data Sources", path: "/guides/data-sources" },
    ],
  },
  {
    title: "Call Widgets",
    items: [
      { title: "Plivo Setup", path: "/call-widgets/plivo" },
      { title: "Telnyx Setup", path: "/call-widgets/telnyx" },
      { title: "SIP Configuration", path: "/call-widgets/sip" },
    ],
  },
  {
    title: "Chat Widgets",
    items: [
      { title: "Messenger Widget", path: "/chat-widgets/messenger" },
      { title: "Instagram Widget", path: "/chat-widgets/instagram" },
      { title: "SMS Widget", path: "/chat-widgets/sms" },
    ],
  },
  {
    title: "Tools",
    items: [
      { title: "Custom Tool", path: "/tools/custom-tool" },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Webhooks", path: "/features/webhooks" },
      { title: "Intents", path: "/features/intents" },
      { title: "Campaigns", path: "/features/campaigns" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "Twilio", path: "/integrations/twilio" },
      { title: "GoHighLevel", path: "/integrations/ghl" },
      { title: "WhatsApp", path: "/integrations/whatsapp" },
      { title: "Calendar", path: "/integrations/calendar" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Authentication", path: "/api/authentication" },
      { title: "Endpoints", path: "/api/endpoints" },
      { title: "Webhooks API", path: "/api/webhooks" },
    ],
  },
];

function NavSection({ section }: { section: NavSection }) {
  const [isOpen, setIsOpen] = useState(true);
  const [match] = useRoute("/:path*");

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent rounded-md transition-colors"
      >
        <span>{section.title}</span>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-1 space-y-1">
          {section.items.map((item) => {
            const isActive = window.location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 text-sm rounded-md transition-colors ml-4 ${
                  isActive
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function DocsSidebar() {
  return (
    <aside className="w-64 border-r border-border bg-background h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <Link href="/">
          <h2 className="text-xl font-bold mb-6 text-primary cursor-pointer hover:opacity-80 transition-opacity">
            Handvantage Docs
          </h2>
        </Link>
        
        <nav>
          {navigationSections.map((section) => (
            <NavSection key={section.title} section={section} />
          ))}
        </nav>
      </div>
    </aside>
  );
}
