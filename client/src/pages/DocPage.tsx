import { Streamdown } from "streamdown";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface DocPageProps {
  title: string;
  description?: string;
  content: string;
  breadcrumbs?: { title: string; href: string }[];
}

export default function DocPage({ title, description, content, breadcrumbs }: DocPageProps) {
  return (
    <div className="space-y-6 pb-10">
      {/* Breadcrumbs */}
      {breadcrumbs && (
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground transition-colors">Docs</Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4" />
              <Link href={crumb.href} className="hover:text-foreground transition-colors">
                {crumb.title}
              </Link>
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{title}</span>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="space-y-2 border-b pb-8">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
        {description && (
          <p className="text-xl text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-m-20 prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-ul:my-6 prose-ol:my-6 prose-code:rounded prose-code:bg-muted prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm prose-code:font-semibold prose-pre:p-0 prose-pre:bg-transparent">
        <Streamdown>{content}</Streamdown>
      </div>

      {/* Feedback Section */}
      <div className="mt-16 border-t pt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Was this page helpful?
          </p>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-4">
              Yes
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-4">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
