import { Navigator } from "./app/components/Navigator/Navigator";
import { Footer } from "./app/components/Sections/Footer";

import Landing from "./app/pages/Landing";

export default function App() {
  return (
    <div className="app-container">
      <Navigator />
      <Landing />
      <Footer />
    </div>
  )
}
