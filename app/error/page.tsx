"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="container mx-auto p-4 max-w-3xl min-h-screen flex items-center justify-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-destructive" />
            Oops! Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-4">
            We encountered an unexpected error. Don&apos;t worry, we&apos;re
            working on fixing it.
          </p>
          <p className="text-muted-foreground mb-6">
            You&apos;ll be redirected to the home page in 5 seconds, or you can
            click the button below.
          </p>
          <Button onClick={() => router.push("/")} className="w-full sm:w-auto">
            Go to Home Page
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
