import React from "react";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="w-full flex flex-col gap-8">
      {children}
    </div>
  );
}
