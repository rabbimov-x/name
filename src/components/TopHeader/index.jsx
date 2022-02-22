import React , {useEffect} from "react";
import {Product} from "../ProductCard/styled"
import { updateState, deleteCt } from "../../redux/type/types";
import {Col6,Col3, Container,Div,Icon,LinkA, P, H1} from "../../GlobalStyle"
import {DarkHeader, DivIn, HeaderStyle,Count ,AddCart, LightHeader, Logo} from "./style"
import { useSelector, useDispatch } from "react-redux";
const TopHeader = ()=>{

    const state = useSelector((state)=>state )
    const dispatch = useDispatch()
    console.log(state.top.summa)
    useEffect(()=>{
        
    },[state.cart])

    
    return(
        <HeaderStyle>
            <LightHeader>
                <Container pd = "10px">
                  <Div className="top-links" display = "flex" w = "auto"  align="center">
                    <LinkA href="+99890-338-30-00" >
                        <Icon.Phone color = " var(--cl-red)" mr = "0 10px 0 0" />
                        +99890-338-30-00                        
                    </LinkA>
                    
                    <LinkA href="email@email.com" >
                        <Icon.Email color = " var(--cl-red)" mr = "0 10px 0 0" />
                        email@email.com                        
                    </LinkA>
                    <LinkA href="+99890-338-30-00" >
                        <Icon.Location color = " var(--cl-red)" mr = "0 10px 0 0" />
                        1734 Stonecoal Road                     
                    </LinkA>
                  </Div>
                  <Div className="top-links" position = "relative"  display = "flex" w = "auto" align = "center" mr = "0 0 0 auto">
                        <LinkA href="/usd" >
                            <Icon.Location color = " var(--cl-red)" mr = "0 10px 0 0" />
                            USD                     
                        </LinkA>
                        
                        <LinkA href="/cart" >
                            <Icon.Human color = " var(--cl-red)" mr = "0 10px 0 0" />
                            Yuor Cart                     
                        </LinkA>
                        
                        
                  </Div>
                </Container>
            </LightHeader>
            <DarkHeader pd = "15px 0 15px 0">
                <Container className="Container">
                    <Col3 className="Logo">
                        <Logo src = "./assets/images/png/Без названия.webp" alt="error"></Logo>
                    </Col3>
                    <Col6 className="searchCol" display = "flex" align = "center" >
                        <DivIn>
                            <DivIn.Sellect >
                                <option value="0">All Catigori</option>
                                <option value="1"> All</option>
                                <option value="2">2 option</option>
                                <option value="3">3 otpion</option>
                            </DivIn.Sellect>
                            <DivIn.Input type = "text"  placeholder="Search here"></DivIn.Input>
                            <DivIn.Button    type = "sumbit">Searche</DivIn.Button>
                        </DivIn>
                    </Col6>
                    <Col3 className="yuorCart"   align = "center" pd = "5px">
                    <Div  display = "flex" justify = "end" align = "center">
                        <LinkA mr= "0 15px" className="yuorLink">
                        <Div display = "flex" justify = "center" align = "center" flex = "column" >
                            <Icon.Like w = "18px" >
                            </Icon.Like>
                            <Count top = "-10px" right = "4px">2</Count>
                            <p>Your Wishlist</p>
                        </Div>


                        </LinkA>
                        <LinkA mr= "0 15px" onClick={()=>dispatch({type: updateState , yuorCart: !state.home.yuorCart })} className="yuorLink">
                        <Div display = "flex" justify = "center" align = "center" flex = "column" >
                            <Icon.Cart w = "18px" >
                            </Icon.Cart>
                            <Count top = "-10px" right = "4px">2</Count>
                            <p>Your Wishlist</p>
                        </Div>
                        
                        </LinkA>
                        {
                            state.home.yuorCart?<AddCart>
                            <Div className="CardAll" pd = "15px">
                                {           

                                    state.home.productCard.map(({id , aTitle, imgUrl, addCart,soni, cost})=>{
                                       if(addCart === true){
                                        // const summa = 0;
                                        // summa = summa + cost;
                                        // console.log(summa) 
                                        return (
                                        <AddCart.Card key = {id} >
                                        <div className="img" >
                                            <img src={imgUrl} alt="error" />
                                        </div>
                                        <div  className = "xicon" onClick={()=>dispatch({type: deleteCt , id: id , soni: 0 , cost: cost }) } ><Icon.X w = "var(--icon-w12)"></Icon.X></div>
                                        <Div pd = "0">
                                                <Product.A size = "var(--size12)">
                                                    {aTitle}
                                                </Product.A>
                                                <Product.H4 mr = " 10px  0 0px 0">
                                                    {soni + "x"} 
                                                    {" "}
                                                    { "$" + cost} 
                                                </Product.H4>
                                        </Div>
                                    </AddCart.Card>
                                       )
                                    } else{
                                        return ""
                                    }     
                                    })
                                }
                            </Div>
                            <div className="line"></div>
                            <Div pd = "15px 15px 15px 15px">
                                <P color = "--cl-dark-p" size = "var(--size12)" >
                                    3 Item(s) selected  
                                </P>
                                <H1 size = "var(--size16)" pd = " 7px 0 0 0">
                                    Subotal: { "$" + state.top.summa}
                                </H1>
                            </Div>
                            <Div display = "flex">
                                <AddCart.Buttonright>
                                        Chekaut 
                                </AddCart.Buttonright>
                                <AddCart.Buttonleft>
                                    Weiv Cart 
                                        <Icon.Next w= "Var(--icon-w12)" mr = " 0 0 0  5px"/>
                                </AddCart.Buttonleft>
                            </Div>
                        </AddCart>
                        : "" 
                        }
                        
                    </Div>
                    </Col3>
                </Container>
            </DarkHeader>
            
        </HeaderStyle>
    )
}

export default TopHeader;