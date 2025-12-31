import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        
        <link rel="stylesheet" href="/common/assets/css/lib/bootstrap.min.css" />
        <link rel="stylesheet" href="/common/assets/css/lib/all.min.css" />
        <link rel="stylesheet" href="/common/assets/css/lib/line-awesome.css" />
        <link rel="stylesheet" href="/common/assets/css/lib/themify-icons.css" />
        <link rel="stylesheet" href="/common/assets/css/lib/animate.css" />
        <link rel="stylesheet" href="/common/assets/css/lib/jquery.fancybox.css" />
        <link rel="stylesheet" href="/common/assets/css/lib/lity.css" />
        <link rel="stylesheet" href="/common/assets/css/lib/swiper8.min.css" />
        <link rel="stylesheet" href="/common/assets/css/common_style.css" />
        <link rel="stylesheet" href="/home1/assets/css/home_1_style.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
