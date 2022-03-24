import React from 'react'

import styled from "styled-components"

var Button = styled.button`
    color : ${({color}) => color};
    border : ${({border}) => border} ;
    background : ${({background}) => background};
    padding : 10px 18px;
    margin : 30px 10px;
    font-size : 20px;
    cursor : pointer;
    `
export {Button}