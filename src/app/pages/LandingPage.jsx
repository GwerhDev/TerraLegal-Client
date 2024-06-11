import { Header } from "../components/Sections/Header";
import { Content } from "../components/Content/Content";
import { Services } from "../components/Services/Services";
import { Presentation } from "../components/Presentation/Presentation";

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
          <Content />
          <Services />
        </section>
      </main>
    </div>
  )
}