import React from "react";
import Image from 'next/image'
import ConnectButton from "./commons/Button/ConnectButton";
import Discord from "./commons/Icons/Discord";
import Twitter from "./commons/Icons/Twitter";
import config from "../config/index.json"

export const HeaderNav = () => {
  const {twitterUrl, discordUrl} = config.socialMediaLinks
  return (
    <>
      <div className="text-blue-100 bg-black ">
        <div className="flex items-center justify-between max-w-5xl p-3 pt-8 mx-auto">
          <div>
          <Image
      src="/logo.png"
      alt="app logo"
      width={50}
      height={50}
    />            

          </div>
          <div>
            <div className="flex items-center">
              <div className="flex">
                <Discord url={discordUrl} className="mr-8" />
                <Twitter url={twitterUrl} className="mr-8" />
              </div>
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
