"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";

export default function NewsletterForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isChecked) {
      setError("You must agree to the privacy statement to continue.");
      toast.error("Please accept the privacy statement first");
      return;
    }

    setError("");
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
        toast.success("🎉 You’ve been subscribed successfully!");
        event.target.reset();
        setIsChecked(false);
      } else {
        toast.error("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Try again later.");
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
  className={`
    h-12 w-12 shrink-0 rounded-full
    bg-white shadow-sm
    flex items-center justify-center
    transition-all duration-200
    hover:bg-gray-50
    disabled:opacity-80
    ${loading ? "[&_svg]:hidden" : ""}
  `}
>
  {loading && (
    <span className="h-4 w-4 rounded-full border-2 border-gray-400 border-t-transparent animate-spin" />
  )}
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

        {/* Validation Error (only for checkbox) */}
        {error && (
          <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
        )}
      </form>
    </div>
  );
}
