import React from 'react';
import shortid from 'shortid';
import Card, { CardInterface } from '../components/FrontPage/Cards/Card/Card';

const createCards = (products:{[key:string] : any}) => {
    return Object.keys(products).map(current => {
        const game:CardInterface = products[current];
        return (<>
            <Card 
                key ={shortid()}
                title={game.title}
                body={game.body}
                image={game.image}
                price={game.price}
                link={"/products/title="+game.title}
                consoles={game.consoles} />

                </>)
            })}

export default createCards;        
