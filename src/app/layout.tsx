import React, {ReactNode} from "react";
import "@/styles/tailwind.css"; 
import "../styles/index.css";
import "../styles/font.css"

function RootLayout ({children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#000000"/>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <link rel="manifest" href="/manifest.json"/>
        <link rel="icon" href="/favicon.ico?v=2"/>   
      </head>
      <body>{children}</body>
    </html>
  );
}
export default RootLayout;