import styled from "styled-components";

export const Nav = styled.div`
    width:100%;
    height: auto;
    padding: 0 100px;
    background: #FFF;
    border-bottom: 2px solid #E4E7ED;
    border-top: 3px solid #D10024;
    

`

export const Ul = styled.ul`
    display:  flex;
    align-items: center;
    list-style: none;
    margin: 0;
`
Ul.Li = styled.li`
    padding: 20px 0px;
    margin-left: 30px;
    color: #2B2D42;
    background-color: transparent;
  .selected{
      color: blue;
  }
`

