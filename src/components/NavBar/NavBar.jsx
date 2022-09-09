import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoNav from "../assets/logohdp.png";
import CartWidget from "./CartWidget";

function Navbar() {
    return (
        <>
            <NavContainer>
                <nav>
                    <Link to={"/"}>
                        <img src={logoNav} alt="logo hdp" />
                    </Link>
                    <ul>
                        <li>
                            <Link to={"/"}>INICIO</Link>
                        </li>
                        <li>
                            <Link to={"/itemdetail"}>HACE TU PEDIDO</Link>
                        </li>
                        <li>
                            <Link to={"/itemdetail"}>SOBRE H.D.P</Link>
                        </li>
                        <li>
                            <Link to={"/itemdetail"}>CONTACTO</Link>
                        </li>
                    </ul>
                    <div>
                        <CartWidget />
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
    ul {
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
            letter-spacing: 0.3rem;
        }
        a:hover {
            color: #ffc73b;
            opacity: 0.9;
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
