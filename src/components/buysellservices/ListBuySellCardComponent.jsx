import { CardBuySellComponent } from "./CardBuySellComponent";
import servicesStyle from "../../styles/servicesComponentStyle";

export const ListBuySellCardComponent = ({ service }) => {
    return (
        <div className={servicesStyle.sectionContainer}>
            <div className={servicesStyle.gridContainer}>
                {
                    service.map((prop) => (
                        //  Se Renderiza la tarjeta 
                        <CardBuySellComponent 
                            key={prop.id} 
                            info={prop}  // se le pasa por parametro al elemento todos los datos dentro del arreglo cards
                            link='/detail'
                            desc='Comprar'
                        />
                    ))
                }
            </div>
        </div>
    );
}