"use client";
import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: process.env.NEXT_PUBLIC_GEMINI_SYSTEM_INSTRUCTIONS || "",
});
import { Card, CardContent, CardDescription } from "@/components/ui/card";
const SymptomChecker = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  async function run() {
    const prompt = "I feel sick. What should I do?";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  return (
    <div className="w-full h-full flex flex-col flex-1">
      <div className="flex-1 overflow-hidden">
        <div className="max-h-[calc(100vh-152px)] h-full flex flex-col justify-between py-4 overflow-y-auto">
          <h1 className="text-center text-2xl font-bold">Check for Symptoms</h1>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 p-4">
        <div className="suggestions gap-4 flex-wrap flex items-center justify-center">
          <Card className="p-4 cursor-pointer transition-colors duration-300 hover:bg-primary/10">
            <CardDescription>What is cancer ?</CardDescription>
          </Card>
          <Card className="p-4 cursor-pointer transition-colors duration-300 hover:bg-primary/10">
            <CardDescription>What are cancer symptoms ?</CardDescription>
          </Card>
        </div>
        <div className="w-full justify-center items-center flex border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none min-h-[52px] rounded-[26px] gap-4">
          <textarea
            placeholder="Type your symptoms here"
            ref={textareaRef}
            rows={1}
            onChange={handleChange}
            className="w-full max-h-52 bg-transparent resize-none outline-none"
          ></textarea>
          <button
            disabled={!text}
            className={`send-button self-end transition-colors duration-300 ${
              text ? "bg-primary hover:bg-primary/60" : "bg-primary/60"
            } rounded-full`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
