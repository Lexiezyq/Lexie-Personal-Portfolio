import ScrollReveal from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal width="100%">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollReveal>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="/portrait.jpg"
                alt="Professional workspace"
                className="object-cover w-full h-full"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <p className="mb-4">
                  <span className="font-semibold">University of Washington – Foster School of Business</span><br />
                  Master of Science in Information Systems (MSIS)<br />
                  Expected Graduation: Jun. 2025 | GPA: 3.53/4.00
                </p>
                <p className="mb-6">
                  <span className="font-semibold">Hong Kong Baptist University United International College</span><br />
                  Bachelor of Business Administration in Accounting<br />
                  Sept 2020 – Jun 2024 | GPA: 3.51/4.00
                </p>

                <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
                <p className="text-lg">
                  A data-driven professional with strong analytical skills and experience in business intelligence, 
                  machine learning, and financial analysis. I've worked with leading companies like Tencent, 
                  developing data analysis solutions and improving business operations through strategic insights.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}