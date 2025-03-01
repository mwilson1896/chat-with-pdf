import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";

function Dashboardlayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkLoaded>
      <div className="flex-1 flex flex-col h-screen">
        <Header />

        <main>{children}</main>
      </div>
    </ClerkLoaded>

  );
}

export default Dashboardlayout