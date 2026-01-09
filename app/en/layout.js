export const metadata = {
    title: "Rouh al Almokawala",
    icons: {
      icon: "/home_preview/assets/img/logo.png",
      shortcut: "/home_preview/assets/img/logo.png",
    },
  };
  
  export default function EnLayout({ children }) {
    return (
      <html lang="en" dir="ltr">
        <body>{children}</body>
      </html>
    );
  }
  