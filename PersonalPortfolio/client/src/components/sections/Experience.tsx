import ScrollReveal from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal width="100%">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        </ScrollReveal>

        <div className="space-y-6 max-w-4xl mx-auto">
          <ScrollReveal>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Tencent Holdings</h3>
                    <p className="text-muted-foreground">Summer Intern, Business Analyst | Jul 2023 – Sept 2023</p>
                    <p className="text-sm text-muted-foreground mb-4">Shenzhen, China</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li className="text-foreground">Python-Driven Analysis: Achieved an 8% expense reduction by leveraging Python for data extraction and analysis, creating pivot tables to evaluate cost and revenue across B2B product lines and forecasting future costs.</li>
                      <li className="text-foreground">Data Visualization: Enhanced decision-making by developing 10+ Tableau presentations, visualizing key financial and operational metrics such as customer growth trends, renewal rates, revenue insights, and churn analysis for B2B cybersecurity products.</li>
                      <li className="text-foreground">Operational Reporting: Improved performance reporting and strategic alignment by redesigning the logic and structure of weekly operational meetings, ensuring discussions focused on key business objectives.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Cheng & Cheng Limited</h3>
                    <p className="text-muted-foreground">Summer Intern, Audit Assistant | Jul 2022 – Sept 2022</p>
                    <p className="text-sm text-muted-foreground mb-4">Hong Kong, China</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li className="text-foreground">Vouching and Substantive Testing: Performed vouching of over 1,000 entries and conducted substantive testing to ensure data accuracy and completeness, using Excel's VLOOKUP function to identify discrepancies. Verified bank reconciliation statements and journal entries for consistency, compiling over 100 bank confirmation letters.</li>
                      <li className="text-foreground">Financial Audit Documentation: Prepared and organized working papers for Accounts Receivable, Cash, and Bank Balances using Excel, ensuring accurate, logical, and comprehensive documentation.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
