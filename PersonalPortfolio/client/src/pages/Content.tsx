import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Content() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-6">AI-Generated Content</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Generated Image Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Generated Artwork</h2>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1706293176524-5bba2fcca638?q=80&w=1000"
                    alt="AI Generated Art"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* AI Generated Text Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">AI Story</h2>
                <div className="prose prose-sm">
                  <p>
                    In the digital realm of tomorrow, where algorithms dance with creativity,
                    a unique symphony of code and imagination unfolds. Each pixel tells a story,
                    each function writes a verse in the endless poem of technology.
                  </p>
                  <p>
                    Through the lens of artificial intelligence, we see patterns emerge like
                    digital constellations, mapping the future of human-computer interaction
                    in ways we never imagined possible.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
