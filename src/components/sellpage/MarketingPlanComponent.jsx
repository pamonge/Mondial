import React from 'react'
import data from '../../data/dataMarketingPlan'
import { LinkComponent } from '../navigation/LinkComponent';

export const MarketingPlanComponent = () => {
    const info = data;
    const list = data.list;
  return (
    <div>
        <div>
            <h3>{info.title}</h3>
            <p>{info.text}</p>
            <ul>
                {
                    list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))
                }
            </ul>
            <p>{info.close}</p>
        </div>
        <LinkComponent src='/contact' desc='¡Contáctanos!' />
    </div>
  )
}
