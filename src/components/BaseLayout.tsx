import React from "react";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col px-8 md:px-32 xl:px-96">
      {children}
    </div>
  );
}
