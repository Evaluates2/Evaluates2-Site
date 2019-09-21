import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.div`
    background-color: lightgoldenrodyellow;
    min-height: 90px;
    width: 100%;
    display: grid;
    // desktop, 4 items in a row
    grid-template-columns: auto auto auto auto auto;
    
    // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 770px){
        grid-template-columns: auto auto auto;
    }
    // phone, 4 items in one column
    @media only screen and (max-width: 640px){
        grid-template-columns: auto ;
    }
    img-container {
       
        // justify-content: center;
        // align-items: center;
        // min-height: 70px;
    }
    
    .footer-img {
        
        background-color: lightgreen;
        grid-row: 1 / 5 ;
        grid-column: 1;
        display: flex;
         background-color: lightblue;
        // width: 100px;
        height: 60px;
        width: 40px;
        @media only screen and (max-width: 640px){
            display: none;
        }
    }
  `

export const myFooter =  () => {
    return (
        <>

            <Footer>

                <div className="footer-img">
                    img!
            {/* </div> */}
                </div>
                <div className="footer-about">
                    <h1>About</h1>
                    <a>Team</a>
                </div>
                <div className="footer-services">
                    <h1>Services</h1>
                    <a>Engineering</a>
                    <br />
                    <a>Product Management</a>
                    <br />
                    <a>MVP Development</a>
                </div>
                <div className="footer-resources">
                    <h1>Resources</h1>
                    <a>Articles</a>
                    <br />
                    <a>Blogs</a>
                    <br />
                    <a>MVP Development</a>
                </div>
                <div className="footer-contact">
                    <h1>Contact</h1>
                </div>
            </Footer>


            <VeryBottomFooter>
                <div className="very-bottom-footer-item">
                    Careers
                Î</div>
                <div className="very-bottom-footer-item">
                    Terms of Service
                </div>
                <div className="very-bottom-footer-item">
                    © <a href="https://www.evaluates2.io">Evaluates2</a>{' '}
                    {new Date().getFullYear()}
                </div>

            </VeryBottomFooter>
        </>
    )
}