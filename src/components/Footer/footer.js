import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';


const MyFooter = () => {
    return (
        <>
            <Footer>
                <div className="footer-img">
                    img!
                </div>
                <div className="footer-about">
                    <h1>About</h1>
                    <Link to='/about'>
                        <a>About Us</a>
                    </Link>
                    <br />
                    <a>Team</a>
                    <br />
                </div>
                <div className="footer-services">
                    <h1>Services</h1>
                    <a>Engineering</a>
                    <br />
                    <a>Product Management</a>
                    <br />
                    <a>MVP Development</a>
                    <br />
                </div>
                <div className="footer-resources">
                    <h1>Our Work</h1>
                    <a>Success Stories</a>
                    <br />
                    <a>Open Source</a>
                    <br />

                </div>
                <div className="footer-contact">
                    <h1>Contact</h1>
                    <a>Contact Us</a>
                    <br />
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

export default MyFooter;