"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export default function NewsletterForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(""); // status message
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isChecked) {
      setError("You must agree to the privacy statement to continue.");
      return;
    }

    setError("");
    setStatus("");
    setLoading(true);

    const formData = new FormData(event.target);
    const email = formData.get("email");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("🎉 You’ve been subscribed successfully!");
        event.target.reset();
        setIsChecked(false);
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("⚠️ Network error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="relative z-10 max-w-lg">
      <h2 className="text-white">Thinking in your mailbox</h2>

      <form className="mt-8 max-w-sm" onSubmit={handleSubmit}>
        {/* Input + Button */}
        <div className="flex items-center justify-between rounded-full bg-indigo-100 p-2">
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="h-12 flex-1 rounded-full border-0 bg-transparent px-4 text-lg placeholder:text-lg placeholder:text-gray-400 placeholder:opacity-70 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            variant="ghost"
            disabled={loading}
            className="h-12 w-12 shrink-0 rounded-full bg-white shadow-sm hover:bg-gray-50"
          >
          
          </Button>
        </div>

        {/* Checkbox */}
        <div className="mt-6 flex items-center space-x-2">
          <Checkbox
            id="terms"
            className="border-gray-50"
            onCheckedChange={(checked) => setIsChecked(checked)}
          />
          <label htmlFor="terms" className="text-base font-medium text-white">
            I agree to the privacy statement
          </label>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
        )}

        {/* Status message */}
        {status && (
          <p className="mt-4 text-sm font-medium text-green-400">{status}</p>
        )}
      </form>
    </div>
  );
}
