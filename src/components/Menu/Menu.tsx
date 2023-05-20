import * as React from 'react';
import { ReactNode } from "react"
import './styles.css';

// type pizzaProps = {
//     pizza: string[];
// }

const Menu = (props: any) => {
    return (
        <section className='pizza-section'>
                {props.children}
        </section>
    )
}

export default Menu;