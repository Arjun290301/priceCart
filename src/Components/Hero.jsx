import React, { useState, useContext } from 'react';
// import products from "./Data"; commented the import data to use Context API
import { UserContext } from './Data';
const Hero = () => {

    let { products } = useContext(UserContext)
    console.log(products)
    let [rate1, setRate1] = useState(549);
    let [rate2, setRate2] = useState(899);
    let [rate3, setRate3] = useState(1249);
    let [rate4, setRate4] = useState(280);
    let [rate5, setRate5] = useState(449);
    let [quantities, setQuantities] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    });

    let multiplay = (id, value) => {
        setQuantities((prevQuantities) => ({ ...prevQuantities, [id]: value }));
    };

    let prices = {
        1: rate1,
        2: rate2,
        3: rate3,
        4: rate4,
        5: rate5,
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        Object.keys(prices).forEach((id) => {
            if (quantities[id] > 0) {
                totalPrice += prices[id] * quantities[id];
            }
        });
        return totalPrice;
    };

    return (
        <div className='row'>
            {products.map((item, index) => {
                return (
                    <div className='Hero' key={index}>
                        <div className='part-1'><div className='image'>
                            <img src={item.thumbnail} style={{ width: 200, height: 200, margin: 20 }} />
                        </div>

                            <div className='text'>
                                <div className='title'>
                                    Model: {item.title}
                                </div>
                                <div className='about'>
                                    Brand: {item.brand}
                                </div>
                            </div></div>
                        <div className='part-2'>
                            <table className='table-1'>
                                <tr>
                                    <td>
                                        <div className='quantity'>
                                            <form action="/action">
                                                <label for="quantity">Quantity (between 1 and 5):</label>
                                                <input
                                                    type="number"
                                                    id="quantity"
                                                    name="quantity"
                                                    min="0"
                                                    max="5"
                                                    onChange={(e) => multiplay(item.id, parseInt(e.target.value))}
                                                />
                                            </form>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='price'>
                                            $ {item.price}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div className='table-2'>
                                <table className='table3'>
                                    <tr>
                                        <td className='ta'>
                                            Subtotal rate: {quantities[item.id] > 0 ? prices[item.id] * quantities[item.id] : 0}
                                        </td>
                                    </tr>
                                </table>
                            </div></div>


                    </div>
                );
            })}

            <h1 className='total'>Total: {calculateTotalPrice()}</h1>


        </div>
    );
};

export default Hero;