import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/ui/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jira Clone",
  description: "",
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: shadesOfPurple,
      variables: {
        colorPrimary: "#3b82f6",
        colorBackground: "#1a202c",
        colorInputBackground: "#2d3748",
        colorInputText: "#F3F4F6"
      },
      elements: {
        formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
        card: "bg-gray-800",
        headerTitle: "text-blue-400",
        headerSubtitle: "text-gray-400",
      },
    }}>

      <html lang="en" className="dark" style={{ colorScheme: "dark" }} >
        <body
          className={`${inter.className} dotted-background `}
        >
          <ThemeProvider attribute='class' defaultTheme='dark'>

            <Header />
            <main className='min-h-screen'>
              {children}
            </main>
            <Toaster richColors />
            <footer className='bg-gray-900 py-12'>
              <div className="container mx-auto px-4 text-center">
                <p>made with love &hearts;</p>
              </div>
            </footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
