"use client";
import { useState } from "react";
import { TabsDemo } from "./Tabs";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [summary, setSummary] = useState(""); // storing the uploaded file    [1
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TabsDemo setSummary={setSummary}  setButtonClicked={setButtonClicked} />
      <div>
        {summary.length !== 0 ? (
          <p className="my-10  font-medium font-mono">{summary}</p>
        ) : buttonClicked && 
          ( 
          <div className="flex items-center space-x-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[350px]" />
              <Skeleton className="h-4 w-[330px]" />
              <Skeleton className="h-4 w-[500px]" />
            </div>
          </div>
        )
        }
      </div>
    </main>
  );
}
