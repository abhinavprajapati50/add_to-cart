import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { filteredShopAction } from '../../Redux/actions'

export const FilteredButton = () => {
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    const filterShopHandler = (id) => {
        // dispatch({ type: FILTERED_SHOP, action: id })
        dispatch(filteredShopAction(id))
    }

    return (
        <Container className="d-flex gap-2">
            {selector?.products.map(cur =>
                <div key={cur.id}>

                    < Button
                        variant="" size="lg" className="p-3 mt-2 shadow-lg" onClick={() => filterShopHandler(cur.id)} >
                        {cur.categoryType}
                    </Button>
                </div>
            )
            }
        </Container>
    )
}
