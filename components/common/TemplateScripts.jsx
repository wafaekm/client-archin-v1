"use client";

import { useEffect } from "react";
import BASE_PATH from "@/common/basePath";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

export default function TemplateScripts() {
  useEffect(() => {
    (async () => {
      try {
        await loadScript(`${BASE_PATH}/common/assets/js/gsap.min.js`);
        // await loadScript(`${BASE_PATH}/common/assets/js/ScrollTrigger.min.js`);
        // await loadScript(`${BASE_PATH}/common/assets/js/ScrollSmoother.min.js`);

        await loadScript(`${BASE_PATH}/common/assets/js/TweenMax.min.js`);
        await loadScript(`${BASE_PATH}/common/assets/js/charming.min.js`);
        await loadScript(`${BASE_PATH}/common/assets/js/splitting.min.js`);
        await loadScript(`${BASE_PATH}/common/assets/js/isotope.pkgd.min.js`);
        await loadScript(`${BASE_PATH}/common/assets/js/plugins.js`);

        // await loadScript(`${BASE_PATH}/common/assets/js/smoother-script.js`);
        await loadScript(`${BASE_PATH}/common/assets/js/scripts.js`);
      } catch (e) {
        console.error("Failed loading template scripts:", e);
      }
    })();
  }, []);

  return null;
}
