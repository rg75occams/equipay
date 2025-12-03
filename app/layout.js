import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
});

export const metadata = {
    title: "EquiPay – Power-Up Your Payments",
    icons: {
        icon: "/assets/favicon.webp",
    },
    openGraph: {
        image: "/assets/favicon.webp",
        type: "website",
        locale: "en_US",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${raleway.variable} antialiased`}>
            <body>
                {children}
            </body>
        </html>
    );
}