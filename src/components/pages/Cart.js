import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction, romoveItemAction } from '../../Redux/actions'

export const Cart = () => {
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    console.log("🚀 ~ file: Cart.js:6 ~ Cart ~ selector", selector.cart
    )

    const totalCartAmount = selector.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    const TotalPrice = (itemprice, qnt) => {
        return (itemprice * qnt).toFixed(2)
    }

    const incrementQuantity = (curQue) => {
        console.log("🚀 ~ file: Cart.js:20 ~ incrementQuantity ~ curQue", curQue)

        dispatch(incrementAction(curQue))

    }
    const decrementQuantity = (curQue) => {
        dispatch(decrementAction(curQue))
    }
    const removeItemHandler = (id) => {
        console.log("🚀 ~ file: Cart.js:20 ~ incrementQuantity ~ id", id)
        dispatch(romoveItemAction(id))
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
                                        >X</i></td>
                                        <td>{item.productName}</td>
                                        <td><img src={item.image} style={{ width: '100px', height: '80px' }} /></td>
                                        <td>{item.price} $</td>
                                        <td>
                                            <Button className="mr-2 "
                                                onClick={() => incrementQuantity(item)}
                                            >+</Button>
                                            (x{item.quantity})
                                            <Button
                                                onClick={() => decrementQuantity(item)}

                                            >-</Button>
                                            $</td>

                                        <td>
                                            {TotalPrice(item.price, item.quantity)}
                                            $</td>
                                        <td> <Button className="bg-danger" onClick={() => removeItemHandler(item.id)}>X</Button></td>
                                    </tr>
                                )
                            })

                        }
                        <tr>
                            <td colSpan="5">Total Carts</td>
                            <td>
                                {totalCartAmount.toFixed(2)} $
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div> : <p>No Items found !!</p>
            }
        </div >
    )
}
