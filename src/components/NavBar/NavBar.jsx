import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logoNav from "../assets/logohdp.png";
import { BurguerButton } from "./BurguerButton";
import { CartWidget } from "./CartWidget";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handelClick = () => {
        setClicked(!clicked);
    };
    return (
        <>
            <NavContainer>
                <nav>
                    <NavLink to={"/"}>
                        <img src={logoNav} alt="logo hdp" />
                    </NavLink>
                    <div className={`navMenuLinks ${clicked ? "active" : ""}`}>
                        <ul>
                            <li>
                                <NavLink to="/">INICIO</NavLink>
                            </li>
                            <li>
                                <NavLink to="/categoria/hamburguesas">
                                    HAMBURGUESAS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/categoria/fritas">FRITAS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/categoria/cervezas">
                                    CERVEZAS
                                </NavLink>
                            </li>
                        </ul>
                        <div className="cartWidgetBottom">
                            <CartWidget />
                        </div>
                    </div>
                    <div className="burgerButton">
                        <BurguerButton
                            clicked={clicked}
                            handelClick={handelClick}
                        />
                    </div>
                    <BackgroundDiv
                        className={`initial ${clicked ? "active" : ""}`}
                    />
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
    max-width: 1600px;
    margin: 0 auto;
    .navMenuLinks {
        display: flex;
        justify-content: space-between;
        aling-item: center;
        line-height: 2em;
        div {
            display: flex;
            aling-item: center;
            margin-bottom: 1em;
        }
        position: absolute;
        top: -700px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all 0.5s ease;
        @media (min-width: 900px) {
            position: initial;
            margin: 0;
            display: inline;
            display: flex;
            justify-content: space-between;
            aling-item: center;
            line-height: 2em;
            div {
                display: flex;
                aling-item: center;
                margin-bottom: 1em;
            }
        }
    }

    .navMenuLinks.active {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        aling-item: center;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 112px;
        left: 0;
        right: 0;
        text-align: center;
        ul {
            display: flex;
            flex-direction: column;
            li {
                margin-bottom: 2rempx;
            }
        }
        .cartWidgetBottom {
            display: flex;
            justify-content: center;
            aling-item: center;
        }
    }
    .burgerButton {
        @media (min-width: 900px) {
            display: none;
        }
    }
`;

const BackgroundDiv = styled.div`
    position: absolute;
    background-color: #000000;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 50%;
    z-index: -1;
    transition: all 0.8s;
    &.active {
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
    }
`;
