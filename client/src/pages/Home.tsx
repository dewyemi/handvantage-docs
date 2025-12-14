import { Link } from "wouter";
import { ArrowRight, Book, Code, MessageSquare, Phone, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-10 pb-10">
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Handvantage Documentation
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Everything you need to build, deploy, and manage AI-powered voice and chat agents with Handvantage.
          </p>
          <div className="flex w-full items-center gap-4 pt-4 md:pt-6">
            <Link href="/quick-start">
              <Button size="lg" className="h-12 px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/api-reference">
              <Button variant="outline" size="lg" className="h-12 px-8">
                API Reference
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/voice-agent/build">
          <Card className="h-full transition-colors hover:bg-muted/50 cursor-pointer border-muted-foreground/20">
            <CardHeader>
              <Phone className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Voice Agents</CardTitle>
              <CardDescription>
                Build and deploy AI voice assistants that can handle inbound and outbound calls.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/chat-agent/build">
          <Card className="h-full transition-colors hover:bg-muted/50 cursor-pointer border-muted-foreground/20">
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Chat Agents</CardTitle>
              <CardDescription>
                Create intelligent chatbots for your website, WhatsApp, and other messaging channels.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/integrations/twilio">
          <Card className="h-full transition-colors hover:bg-muted/50 cursor-pointer border-muted-foreground/20">
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Integrations</CardTitle>
              <CardDescription>
                Connect Handvantage with Twilio, GoHighLevel, Calendars, and more.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/agency/branding">
          <Card className="h-full transition-colors hover:bg-muted/50 cursor-pointer border-muted-foreground/20">
            <CardHeader>
              <Settings className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Agency Settings</CardTitle>
              <CardDescription>
                Manage your white-label settings, custom domains, and sub-accounts.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/api-reference">
          <Card className="h-full transition-colors hover:bg-muted/50 cursor-pointer border-muted-foreground/20">
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>API Reference</CardTitle>
              <CardDescription>
                Comprehensive API documentation for developers building on Handvantage.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/guides">
          <Card className="h-full transition-colors hover:bg-muted/50 cursor-pointer border-muted-foreground/20">
            <CardHeader>
              <Book className="h-8 w-8 text-primary mb-2" />
              <CardTitle>All Guides</CardTitle>
              <CardDescription>
                Browse our complete library of guides, tutorials, and best practices.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>

      {/* Popular Topics */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Popular Topics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/voice-agent/pricing" className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <span className="font-semibold group-hover:text-primary">Pricing & Billing</span>
            <span className="text-sm text-muted-foreground">Understand wallet consumption and rates.</span>
          </Link>
          <Link href="/integrations/ghl" className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <span className="font-semibold group-hover:text-primary">GoHighLevel Setup</span>
            <span className="text-sm text-muted-foreground">Integrate AI agents with your GHL account.</span>
          </Link>
          <Link href="/voice-agent/phone-numbers" className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <span className="font-semibold group-hover:text-primary">Phone Numbers</span>
            <span className="text-sm text-muted-foreground">Buy and configure phone numbers for agents.</span>
          </Link>
          <Link href="/agency/sub-accounts" className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <span className="font-semibold group-hover:text-primary">Sub-accounts</span>
            <span className="text-sm text-muted-foreground">Manage client accounts and permissions.</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
