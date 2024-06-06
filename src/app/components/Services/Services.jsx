import s from './Services.module.css';
import { ServiceCard } from './ServiceCard';
import service1 from '../../../assets/images/webp/1.webp';
import service2 from '../../../assets/images/webp/2.webp';
import service3 from '../../../assets/images/webp/3.webp';

export const Services = () => {
  return (
    <div className={s.container}>
      <h2>Servicios</h2>
      <ul className={s.cardsContainer}>
        <ServiceCard
          image={service1}
          title={"Consultoría Legal Terreno"}
          description={"Ofrecemos asesoramiento integral en temas legales para tu regularizar tu terreno, garantizando el cumplimiento de las normativas vigentes."}
        />
        <ServiceCard
          image={service2}
          title={"Asesoría en Contratos"}
          description={"Te ayudamos en la redacción y revisión de contratos de compraventa y otros documentos legales relevantes para tu propiedad."}
        />
        <ServiceCard
          image={service3}
          title={"Resolución de Conflictos"}
          description={"Apoyamos en la mediación y resolución de disputas legales, buscando siempre la mejor solución para ti."}
        />
      </ul>
    </div>
  )
}
