import data from '../../data/dataMarketingPlan'
import appStyles from '../../styles/appStyles';
import { LinkComponent } from '../navigation/LinkComponent';

export const MarketingPlanComponent = () => {
    const info = data;
    const list = data.list;
  return (
    <div className='flex max-lg:flex-col gap-8 justify-around items-center bg-white border-2 border-[#2D2964] rounded-2xl p-8 '>
        <div className='flex flex-col gap-6'>
            <h3 className={appStyles.title} >{info.title}</h3>
            <p className='min-lg:text-xl' >{info.text}</p>
            <ul className='min-lg:text-xl' >
                {
                    list.map((item, idx) => (
                        <li className='list-disc ml-5 ' key={idx}>{item}</li>
                    ))
                }
            </ul>
            <p>{info.close}</p>
        </div>
        <div>
            <LinkComponent src='/contact' desc='¡Contáctanos!' />
        </div>   
    </div>
  )
}
