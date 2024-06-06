import { Presentation } from "../components/Presentation/Presentation";
import { Header } from "../components/Sections/Header";
import { Services } from "../components/Services/Services";

export default function Landing() {
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
          <Services />
        </section>
      </main>
    </div>
  )
}