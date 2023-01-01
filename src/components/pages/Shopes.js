import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { data } from '../../Data'
import { shopAction } from '../../Redux/actions'
import { FilteredButton } from '../Custom/FilteredButton'
import { ShopCard } from '../Custom/ShopCard'
import { Header } from '../Header'

export const Shopes = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(shopAction(data))
    }, [dispatch])
    return (
        <div>
            <Header url="https://previews.123rf.com/images/ginasanders/ginasanders1010/ginasanders101000882/8007505-young-woman-with-shopping-cart-in-the-supermarket-when-shopping-.jpg" />
            <FilteredButton />
            <ShopCard />
        </div>
    )
}
