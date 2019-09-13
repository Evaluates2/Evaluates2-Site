import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.div`
    background-color: green;
    min-height: 150px;
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
        grid-row: 1 / 5 ;
        grid-column: 1;
        display: flex;
         background-color: lightblue;
        // width: 100px;
        height: 60px;
        width: 40px;

        


    }


  )`

export default (Footer);
