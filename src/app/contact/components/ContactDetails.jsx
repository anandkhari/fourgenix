import React from "react";

export default function ContactDetails() {
  return (
    
    <div>
     
      <div className="rounded-3xl  bg-[#E9E8FD] p-8 md:p-10">
        <h3 className="text-4xl font-worksans  text-gray-900">
          Let's Talk
        </h3>
        <h2 className="mt-2 font-worksans text-gray-900">
          We're Here to Help
        </h2>
        <p className="mt-4 text-base font-poppins text-gray-700">
          We'd love to hear from you. Whether you need expert tax
          advice, want to discuss your expat situation, or simply have
          a question, the Fourgenix team is ready to assist.
        </p>
      </div>

      
      <div className="mt-12 ml-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        
        {/* --- Address (Row 1, Col 1) --- */}
        <div>
          {/* Font size is reduced from text-xl to text-lg to match the image */}
          <h3 className="text-lg font-worksans font-semibold text-gray-900">
            Address
          </h3>
          <p className="mt-2 text-base font-poppins text-gray-700">
            Fourgenix Partners LLC 7901
            <br />
            4TH ST N STE 300 St.
            <br />
            Petersburg, Florida, USA
          </p>
        </div>

        {/* --- Email (Row 1, Col 2) --- */}
        <div>
          <h3 className="text-lg font-worksans font-semibold text-gray-900">
            Email
          </h3>
          <a
            href="mailto:info@fourgenixpartners.com"
            // Added `block` and `mt-2` for better alignment
            className="mt-2 block text-base font-poppins text-gray-700 hover:text-gray-900 hover:underline"
          >
            info@fourgenixpartners.com
          </a>
        </div>

        {/* --- Global (Row 2, Col 1) --- */}
        <div>
          <h3 className="text-lg font-worksans font-semibold text-gray-900">
            Global
          </h3>
          <p className="mt-2 text-base font-poppins text-gray-700">
            Serving clients across the
            U.S, Canada, UK, Germany,
            and UAE.
          </p>
        </div>

        {/* --- Phone (Row 2, Col 2) --- */}
        <div>
          <h3 className="text-lg font-worksans font-semibold text-gray-900">
            Phone
          </h3>
          <a
            href="tel:+1XXXXXXXXXX"
            className="mt-2 block text-base font-poppins text-gray-700 hover:text-gray-900 hover:underline"
          >
            +1 (XXX) XXX-XXXX
          </a>
          <p className="mt-1 text-base font-poppins text-gray-500">
            (Mon-Fri, 9 AM to 6 PM EST)
          </p>
        </div>

      </div>
    </div>
  );
}