import BodyClass from "@/components/common/BodyClass";
import TemplateScripts from "@/components/common/TemplateScripts";

// ... tes imports Menu/Navbar/Header/etc

export default function Page() {
  return (
    <>
      <BodyClass className="home-style1" />
      {/* ton contenu RTL: Menu/Navbar/Header/... */}
      <TemplateScripts />
    </>
  );
}
