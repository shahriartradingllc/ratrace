export const metadata = {
  title: "Shahriyar Trading LLC",
  description: "A clean, responsive portfolio site with contact email.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/globals.css" rel="preload" as="style" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
