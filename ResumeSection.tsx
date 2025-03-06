import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ResumeSection() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Lexie Zhang</h1>
        <p className="text-lg text-muted-foreground">
          lexiezhang123@gmail.com | (1) 206-915-3319 | 
          <a href="https://www.linkedin.com/in/lexiezhangzyq" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/lexiezhangzyq
          </a>
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">University of Washington – Foster School of Business</h3>
            <p className="text-muted-foreground">Master of Science in Information Systems (MSIS)</p>
            <p>Expected Graduation: Jun. 2025 | GPA: 3.53/4.00</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-semibold">Hong Kong Baptist University United International College</h3>
            <p className="text-muted-foreground">Bachelor of Business Administration in Accounting</p>
            <p>Sept 2020 – Jun 2024 | GPA: 3.51/4.00</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Tencent Holdings | Business Analyst Intern</h3>
            <p className="text-sm text-muted-foreground mb-2">Jul 2023 – Sept 2023 | Shenzhen, China</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Python-Driven Analysis: Achieved an 8% expense reduction by leveraging Python for data extraction and analysis</li>
              <li>Data Visualization: Enhanced decision-making by developing 10+ Tableau presentations</li>
              <li>Operational Reporting: Improved performance reporting and strategic alignment</li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-semibold">Cheng & Cheng Limited | Audit Assistant Intern</h3>
            <p className="text-sm text-muted-foreground mb-2">Jul 2022 – Sept 2022 | Hong Kong, China</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Performed vouching of over 1,000 entries and conducted substantive testing</li>
              <li>Prepared and organized working papers for Accounts Receivable, Cash, and Bank Balances</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Business Analytics: Python (Pandas, NumPy, Matplotlib), MySQL, Tableau, PowerBI</li>
            <li>Machine Learning: Decision Tree, Random Forest, LightGBM, K-means, Hierarchical Clustering, CNN</li>
            <li>Other Skills: Office PowerPoint® 2016/Office Word® 2016 Expert/Office Excel® 2016 Expert</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
