import dataSell from '../data/dataSell'
import dataServices from '../data/dataServices'
import { SellCardComponent } from '../components/sellpage/SellCardComponent'
import { ServicesComponent } from '../components/buysellservices/ServicesComponent'
import { MarketingPlanComponent } from '../components/sellpage/MarketingPlanComponent'
import appStyles from '../styles/appStyles'

export const SellPage = () => {
  const data = dataServices.sell
  return (
    <div className={appStyles.div}>
      <ServicesComponent
        title={data.title}
        text={data.text}
        satisfy={data.satisfy}
      />
      <div className='flex max-md:flex-col justify-around gap-5 items-center mb-15'>
        {
          dataSell.map(data => (
            <div className='max-w-72' key={data.id}>
              <SellCardComponent info={data} />
            </div>
          ))
        }
      </div>
      <MarketingPlanComponent />
    </div>
  )
}
