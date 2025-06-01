

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import WhatsAppsButton from "@/components/whatapps-button/WhatappsButton";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return(
  <div className="m-2 rounded-xl">
  <Navbar  />
  <main className="min-h-screen mt-6 p-2  ">{children}</main>
     <WhatsAppsButton phoneNumber="+8801916520032" message="Hello! I'm interested in LeadFlow's services." />
<Footer />
</div>
  )
};

export default CommonLayout;

