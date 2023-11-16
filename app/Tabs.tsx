"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import handleSummarize from "./actions";
import { useToast } from "@/components/ui/use-toast";

export function TabsDemo(props) {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [file, setFile] = useState(null); // storing the uploaded file    [1
  const [fileSize, setFileSize] = useState(true);
  const { toast } = useToast();

  const handleInputChange = (event) => {
    const { target } = event;
    setInputValue(target.value);

    // Auto-grow the textarea by setting its height to scrollHeight
    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
  };
  const handleFileInput = (e) => {
    setIsFileUploaded(true);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      // const content = e.target.result;
      setFile(e.target.result);
      if (file.size < 10000) {
        setFileSize(true);
      } else {
        setFileSize(false);
      }
      console.log(e.target.result);
      // console.log(content?.toString());
    };
    reader.readAsText(file);
    // console.log(file);
    console.log(file);
  };

  const getSummary = async (file, inputValue) => {
    props.setButtonClicked(true);
    if (fileSize) {
      const data = await handleSummarize(file, inputValue);
      props.setSummary(data);
    } else {
      // toast({
      //   description: "File size must be less than 50kb.",
      // });
    }
    // console.log(data);
  };

  return (
    <Tabs defaultValue="file" className="w-[400px] px-10">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="file">Upload File</TabsTrigger>
        <TabsTrigger value="yt-link">Youtube video link</TabsTrigger>
      </TabsList>
      <TabsContent value="file">
        <Card>
          <CardHeader>
            <CardTitle>Uplaod file</CardTitle>
            <CardDescription>
              Upload file csv,excel,txt,docx. File size must be less than 50kb
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Input
              accept=".csv,.txt,"
              onChange={handleFileInput}
              id="file"
              type="file"
            />
            <CardFooter className="relative">
              <Textarea
                onChange={handleInputChange}
                value={inputValue}
                contentEditable
                className="pr-10 pb-3 text-md  resize-none h-auto overflow-hidden"
                placeholder="...summarize "
              />
              <div>
                {isFileUploaded && fileSize && (
                  <Button
                    onClick={() => getSummary(file, inputValue)}
                    className="absolute right-6 bottom-6 px-3 py-1 m-1"
                  >
                    +
                  </Button>
                )}
              </div>
            </CardFooter>
            {!fileSize && <p className="text-red-500">File size must be less than 50kb</p>}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="yt-link">
        <Card>
          <CardHeader>
            <CardTitle>Paste YT video link</CardTitle>
            <CardDescription>
              Video must have subtitle and video must be less 5 mintues long
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input id="current" type="yt-link" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Generate Summary</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
