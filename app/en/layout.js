// app/layout.js
import BASE_PATH from "@/common/basePath";

export const metadata = {
  metadataBase: new URL("https://www.rohalmokawlah.com"),
  title: {
    default: "Roh Almokawlah",
    template: "%s | Roh Almokawlah",
  },
  description: "Turnkey contracting services in Saudi Arabia.",
  openGraph: {
    siteName: "Roh Almokawlah",
    title: "Roh Almokawlah",
    description: "Turnkey contracting services in Saudi Arabia.",
    url: "https://www.rohalmokawlah.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <base href={`${BASE_PATH}/`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
