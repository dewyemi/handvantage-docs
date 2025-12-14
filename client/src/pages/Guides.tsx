import { Link } from "wouter";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, MessageSquare, Zap, Book, ArrowRight } from "lucide-react";

export default function Guides() {
  const guides = [
    {
      title: "Getting Started",
      description: "Learn the basics of Handvantage and set up your first agent.",
      icon: <Book className="h-6 w-6 text-primary" />,
      href: "/quick-start",
    },
    {
      title: "Voice Agents",
      description: "Build, configure, and deploy AI voice assistants.",
      icon: <Phone className="h-6 w-6 text-primary" />,
      href: "/voice-agent/build",
    },
    {
      title: "Chat Agents",
      description: "Create chatbots for web and messaging channels.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      href: "/chat-agent/build",
    },
    {
      title: "Integrations",
      description: "Connect with Twilio, GoHighLevel, and more.",
      icon: <Zap className="h-6 w-6 text-primary" />,
      href: "/integrations/twilio",
    },
  ];

  return (
    <div className="container py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Guides & Tutorials</h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          Explore our comprehensive library of guides to help you get the most out of Handvantage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide, index) => (
          <Link key={index} href={guide.href}>
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-muted-foreground/10 bg-card/50 backdrop-blur-sm group">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  {guide.icon}
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl flex items-center gap-2">
                    {guide.title}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </CardTitle>
                  <CardDescription className="text-base">
                    {guide.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
