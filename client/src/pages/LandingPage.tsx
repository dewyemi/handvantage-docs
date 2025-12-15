import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, PhoneMissed, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-icon.png" alt="Handvantage" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight">Handvantage</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Results</a>
            <Button asChild variant="default" size="sm" className="rounded-full px-6">
              <Link href="/quick-start">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Now Available for Home Service Businesses
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance">
              Stop Losing <span className="text-primary">$10,000+ Jobs</span> to Missed Calls.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
              Handvantage AI answers every call instantly, qualifies leads, and books appointments directly into your calendar—24/7, even on weekends and holidays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                Start Recovering Revenue
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2">
                View Live Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-4 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-green-500" /> Trusted by 50+ Home Service Businesses
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Your Voicemail is Where <span className="text-destructive">Leads Go to Die</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In the home service industry, speed is everything. If a customer has a burst pipe or a broken AC, they don't leave a voicemail—they call your competitor.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <PhoneMissed className="h-6 w-6 text-destructive mt-1" />
                  <div>
                    <span className="font-bold text-foreground">67% of customers hang up</span>
                    <p className="text-muted-foreground">if they get sent to voicemail. They won't call back.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-destructive mt-1" />
                  <div>
                    <span className="font-bold text-foreground">Every missed call is lost revenue</span>
                    <p className="text-muted-foreground">Potential $500 - $15,000 jobs lost to competitors who answered.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-destructive/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50"></div>
              <Card className="relative border-destructive/20 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <PhoneMissed className="h-5 w-5" /> Missed Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg opacity-50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">JD</div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-xs">Missed Call • 2 mins ago</p>
                      </div>
                    </div>
                    <span className="text-red-500 font-bold">-$1,200</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg opacity-50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">SM</div>
                      <div>
                        <p className="font-medium">Sarah Miller</p>
                        <p className="text-xs">Missed Call • 15 mins ago</p>
                      </div>
                    </div>
                    <span className="text-red-500 font-bold">-$850</span>
                  </div>
                  <div className="p-4 bg-destructive/10 rounded-lg text-center text-destructive font-medium">
                    Total Potential Loss: $2,050 (Today)
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="features" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              An AI Employee That Works <span className="text-primary">Harder Than You Do</span>.
            </h2>
            <p className="text-lg text-muted-foreground">
              Handvantage isn't just a "phone system." It's a fully trained AI sales agent that lives in your phone lines.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Instant Answer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Picks up on the first ring, every time. No more hold music, no more voicemail jail.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Lead Qualification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Asks the right questions ("Is this an emergency?", "Address?") to filter out tire-kickers.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Capture the "after-hours" emergency market that your competitors are ignoring.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How It Works</h2>
            <p className="text-muted-foreground mt-4">Three simple steps to automated revenue.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/20">1</div>
              <h3 className="text-xl font-bold">Connect Your Number</h3>
              <p className="text-muted-foreground">Simply forward your missed calls to your dedicated Handvantage AI number.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/20">2</div>
              <h3 className="text-xl font-bold">Customize Your Script</h3>
              <p className="text-muted-foreground">Tell the AI about your services, pricing, and booking rules in plain English.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/20">3</div>
              <h3 className="text-xl font-bold">Watch Revenue Grow</h3>
              <p className="text-muted-foreground">The AI handles the intake, qualifies the leads, and you handle the paid jobs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-primary/5"></div>
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Your Competitors Are Still Sleeping. <br/>You Shouldn't Be.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Claim your 24/7 AI Receptionist today and stop leaving money on the table.
          </p>
          <Button size="lg" className="text-lg px-10 py-8 rounded-full shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all scale-105">
            Get Your Custom Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40 bg-background">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo-icon.png" alt="Handvantage" className="h-6 w-6 grayscale opacity-50" />
            <span className="text-sm font-medium text-muted-foreground">Handvantage AI © 2025</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
