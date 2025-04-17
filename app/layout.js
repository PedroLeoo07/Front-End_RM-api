import "./globals.css";

export const metadata = {
    title: "API Rick and Morty",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="icon" href="./morty.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}