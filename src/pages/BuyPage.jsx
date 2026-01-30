import { ServicesComponent } from '../components/buysellservices/ServicesComponent'
import { ListBuySellCardComponent } from '../components/buysellservices/ListBuySellCardComponent'
import data from '../data/dataServices'
import appStyles from '../styles/appStyles'

export const BuyPage = () => {
  const buyInfo = data.buy;
  const cards = buyInfo.cards;
  return (
    <div className={appStyles.div} >
      <ServicesComponent 
        title={buyInfo.title} 
        text={buyInfo.text} 
        satisfy={buyInfo.satisfy} 
        list={ <ListBuySellCardComponent service={cards} desc={buyInfo.verbous}/> } 
      />
    </div>
  )
}
