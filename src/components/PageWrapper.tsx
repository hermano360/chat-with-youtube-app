import { PropsWithChildren } from "react";

export function PageWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-10 lg:p-24">
      {children}
    </div>
  );
}
