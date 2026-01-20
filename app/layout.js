import "./globals.css";
import BASE_PATH from "@/common/basePath";

export const metadata = {
  title: "روح المقاولة",
  icons: {
    icon: `${BASE_PATH}/home_preview/assets/img/favicon.png`,
    shortcut: `${BASE_PATH}/home_preview/assets/img/favicon.png`,
  },
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
        
        {/* IMPORTANT: base pour corriger les chemins relatifs sur GitHub Pages */}
        <base href={`${BASE_PATH}/`} />

        {/* CSS locaux (GitHub Pages) */}
        <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/bootstrap.min.css`} />
        <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/all.min.css`} />
        <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/line-awesome.css`} />
        <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/themify-icons.css`} />
        <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/animate.css`} />
        <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/jquery.fancybox.css`} />
        <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/lity.css`} />
        <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/swiper8.min.css`} />
        <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/common_style.css`} />
        <link rel="stylesheet" href={`${BASE_PATH}/home1/assets/css/home_1_style.css`} />

        {/* Fonts externes : PAS de BASE_PATH */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Roh Almokawlah",
              url: "https://www.rohalmokawlah.com",
              logo: "https://www.rohalmokawlah.com/home_preview/assets/img/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+966541319776",
                  contactType: "customer service",
                },
              ],
            }),
          }}
        />
      </head>

      <body>{children}</body>
      
    </html>
  );
}
