import Script from 'next/script';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Loader from '@/components/common/Loader';
import Footer from '@/components/innerpage/Footer';
import Menu from '@/components/innerpage/Menu';
import Navbar2 from '@/components/innerpage/Navbar2';
import StartButton from '@/components/home5_residence/StartButton';
import Slider from '@/components/innerpage/single_post/Slider';
import Content from '@/components/innerpage/single_post/Content';
import Comments from '@/components/innerpage/single_post/Comments';

export const metadata = {
  title: 'archin',
  icons: {
    icon: '/home_preview/assets/img/fav.png',
    shortcut: '/home_preview/assets/img/fav.png',
    other: generateStylesheetObject([
      '/common/assets/css/lib/bootstrap.min.css',
      '/common/assets/css/lib/all.min.css',
      '/common/assets/css/lib/line-awesome.css',
      '/common/assets/css/lib/themify-icons.css',
      '/common/assets/css/lib/animate.css',
      '/common/assets/css/lib/jquery.fancybox.css',
      '/common/assets/css/lib/lity.css',
      '/common/assets/css/lib/swiper8.min.css',
      '/common/assets/css/common_style.css',
      '/innerpages/assets/css/innerpages.css',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
    ]),
  },
};
export default function Home() {
  return (
    <body className="inner-pages-style1 post-pg-style1">
      <Loader />
      <Menu />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar2 />
          <main>
            <Slider />
            <Content />
            <Comments />
            {/*
             */}
          </main>
          <Footer />
        </div>
      </div>
      <StartButton />
      <Script
        src="/common/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/common/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      {/* <Script
        src="/landing-preview/assets/js/parallax.min.js"
        strategy="beforeInteractive"
      /> */}
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/plugins.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/countdown.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/common/assets/js/mixitup.min.js"
      ></Script>
      {/* <Script
        strategy="beforeInteractive"
        src="/common/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script> */}
      <Script
        src="/common/assets/js/smoother-script.js"
        strategy="lazyOnload"
      />
      <Script src="/common/assets/js/scripts.js"></Script>
    </body>
  );
}
