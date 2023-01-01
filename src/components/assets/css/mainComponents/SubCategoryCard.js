import React from 'react'
import { Button, Card, Container, Row, Stack } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCartAction } from '../../../../Redux/actions'
import { Header } from '../../../Header'
import style from '../CustomCss/Card.module.css'
export const SubCategoryCard = () => {
    const dispatch = useDispatch()
    const shopSelector = useSelector(state => state)
    // console.log("🚀 ~ file: Card.js:14 ~ Cards ~ shopSelector", shopSelector?.payload)
    const { id } = useParams()
    const a = shopSelector?.products.filter(cur => {
        return cur.id === parseInt(id) && cur
    })
    const subCategory = a[0].category
    // console.log("🚀 ~ file: SubCategoryCard.js:15 ~ subCategory", subCategory)
    // console.log("🚀 ~ file: SubCategoryCard.js:10 ~ SubCategoryCard ~ id", id)
    const addtoCartHandler = (items) => {
        dispatch(addToCartAction(items))
    }
    return (
        <div>
            <Header />
            <Container fluid className="App py-4 overflow-hidden">
                <Row className={`${style['card-example']} d-flex flex-row flex-nowrap overflow-auto`} gap={3}>

                    {subCategory.length > 0 ? subCategory.map(cur => cur.items.map(cur =>
                        <Stack gap={2} className="col-md-5 mx-auto" key={cur.id}>
                            <Card className={style.card} >
                                <Card.Body className={style['card-body']} style={{ padding: '0px ' }}>
                                    <Card.Img variant="top" src={cur.image} className={style['card-image']} />
                                    <Card.Title>{cur.shopName}</Card.Title>
                                    <Card.Text>
                                        {cur.location}
                                    </Card.Text>
                                    <Card.Title>
                                        <span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                        </span>
                                        <small className="text-mutedff">{cur.review} reviews</small>
                                    </Card.Title>

                                </Card.Body>
                                <span className='mb-2 ' >
                                    <Button className={`${style["view-btn"]} btn-lg btn-font-size-sm`}
                                        onClick={() => addtoCartHandler(cur)}
                                    >Add to cart</Button>
                                </span>
                            </Card>
                        </Stack>
                    )
                    ) : <p>No Shop found !!</p>}

                </Row>
            </Container>
        </div>
    )
}
