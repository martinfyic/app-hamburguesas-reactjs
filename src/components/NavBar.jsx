import React from "react";
import styled from "styled-components";
import logoNav from "./assets/logohdp.png";

function Navbar() {
    return (
        <>
            <NavContainer>
                <nav>
                    <a href="/">
                        <img src={logoNav} alt="logo hdp" />
                    </a>
                    <div>
                        <a href="/">VER MENU</a>
                        <a href="/">HACE TU PEDIDO</a>
                        <a href="/">SOBRE H.D.P</a>
                        <a href="/">CONTACTO</a>
                    </div>
                </nav>
            </NavContainer>
        </>
    );
}

export default Navbar;

const NavContainer = styled.nav`
    img {
        width: 75%;
        height: auto;
    }
    div {
        display: flex;
        align-items: center;
        a {
            text-decoration: none;
            color: white;
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            margin-right: 35px;
            transition: all 0.5s;
            letter-spacing: 1.5px;
        }
        a:hover {
            color: #ffc73b;
            opacity: 0.9;
            transform: scale(1.1);
        }
    }
    nav {
        display: flex;
        aling-item: center;
        justify-content: space-between;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    padding: 0.5rem;
    background-color: #000000;
`;
