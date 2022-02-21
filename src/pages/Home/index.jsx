import React  from "react";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import ShopCard from "../../components/ShopCard"
import ProductCard from "../../components/ProductCard"  
import SmoleCard from "../../components/SmoleCard";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import {Ul} from "../../components/Navbar/style";
import {Col3, Col4, Container, Div, H1, LinkA} from "../../GlobalStyle"
import {HomeStyle, Advert} from "./style"
import { useSelector  } from "react-redux";
const Home = ()=>{
      
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint:1920,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint:1320,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint:890,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:600,
        settings: {
          slidesToShow: 1,
        },
        state: {
          display: true,
          width: 100
        }
      }

    ]
  };

    const state = useSelector ((state)=>state.home)
    return(
        <HomeStyle>
          <Container  pd = "50px">
           
            {
              state.shopCard.slice(-3).map(( value )=>{
                return(
                  <Col4  className="124" key = {value.id}>
                    <ShopCard data={value} />
                  </Col4>
                )
              })
            }
            
            
          </Container>
          <Container justify = "space-between" mr = "15px  0 30px 0"   align>
            <H1 mr = "auto 15px">
              New Products
            </H1>
            <Div w = "auto">
            <Ul className="ulCard">
              <Ul.Li>
                <LinkA className = "activeNav"  color = "var(--cl-grey-p)" bold>
                  Laptops
                </LinkA>
              </Ul.Li>
              <Ul.Li>
                <LinkA className = {({isActive})=>isActive? "activeNav" : "navlink"}  color = "var(--cl-grey-p)" bold>
                  Smartphones
                </LinkA>
              </Ul.Li>
              <Ul.Li>
                <LinkA className = {({isActive})=>isActive? "activeNav" : "navlink"}  color = "var(--cl-grey-p)" bold>
                  Cameras
                </LinkA>
              </Ul.Li>
              <Ul.Li>
                <LinkA className = {({isActive})=>isActive? "activeNav" : "navlink"}  color = "var(--cl-grey-p)" bold>
                  Accessories
                </LinkA>
              </Ul.Li>
            </Ul>
            </Div>

          </Container>
          <Container display = "block" pd = " 0 5% 40px ">
            <Slider {...settings}>
             {
               state.productCard.slice(-6).map((value)=>{
                 return(
                   <Col3 pd = " 0  var(--mp15) 60px var(--mp15)" key = {value.id}>
                      <ProductCard data = {value}>
                      </ProductCard>
                   </Col3>
                 )
               })
             }
             </Slider>
          </Container>
          <Advert>
            <Container pd = "50px 5% 0" mr = "30px 0 0 0" >
              <Div w = "50%" display = "flex" justify = "right" >
                <Advert.Round>
                 <H1 color = "var(--cl-white)" size = "var(--size24)">20</H1>
                 <H1 color = "var(--cl-white)" size = "var(--size10)" >Days</H1> 
                </Advert.Round>
                
                <Advert.Round>
                 <H1 color = "var(--cl-white)" size = "var(--size24)">30</H1>
                 <H1 color = "var(--cl-white)" size = "var(--size10)" >Kays</H1> 
                </Advert.Round>
              </Div>
              <Div w = "50%" display = "flex" >
                <Advert.Round>
                 <H1 color = "var(--cl-white)" size = "var(--size24)">34</H1>
                 <H1 color = "var(--cl-white)" size = "var(--size10)" >Mins</H1> 
                </Advert.Round>
                <Advert.Round>
                 <H1 color = "var(--cl-white)" size = "var(--size24)">44</H1>
                 <H1 color = "var(--cl-white)" size = "var(--size10)" >Days</H1> 
                </Advert.Round>
              </Div>
            </Container>
            <Container pd = "0px 5% 50px"  align = "center" flex>
              <H1 bold mr = " 30px 0 15px 0" color = "var(--cl-navlink)" size = "var(--size30)">
              hot deal this week
              </H1>
              <H1 mr = "0 0 15px 0" color = "var(--cl-dark-p)" size = "var(--size24)">
              New Collection Up to 50% OFF
              </H1>
              <Advert.Button>
                SHOP NOW
              </Advert.Button>

            </Container>
          </Advert>
          <Container justify = "space-between" mr = "15px  0 30px 0"   align>
            <H1 mr = "auto 15px">
              Top Selling
            </H1>
            <Div w = "auto">
            <Ul className="ulCard">
              <Ul.Li>
                <LinkA className = "activeNav"  color = "var(--cl-grey-p)" bold>
                  Laptops
                </LinkA>
              </Ul.Li>
              <Ul.Li>
                <LinkA className = {({isActive})=>isActive? "activeNav" : "navlink"}  color = "var(--cl-grey-p)" bold>
                  Smartphones
                </LinkA>
              </Ul.Li>
              <Ul.Li>
                <LinkA className = {({isActive})=>isActive? "activeNav" : "navlink"}  color = "var(--cl-grey-p)" bold>
                  Cameras
                </LinkA>
              </Ul.Li>
              <Ul.Li>
                <LinkA className = {({isActive})=>isActive? "activeNav" : "navlink"}  color = "var(--cl-grey-p)" bold>
                  Accessories
                </LinkA>
              </Ul.Li>
            </Ul>
            </Div>

          </Container>
          <Container display = "block">
              <Slider {...settings}>
                {
                  state.productCard.slice(-6).map((value)=>{
                    return(
                      <Col3 pd = " 0  var(--mp15) 60px var(--mp15)" key = {value.id}>
                          <ProductCard data = {value}>
                          </ProductCard>
                      </Col3>
                    )
                  })
                }
                </Slider>
          </Container>
          <Container justify = "space-between" pd = "100px  5% 100px " >
          {
               state.SmoleCard.slice(-3).map((value)=>{
                 return(
                   <Col4 key = {value.id} pd = " 0 var(--mp30)">
                     <H1 bold color = "var(--cl-dark-p)" mr = "15px 0">
                       Top Selling
                     </H1>
                      {
               state.SmoleCard.slice(-3).map((value)=>{
                 return(
                   <SmoleCard key = {value.id} data = {value} >
                      
                   </SmoleCard>
                 )
               })
             }
                   </Col4>
                 )
               })
             }
          </Container>
          <Footer data = {state.footer} >

          </Footer>

        </HomeStyle>

     )
}
export default Home;