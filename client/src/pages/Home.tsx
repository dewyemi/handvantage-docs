import { Link } from "wouter";
import { ArrowRight, Book, Code, MessageSquare, Phone, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-10 pb-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-background to-background border border-border/50 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20 px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start gap-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
              v2.0 Documentation
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              Build faster with <br className="hidden md:block" />
              <span className="text-primary">Handvantage</span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
              The complete guide to building, deploying, and managing AI-powered voice and chat agents.
            </p>
            <div className="flex flex-wrap w-full items-center gap-4 pt-4 md:pt-6">
              <Link href="/quick-start">
                <Button size="lg" className="h-12 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/api-reference">
                <Button variant="outline" size="lg" className="h-12 px-8 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80">
                  API Reference
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center overflow-hidden rounded-3xl border border-border/50 shadow-2xl bg-background/50 backdrop-blur-xl">
              <img 
                src="/hero-illustration.png" 
                alt="Handvantage AI Platform - Voice, Chat, and Integrations" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -z-10 inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/voice-agent/build">
          <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-muted-foreground/10 bg-card/50 backdrop-blur-sm group">
            <CardHeader>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Voice Agents</CardTitle>
              <CardDescription className="text-base">
                Build and deploy AI voice assistants that can handle inbound and outbound calls.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/chat-agent/build">
          <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-muted-foreground/10 bg-card/50 backdrop-blur-sm group">
            <CardHeader>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Chat Agents</CardTitle>
              <CardDescription className="text-base">
                Create intelligent chatbots for your website, WhatsApp, and other messaging channels.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/integrations/twilio">
          <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-muted-foreground/10 bg-card/50 backdrop-blur-sm group">
            <CardHeader>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Integrations</CardTitle>
              <CardDescription className="text-base">
                Connect Handvantage with Twilio, GoHighLevel, Calendars, and more.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/api-reference">
          <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-muted-foreground/10 bg-card/50 backdrop-blur-sm group">
            <CardHeader>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">API Reference</CardTitle>
              <CardDescription className="text-base">
                Comprehensive API documentation for developers building on Handvantage.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/guides">
          <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-muted-foreground/10 bg-card/50 backdrop-blur-sm group">
            <CardHeader>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">All Guides</CardTitle>
              <CardDescription className="text-base">
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

        </div>
      </section>
    </div>
  );
}
