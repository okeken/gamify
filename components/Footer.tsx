import React from "react";
import Discord from "./commons/Icons/Discord";
import Envelope from "./commons/Icons/Envelope";
import Twitter from "./commons/Icons/Twitter";

export const Footer = () => {
  return (
    <div className="py-4 text-white bg-gray-900">
      <footer className="max-w-5xl mx-auto">
        <div className="">
          <div className="flex items-center justify-between p-3">
            <div>
              <div className="flex items-center">
                <Envelope className="mr-4" />
                Join the Mailing List
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex">
                  <Discord className="mr-4" />
                  <Twitter className="mr-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
