import { DetailPageComponent } from '../components/detailpage/DetailPageComponent'
import detailStyle from '../styles/NewsStyles/DetailComponentStyle'
import { Link, useLocation } from 'react-router-dom'

// Renderiza los detalles de las propiedades cuando uno clickea 'Comprar' o 'Alquilar' en BuyPage o RentPage
export const DetailPage = () => {
  const location = useLocation();
  const info = location.state;
  return (
    <div>
      <Link to="/buy" className={detailStyle.backLink}>&lt; Volver</Link>
      <DetailPageComponent data={info} />
    </div>
  )
}
