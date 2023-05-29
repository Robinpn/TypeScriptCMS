
import { ReactNode } from "react";
import './styles.css';

type pizzaList<T> = {
    items: T[],
    render: (item: T) => ReactNode,
}

const Pizza = <T,>({items, render}: pizzaList<T>) => {
    return (
        <>
        
        {items.map((item, i) => (
            <div className="pizza-container" key={i}>
                {render(item)}
            </div>
        ))}

        </>
    )
}

export default Pizza;