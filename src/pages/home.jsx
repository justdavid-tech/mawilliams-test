import Hero from "../components/hero"
import MarqueeFile from "../components/marqueeFile"
import FiveFunctions from "../components/fivefunction"
import QuoteSection from "../components/quote"
import CapabilityStrip from "../components/capabilitystrip"
import InstituteHighlight from "../components/institutehighlight"
import InsightsPreview from "../components/insightspreview"



export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeFile />
      <FiveFunctions />
      <QuoteSection />
      <CapabilityStrip />
      <InstituteHighlight />
      <InsightsPreview />
    </>
  )
}