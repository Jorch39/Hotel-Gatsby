import React from 'react';
import { css } from '@emotion/core';
import Navbar from './nav';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const LinkHome = styled(Link)`
    color: #FFF
    text-align: center;
    text-decoration: none;
`;

const Footer = ({ title }) => {

    const year = new Date().getFullYear();
    return ( 
        <>
            <footer css={css`
                    background-color: rgba(44,62,80);
                    margin-top: 5rem;
                    padding: 1rem;
                
                `}
            
            >
                {/* <div css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }

                `}
                >
                    <Navbar />

                    <LinkHome to='/'>
                        <h1>Hotel Gatsby</h1>
                    </LinkHome>

                </div> */}
                <p css={css`
                    text-align: center;
                    color: #FFF;
                    margin: 2rem;
                    padding: 1rem;
                `}> {title}. Todos los derechos reservados {year} &copy</p>
            </footer>

        </>
     );
}
 
export default Footer;