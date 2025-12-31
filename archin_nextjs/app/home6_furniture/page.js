import Script from 'next/script';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Loader from '@/components/common/Loader';
import StartButton from '@/components/home5_residence/StartButton';
import Menu from '@/components/home6_furniture/Menu';
import Navbar from '@/components/home6_furniture/Navbar';
import Header from '@/components/home6_furniture/Header';
import About from '@/components/home6_furniture/About';
import Featured from '@/components/home6_furniture/Featured';
import ByStyle from '@/components/home6_furniture/ByStyle';
import Categories from '@/components/home6_furniture/Categories';
import Banners from '@/components/home6_furniture/Banners';
import Trade from '@/components/home6_furniture/Trade';
import Blog from '@/components/home6_furniture/Blog';
import Subscribe from '@/components/home6_furniture/Subscribe';
import Instagram from '@/components/home6_furniture/Instagram';
import Footer from '@/components/home6_furniture/Footer';

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
      '/home6_furniture/assets/css/home_6_style.css',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
    ]),
  },
};
export default function Home() {
  return (
    <body className="home-style6">
      <Loader />
      <Menu />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Header />
          <main>
            <About />
            <Featured />
            <ByStyle />
            <Categories />
            <Banners />
            <Trade />
            <Blog />
            <Subscribe />
            <Instagram />
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
        src="/common/assets/js/isotope.pkgd.min.js"
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
