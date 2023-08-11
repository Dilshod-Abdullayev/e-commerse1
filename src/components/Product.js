import React from 'react'
import { Rate,Image } from 'antd';

import { products } from '../data/data';
export default function Product() {
    return (
        <div className='product'>
            <h1>Our Products</h1>
            <div className="product__boxs">
                {
                    products.map((item) => (
                        <div className="product__box">
                            <span className='product__box-span'>{item.type}</span>
                            <Image className='img' src={item.img} />
                            <h1>{item.name}</h1>
                            <hr />
                            <div>
                                <div className='bb'>
                                    <del>{item.del}</del>
                                    <h2>{item.sum}</h2>
                                </div>
                                <Rate className='rate' defaultValue={2} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
