import React from "react";
import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";

const Footer = () => {
  return (
    <div className="mt-10 border-t py-6">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="mt-2 max-w-md text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* Social and Currently At */}
        <div className="mt-6 flex flex-wrap justify-between gap-4">
          <div>
            <div className="text-lg font-medium">#exploretheworld</div>
            <div>Social Links</div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-md">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
