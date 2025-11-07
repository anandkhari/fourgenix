"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export default function NewsletterForm() {
  // 1. State for the checkbox
  const [isChecked, setIsChecked] = useState(false);
  
  // 2. State for our error message
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    // 3. Prevent the form from submitting normally
    event.preventDefault();

    // 4. VALIDATION: Check if the box is ticked
    if (!isChecked) {
      // 5. If not, set the error message and stop
      setError("You must agree to the privacy statement to continue.");
      return;
    }

    // --- If we are here, the form is valid ---
    
    // 6. Clear any previous errors
    setError("");

    // 7. Get the form data (example)
    const formData = new FormData(event.target);
    const email = formData.get("email");
    
    // 8. TODO: Send the data to your API/server
    console.log("Form submitted successfully!");
    console.log("Email:", email);
    // e.g., sendToApi({ email });
  };

  return (
    <div className="relative  z-10 max-w-lg">
      <h2 className="text-white">Thinking in your mailbox</h2>

      {/* 9. We add the onSubmit handler to the form */}
      <form className="mt-8 max-w-sm" onSubmit={handleSubmit}>
        {/* Input + Button */}
        <div className="flex items-center justify-between rounded-full bg-indigo-100 p-2">
          <Input
            type="email"
            name="email" // Added name prop for form submission
            placeholder="Email adders"
            className="h-12 flex-1 rounded-full border-0 bg-transparent px-4 text-lg placeholder:text-lg placeholder:text-gray-400 placeholder:opacity-70 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit" // Button is now type="submit"
            variant="ghost"
            className="h-12 w-12 shrink-0 rounded-full bg-white shadow-sm hover:bg-gray-50"
            // The "disabled" prop is removed
          >
            {/* Arrow Icon */}
          </Button>
        </div>

        {/* Checkbox */}
        <div className="mt-6 flex items-center space-x-2">
          <Checkbox
            id="terms"
            className="border-gray-50"
            // 10. Update state when the box is checked
            onCheckedChange={(checked) => setIsChecked(checked)}
          />
          <label htmlFor="terms" className="text-base font-medium text-white">
            I agree to the privacy statement
          </label>
        </div>

        {/* 11. Render the error message if it exists */}
        {error && (
          <p className="mt-4 text-sm font-medium text-red-600">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}