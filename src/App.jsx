import { Navigator } from "./app/components/Navigator/Navigator";
import { Footer } from "./app/components/Sections/Footer";
import { AppRouter } from "./app/router/AppRouter";

export default function App() {
  return (
    <div className="app-container">
      <Navigator />
      <AppRouter />
      <Footer />
    </div>
  )
}
