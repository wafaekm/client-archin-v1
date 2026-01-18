import Script from "next/script";
import BASE_PATH from "@/common/basePath";

import BodyClass from "@/components/common/BodyClass";
import Loader from "@/components/common/Loader";
import Footer from "@/components/innerpage/Footer";
import Navbar2 from "@/components/innerpage/Navbar2";

import Project from "@/components/innerpage/single_project/Project";
import Commitments from "@/components/innerpage/single_project/Commitments";
import RelatedProjects from "@/components/innerpage/single_project/RelatedProjects";
import Chat from "@/components/innerpage/single_project/Chat";

import projects from "@/data/home1/projects/projects1.json";

export function generateStaticParams() {
  return (Array.isArray(projects) ? projects : []).map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }) {
  const list = Array.isArray(projects) ? projects : [];
  const project = list.find((p) => p.slug === params.slug);

  if (!project) {
    return <div style={{ padding: 40 }}>المشروع غير موجود</div>;
  }

  return (
    <>
      {/* CSS (important pour GitHub Pages + sous-routes) */}
      <link rel="icon" href={`${BASE_PATH}/home_preview/assets/img/logo.png`} />
      <link rel="shortcut icon" href={`${BASE_PATH}/home_preview/assets/img/logo.png`} />

      <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/bootstrap.min.css`} />
      <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/all.min.css`} />
      <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/line-awesome.css`} />
      <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/themify-icons.css`} />
      <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/animate.css`} />
      <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/jquery.fancybox.css`} />
      <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/lity.css`} />
      <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/lib/swiper8.min.css`} />
      <link rel="stylesheet" href={`${BASE_PATH}/common/assets/css/common_style.css`} />
      <link rel="stylesheet" href={`${BASE_PATH}/innerpages/assets/css/innerpages.css`} />

      {/* Fonts externes: surtout PAS de BASE_PATH */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
      />

      <BodyClass className="inner-pages-style1 s-project-pg-style1" />
      <Loader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
         <Navbar2 lang="ar" />

          <main dir="rtl">
            <Project project={project} lang="ar" />
            <Commitments lang="ar" />
            <RelatedProjects lang="ar" currentSlug={project.slug} />
            <Chat lang="ar" />
          </main>

          <Footer lang="ar" />
        </div>
      </div>

      {/* Scripts: toujours BASE_PATH */}
      <Script src={`${BASE_PATH}/common/assets/js/plugins.js`} strategy="beforeInteractive" />
      <Script src={`${BASE_PATH}/common/assets/js/TweenMax.min.js`} strategy="beforeInteractive" />
      <Script src={`${BASE_PATH}/common/assets/js/charming.min.js`} strategy="beforeInteractive" />
      <Script src={`${BASE_PATH}/common/assets/js/countdown.js`} strategy="beforeInteractive" />
      <Script src={`${BASE_PATH}/common/assets/js/gsap.min.js`} strategy="beforeInteractive" />
      <Script src={`${BASE_PATH}/common/assets/js/splitting.min.js`} strategy="beforeInteractive" />
      <Script src={`${BASE_PATH}/common/assets/js/mixitup.min.js`} strategy="beforeInteractive" />
      <Script src={`${BASE_PATH}/common/assets/js/scripts.js`} />
    </>
  );
}
