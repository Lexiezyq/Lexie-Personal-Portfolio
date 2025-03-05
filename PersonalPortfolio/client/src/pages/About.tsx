import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <Card>
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            <div className="prose prose-lg">
              <p>
                Hello! I'm a passionate developer with a keen interest in building
                modern web applications. I specialize in React, TypeScript, and
                modern web technologies.
              </p>
              
              <h2>My Journey</h2>
              <p>
                I started my programming journey 5 years ago and have since worked
                on various projects ranging from small business websites to large
                enterprise applications.
              </p>

              <h2>Skills & Expertise</h2>
              <ul>
                <li>Frontend Development: React, TypeScript, Next.js</li>
                <li>Backend Development: Node.js, Express, PostgreSQL</li>
                <li>DevOps: Docker, AWS, CI/CD</li>
              </ul>

              <h2>Interests</h2>
              <p>
                Outside of coding, I enjoy exploring new technologies, contributing
                to open source projects, and sharing knowledge with the developer
                community through blog posts and mentoring.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
