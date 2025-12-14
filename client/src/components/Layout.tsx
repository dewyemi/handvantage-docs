import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X, Moon, Sun, ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

const navConfig: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Quick Start Guide", href: "/quick-start" },
      { title: "Platform Overview", href: "/overview" },
    ],
  },
  {
    title: "Voice Agents",
    items: [
      { title: "Build First Voice Agent", href: "/voice-agent/build" },
      { title: "Voice Settings", href: "/voice-agent/settings" },
      { title: "Phone Numbers", href: "/voice-agent/phone-numbers" },
    ],
  },
  {
    title: "Chat Agents",
    items: [
      { title: "Build First Chat Agent", href: "/chat-agent/build" },
      { title: "Widget Customization", href: "/chat-agent/widget" },
      { title: "Deploy to Website", href: "/chat-agent/deploy" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "Twilio Setup", href: "/integrations/twilio" },
      { title: "GoHighLevel (GHL)", href: "/integrations/ghl" },
      { title: "WhatsApp", href: "/integrations/whatsapp" },
      { title: "Calendar Tools", href: "/integrations/calendar" },
    ],
  },

  {
    title: "API Reference",
    href: "/api-reference",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/10 selection:text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 md:hidden">
              <MobileNav />
            </div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="hidden font-bold tracking-tight sm:inline-block">
                Handvantage Docs
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <Link href="/guides" className={cn("transition-colors hover:text-foreground", location.startsWith("/guides") && "text-foreground")}>Guides</Link>
              <Link href="/api-reference" className={cn("transition-colors hover:text-foreground", location.startsWith("/api-reference") && "text-foreground")}>API Reference</Link>
              <a href="https://app.handvantage360.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground flex items-center gap-1">
                Dashboard <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                className="pl-8 h-9 bg-muted/50 border-muted-foreground/20 focus-visible:bg-background"
                onClick={() => setIsSearchOpen(true)}
              />
              <kbd className="pointer-events-none absolute right-2 top-2.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {theme === "dark" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar Navigation */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <div className="w-full">
              {navConfig.map((section, index) => (
                <div key={index} className="pb-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
                    {section.title}
                  </h4>
                  {section.items?.length && (
                    <div className="grid grid-flow-row auto-rows-max text-sm">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href || "#"}
                          className={cn(
                            "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline text-muted-foreground hover:text-foreground",
                            location === item.href && "font-medium text-primary hover:text-primary"
                          )}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_240px]">
          <div className="mx-auto w-full min-w-0">
            {children}
          </div>
          
          {/* Table of Contents (Placeholder for now) */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 pt-4">
              <ScrollArea className="pb-10">
                <div className="space-y-2">
                  <p className="font-medium text-foreground">On this page</p>
                  <ul className="m-0 list-none">
                    <li className="mt-0 pt-2">
                      <a href="#" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">
                        Overview
                      </a>
                    </li>
                    <li className="mt-0 pt-2">
                      <a href="#" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">
                        Features
                      </a>
                    </li>
                    <li className="mt-0 pt-2">
                      <a href="#" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">
                        Next Steps
                      </a>
                    </li>
                  </ul>
                </div>
              </ScrollArea>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold">Handvantage Docs</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navConfig.map((section, index) => (
              <div key={index} className="pt-4">
                <h4 className="font-medium mb-2 text-foreground">{section.title}</h4>
                {section.items?.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href || "#"}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-1 text-muted-foreground transition-colors hover:text-foreground",
                      location === item.href && "text-primary font-medium"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
