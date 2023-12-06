import NavBar from "./NavBar"

import { routes } from "../../Constant"
import styled from "styled-components"
import { Link } from "react-router-dom"

function Navigation(){
    return(
        <SNavbar>
            <NavContainer>
                <SNavbarBrand>LOGO</SNavbarBrand>
                <RightNav>
                    <NavRoutes>
                        {routes.map((route) =>(
                            <NavRoute to={route.link}  key = {route.name}>{route.name}</NavRoute>

                        ))}
                    </NavRoutes>
                </RightNav>
            </NavContainer>
        </SNavbar>

    )
}

export default Navigation


const SNavbar = styled.nav`
background-color : orange;
// width : 100vw;
// height : 15vh;


`
const NavContainer = styled.div`
width : 100vw;
height : 15vh;
display: flex;
justify-content: space-around;
align-items: center;

`
const SNavbarBrand = styled.div``
const RightNav = styled.div``
const NavRoutes = styled.div`
display  : flex;
gap:40px;
font-size: 19px;

`
const NavRoute = styled(Link)`
color : white;
    &:hover{
        text-decoration: underline;
        color:red;
    }

`

