import { Header } from "../components/Sections/Header";
import { Services } from "../components/Services/Services";
import { Presentation } from "../components/Presentation/Presentation";
import { LastContent } from "../components/Content/LastContent";

export default function LandingPage() {
  return (
    <div className="page-container">
      <div className="header-container">
        <Header />
      </div>
      <main>
        <section className="presentation-section">
          <Presentation />
        </section>
        <section className="services-section">
          <LastContent />
          <Services />
        </section>
      </main>
    </div>
  )
}