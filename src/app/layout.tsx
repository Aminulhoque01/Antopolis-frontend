import { Metadata } from "next";
 
import "./globals.css";
import Providers from "@/lib/Provider";
 
 
import { ConfigProvider } from "antd";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: " Antopolis",
  description: "Find the perfect job opportunity that matches your skills and experience. Browse job listings, apply with ease, and take the next step in your career.",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#004BAD",
              
      
            },
          }}
        >
          <Providers>
            <Toaster  position="top-center" />

            {children}
             
          </Providers>
        </ConfigProvider>
      </body>
    </html>
  );
}
