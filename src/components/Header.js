import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import styles from './assets/css/mainComponents/Header.module.css';

export const Header = (url) => {
    console.log("🚀 ~ file: Header.js:7 ~ Header ~ url", url)
    return (
        <div class="header">
            {/* <img src="./assets/dmart.jpg" alt="Snow"
                // style={{ width: "100%" }}
            /> */}
            <article
                className={styles.article}
                style={{
                    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661770117401-f1016da77457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`
                    // backgroundImage: url({ url })
                    // backgroundImage: `url('https://media.gettyimages.com/id/1255253039/photo/rear-view-of-young-asian-mother-groceries-shopping-for-baby-products-in-a-supermarket-she-is.jpg?s=2048x2048&w=gi&k=20&c=xgXiVfwW0BFl4A71i2YiCaXE045tyMGi--8sv3TWIws=')`
                }}
            >
                <h5
                    className={styles.header}
                >Shop from your favourite
                    <br />
                    <span className={styles.header2}> Grocery Store</span>
                    <div
                        // className='w-5 ml-25 px-10 center d-flex justify-content-center'
                        className={styles.search}
                    >
                        <Form.Control type="password" placeholder="Password" className={styles['search-input']} />
                        <Button size="lg" variant="success" className={styles['search-btn']}     >Search</Button>
                    </div>
                </h5>

            </article>
        </div>
    )
}
