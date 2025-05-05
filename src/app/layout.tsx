import type { Metadata } from "next";
import Navbar from "@/component/navbar";
import "./globals.css";
import "tailwindcss";
import Footer from "@/component/footer";

export const metadata: Metadata = {
    title: "Tire",
    description: "Pick your tire",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
        >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
        </html>
    );
}

