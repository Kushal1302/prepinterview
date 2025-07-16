"use client";

import { useEffect, useRef, useState } from "react";
import { X, Bot } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import clsx from "clsx";
import Image from "next/image";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const lastMessage = messages[messages.length - 1];
  const lastBotContent = lastMessage?.type === "bot" ? lastMessage.content : "";
  const animatedContent = useTypewriter(lastBotContent);

  const askBot = async () => {
    if (!question.trim()) return;
    setLoading(true);

    // Add user's message
    setMessages((prev) => [...prev, { type: "user", content: question }]);

    try {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_CHATBOT_SERVER_URL
        }/predict?question=${encodeURIComponent(question)}`
      );
      const data = await res.json();

      const answer = data?.answer || "Sorry, I couldn't understand that.";
      setMessages((prev) => [...prev, { type: "bot", content: answer }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: "An error occurred. Try again later." },
      ]);
    }

    setQuestion("");
    setLoading(false);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Bot />}
        </button>
      </div>

      {/* Chat UI */}
      {open && (
        <div className="fixed bottom-20 right-6 w-[340px] md:w-[400px] h-[500px] bg-white rounded-xl shadow-lg z-50 border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="blue-gradient-dark text-white text-center p-3 font-semibold items-center flex justify-center gap-2">
            <Image src={"/logo.svg"} alt="Logo" height={30} width={30} />{" "}
            Chatbot
          </div>
          2{/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50">
            {messages.map((msg, i) => {
              const isLast = i === messages.length - 1;
              const isBot = msg.type === "bot";
              const content = isLast && isBot ? animatedContent : msg.content;

              return (
                <div
                  key={i}
                  className={clsx("flex", {
                    "justify-end": msg.type === "user",
                    "justify-start": msg.type === "bot",
                  })}
                >
                  <div
                    className={clsx(
                      "max-w-[80%] px-3 py-2 rounded-lg text-sm shadow whitespace-pre-wrap",
                      {
                        "bg-blue-100 text-blue-900 rounded-br-none": isBot,
                        "bg-green-100 text-green-900 rounded-bl-none":
                          msg.type === "user",
                      }
                    )}
                  >
                    {content}
                    {isLast && isBot && (
                      <span className="animate-pulse ml-1">|</span>
                    )}
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="text-xs text-gray-500 animate-pulse">
                Bot is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <div className="p-2 border-t bg-white flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-md text-sm outline-blue-500 border-blue-700 text-black"
              placeholder="Ask a question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && askBot()}
            />
            <button
              className="bg-blue-900 text-white px-4 py-1 rounded-md hover:bg-blue-900 disabled:opacity-50 text-sm"
              onClick={askBot}
              disabled={loading || !question}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
