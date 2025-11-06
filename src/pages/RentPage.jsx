import { ServicesComponent } from '../components/buysellservices/ServicesComponent'
import { ListBuySellCardComponent } from '../components/buysellservices/ListBuySellCardComponent';
import data from '../data/dataServices'


export const RentPage = () => {
  const rentInfo = data.rent;
  const cards = rentInfo.cards;
  console.log(cards);
  return (
    <div>
      <ServicesComponent 
        title={rentInfo.title}
        text={rentInfo.text}
        satisfy={rentInfo.satisfy}
        list={ <ListBuySellCardComponent service={cards} /> }
      />
    </div>
  )
}
