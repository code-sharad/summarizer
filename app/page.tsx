"use client";
import { useState } from "react";
import { TabsDemo } from "./Tabs";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [summary, setSummary] = useState(''); // storing the uploaded file    [1
  const [buttonClicked, setButtonClicked] = useState(false);
  console.log(summary)
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TabsDemo setSummary={setSummary}  setButtonClicked={setButtonClicked} />
      <div className="my-16">
        {summary.length !== 0 ? (
          <span className=" mx-4 font-medium font-mono">
             <textarea  className="p-4 resize-none overflow-hidden h-[100vh] lg:w-[60vw] w-[90vw] pl-9 rounded-lg" value={summary} disabled  />
          </span>
          
        ) : buttonClicked && 
          ( 
          <div className="flex items-center space-x-4">
            <div className="space-y-2 ">
              <Skeleton className="h-4 md:w-[350px] w-[90vw] " />
              <Skeleton className="h-4 md:w-[330px] w-[80vw]" />
              <Skeleton className="h-4 md:w-[500px] w-[85vw]" />
            </div>
          </div>
        )
        }
        {

        }
      </div>
    </main>
  );
}
