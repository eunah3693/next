import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tire",
    description: "Pick your tire",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
        >
        {children}
        </body>
        </html>
    );
}

