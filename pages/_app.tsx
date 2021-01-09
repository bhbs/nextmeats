import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import "../public/css/style.scss";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const gaId = gtag.getGaId(router.locale);

  useEffect(() => {
    if (!gaId) return;

    const handleRouteChange = (path: string) => {
      gtag.pageview(gaId, path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default MyApp;
