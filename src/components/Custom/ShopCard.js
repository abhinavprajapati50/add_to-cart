import React from 'react';
// import style from '../Custom/Card.module.css'
import { Button, Card, Container, Row, Stack } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from '../../components/assets/css/CustomCss/Card.module.css';
// import '../../components/assets/css/CustomCss/Card.module.css';

export const ShopCard = () => {
    const shopSelector = useSelector(state => state)
    const navgate = useNavigate()
    const showTheSubCategory = (id) => {
        navgate(`/subcategory/${id}`)
    }

    return (
        // <CardGroup>
        <>
            <h3 className="text-success" > {shopSelector?.products
                .length} Shops found</h3>
            <Container fluid className="App py-4 overflow-hidden">
                <Row className={`${style['card-example']} d-flex flex-row flex-nowrap overflow-auto`} gap={3}>
                    {shopSelector?.products
                        .map(cur => <Stack gap={2} className="col-md-5 mx-auto" key={cur.id}>
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
                                    <Button className={`${style["view-btn"]} btn-lg btn-font-size-sm`} onClick={() => showTheSubCategory(cur.id)} >View {cur.category.length} Items</Button>
                                </span>
                            </Card>
                        </Stack>)}
                </Row>
            </Container>
        </>

    )
}
