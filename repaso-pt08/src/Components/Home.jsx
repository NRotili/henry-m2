import React from 'react';
import ApiProducts from './ApiProducts';
import LocalProduct from './LocalProduct';

function Home({ name, location }) {
    return (
        <div>
            <h2>Este es el nuevo {name} de {location}</h2>
            <LocalProduct />
            <ApiProducts />
        </div>
    )
}

export default Home