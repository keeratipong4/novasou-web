import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ title, subtitle, items, columns = 4 }: FeatureGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-500 font-light">{subtitle}</p>}
        </div>

        <div className={cn("grid gap-8", gridCols[columns])}>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="h-full border-gray-100 bg-gray-50/50 hover:bg-white hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  {Icon && (
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-primary">
                      <Icon size={24} />
                    </div>
                  )}
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
