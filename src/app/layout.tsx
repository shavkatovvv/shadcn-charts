import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Stylish App",
    description: "A beautifully designed Next.js app layout",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
            >
                <div className="min-h-screen flex flex-col">
                    <header className="bg-blue-600 text-white py-4 shadow-md">
                        <div className="container mx-auto px-4">
                            <h1 className="text-2xl font-bold">Header</h1>
                        </div>
                    </header>
                    <main className="flex-grow container mx-auto px-4 py-6">
                        {children}
                    </main>
                    <footer className="bg-gray-800 text-white py-4">
                        <div className="container mx-auto px-4 text-center">
                            <p>Footer</p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
