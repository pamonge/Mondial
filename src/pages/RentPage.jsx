import { ServicesComponent } from '../components/buysellservices/ServicesComponent'
import { ListBuySellCardComponent } from '../components/buysellservices/ListBuySellCardComponent';
import data from '../data/dataServices'
import appStyles from '../styles/appStyles';


export const RentPage = () => {
  const rentInfo = data.rent;
  const cards = rentInfo.cards;
  return (
    <div className={appStyles.div}>
      <ServicesComponent 
        title={rentInfo.title}
        text={rentInfo.text}
        satisfy={rentInfo.satisfy}
        list={ <ListBuySellCardComponent service={cards} desc={rentInfo.verbous} /> }
      />
    </div>
  )
}
