import React from "react";
// import ShopCard from "../../components/ShopCard"
import ProductCard from "../../components/ProductCard"

import {Col3, Container} from "../../GlobalStyle"

const Home = ()=>{
    return(
        <div>
            <Container>
                <Col3>
                    <ProductCard/>
                </Col3>
            </Container>

        </div>
    )
}

export default Home;