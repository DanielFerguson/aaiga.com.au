import "../styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import { DefaultSeo } from "next-seo";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("NOVORBQG", {
      includedDomains: ["aaiga.com.au", "www.aaiga.com.au"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Aaiga"
        defaultTitle="Aaiga"
        openGraph={{
          type: "website",
          url: "https://aaiga.com.au/",
          site_name: "Aaiga",
        }}
        twitter={{
          handle: "@aaiga_au",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
