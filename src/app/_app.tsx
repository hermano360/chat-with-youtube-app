import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
// import ReactGA from 'react-ga4';

// const TRACKING_ID = 'YOUR_GA_TRACKING_ID';

// ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log("Bougie");
    const handleRouteChange = (url: string) => {
      console.log(url);
      //   ReactGA.send({ hitType: 'pageview', page: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
