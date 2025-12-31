export default function ArLayout({ children }) {
    return (
      <>
        <link rel="stylesheet" href="/common/assets/css/lib/bootstrap.rtl.min.css" />
        <div dir="rtl" lang="ar">{children}</div>
      </>
    );
  }
  