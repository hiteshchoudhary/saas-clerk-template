import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { List, Clock, Github, Twitter, Facebook, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-4 py-12 flex-grow">
        {/* Hero Section */}
        <Card className="mb-12 border-none bg-gradient-to-r from-primary/20 to-secondary/20">
          <CardHeader>
            <CardTitle className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Welcome to TodoMaster
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-xl text-muted-foreground mb-8">
              Revolutionize your productivity with TodoMaster - The ultimate
              task management solution for professionals and teams.
            </p>
            <div className="flex justify-center space-x-6">
              <Button asChild size="lg" className="text-lg">
                <Link href="/sign-up">Start for Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="mb-12 border-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-primary">
              Powerful Features for Effortless Task Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <List className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">
                  Smart Organization
                </h4>
                <p className="text-muted-foreground">
                  Effortlessly categorize and prioritize tasks with our
                  intuitive interface.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Clock className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">
                  Intelligent Reminders
                </h4>
                <p className="text-muted-foreground">
                  Never miss a deadline with our AI-powered reminder system.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Users className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">
                  Seamless Collaboration
                </h4>
                <p className="text-muted-foreground">
                  Work together effortlessly with real-time task sharing and
                  updates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card className="mb-12 border-none bg-gradient-to-r from-secondary/20 to-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              What Our Users Say
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="italic text-lg text-muted-foreground">
                &ldquo;TodoMaster has transformed the way our team manages
                projects. It&apos;s intuitive, powerful, and
                indispensable!&rdquo;
                <footer className="text-right font-semibold mt-2">
                  - Sarah J., Project Manager
                </footer>
              </blockquote>
              <blockquote className="italic text-lg text-muted-foreground">
                &ldquo;I&apos;ve tried many task management apps, but TodoMaster
                is by far the best. It&apos;s boosted my productivity
                tenfold!&rdquo;
                <footer className="text-right font-semibold mt-2">
                  - Mark T., Entrepreneur
                </footer>
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-center space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-8 w-8" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-8 w-8" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-8 w-8" />
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2023 TodoMaster. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
