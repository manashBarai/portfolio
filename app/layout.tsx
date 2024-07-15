import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingNavDemo } from "@/components/FloatNav";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manash Barai Portfolio",
  description: "Next.js developer with type script expert on java script project on node.js react.js express mongo , basically react js developer as well as next js developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
      
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
            <BackgroundBeams />
            <div className="flex justify-start">
            <FloatingNavDemo/> 
              </div> 
            {children}
            </ThemeProvider>
            
            </body>
    </html>
  );
}