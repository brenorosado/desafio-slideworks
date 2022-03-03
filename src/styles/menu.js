import styled from "styled-components";
import media from './media';

export const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #CCCCCC;
    height: 100px;
    font-family: 'Roboto', sans-serif;

    ul {
        display: none;
        list-style: none;

        ${media.desktop`
            position: static;
            display: flex;
            flex-direction: row;
            align-items: center;
        `}

        li {
            margin: 0 30px;

            a {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: black;
                font-size: 14px;
                cursor: pointer;
            }
        }
    }

    input {
        display: none;
        
        :checked + ul {
            position: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 100px;
            width: 100%;

            li {
                background: #CCCCCC;
                width: 100%;
                cursor: pointer;

                a {
                    padding: 15px 0px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                button {

                }

                :hover {
                    background: white;

                    button {
                        background: white;
                    }
                }

                button {
                    background: #CCCCCC;
                }
            }
        }   
    }
`;

export const MenuButton = styled.label`
    display: flex;
    background: #CCCCCC;
    cursor: pointer;
    padding: 5px;
    height: 35px;
    border-radius: 5px;
    font-size: 25px;

    ${media.desktop`
        display: none;
    `}
`;