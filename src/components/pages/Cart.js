import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Cart = () => {
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    console.log("🚀 ~ file: Cart.js:6 ~ Cart ~ selector", selector.cart
    )

    const totalCartAmount = selector.cart.reduce((acc, cur) => acc + cur.price * cur.quantity

        // * cur.quantity + cur.price * cur.quantity
        , 0)
    console.log("🚀 ~ file: Cart.js:10 ~ Cart ~ totalCartAmount ", totalCartAmount)
    const TotalPrice = (itemprice, qnt) => {
        return (itemprice * qnt).toFixed(2)
    }
    return (
        <div className="row">
            {selector.cart.length > 0 ? < div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selector.cart.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td><i className="badge badge-danger"
                                        // onClick={() => DeleteCart(key)}
                                        >X</i></td>
                                        <td>{item.productName}</td>
                                        <td><img src={item.image} style={{ width: '100px', height: '80px' }} /></td>
                                        <td>{item.price} $</td>

                                        <td>
                                            {TotalPrice(item.price, item.quantity)}
                                            $</td>
                                    </tr>
                                )
                            })

                        }
                        <tr>
                            <td colSpan="5">Total Carts</td>
                            <td>
                                {/* {Number(TotalCart).toLocaleString('en-US')} */}
                                {totalCartAmount.toFixed(2)} $</td>
                        </tr>
                    </tbody>

                </table>
            </div> : <p>No Items found !!</p>
            }
        </div >
    )
}
