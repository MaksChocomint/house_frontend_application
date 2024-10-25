"use client";
import Script from "next/script";
import React from "react";

const ScriptComponent = () => {
  return (
    <Script
      id="booking"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w) {
            var q = [
              ['setContext', 'TL-INT-flat-point-ru_2024-10-18', 'ru'],
              ['embed', 'search-form', {
                  container: 'tl-search-form'
              }],
            ];
            var h=["ru-ibe.tlintegration.ru","ibe.tlintegration.ru","ibe.tlintegration.com"];
            var t = w.travelline = (w.travelline || {}),
            ti = t.integration = (t.integration || {});
            ti.__cq = ti.__cq? ti.__cq.concat(q) : q;
           if (!ti.__loader) {
              ti.__loader = true;
              var d=w.document,c=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0];
              function e(s,f) {return function() {w.TL||(c.removeChild(s),f())}}
              (function l(h) {
                  if (0===h.length) return; var s=d.createElement("script");
                  s.isReloadFuncSet = "set";s.type="text/javascript";s.async=!0;s.src="https://"+h[0]+"/integration/loader.js";
                  s.onerror=s.onload=e(s,function(){l(h.slice(1,h.length))});c.appendChild(s)
              })(h);
          }
        })(window);
        `,
      }}
    />
  );
};

export default ScriptComponent;
