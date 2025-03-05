import ScrollReveal from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal width="100%">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <ScrollReveal key={category.title}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
