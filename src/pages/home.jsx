import { useState, useEffect } from "react"
import Hero from "../components/hero"
import MarqueeFile from "../components/marqueeFile"
import FiveFunctions from "../components/fivefunction"
import QuoteSection from "../components/quote"
import CapabilityStrip from "../components/capabilitystrip"
import InstituteHighlight from "../components/institutehighlight"
import YouTubeFeed from "../components/youtubefeed"
import InsightsPreview from "../components/insightspreview"
import Loader from "../components/loader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      <Hero />
      <MarqueeFile />
      <FiveFunctions />
      <QuoteSection />
      <CapabilityStrip />
      <InstituteHighlight />
      <YouTubeFeed />
      <InsightsPreview />
    </>
  )
}