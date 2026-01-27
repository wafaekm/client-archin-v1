export const metadata = {
  title: "روح المقاولة",
  description: "روح المقاولة — شركة [النشاط] في [المدينة]. خدمات [X]، [Y]، [Z]. تواصل معنا للحصول على عرض سعر.",
  alternates: {
    canonical: "https://rohalmokawlah.com/home1-rtl/",
  },
 };

export default function ArLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
