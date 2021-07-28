import styled from "styled-components";

export const NavWrapper = styled.div` 
    .menu-bars {
        margin-left: 3.5rem;
        front-size: 4rem;
        background: none;
    }
    .nav-menu:hover, nav.nav-menu.expanded{
        width: 250px;
        overflow: visible;
    }
    .nav-menu {
        background-color: #060b26;
         left: 0;
        transition: 350ms;
        border-right: 0.5px solid white;
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100vh;
        width: 50px;
        overflow: hidden;
        transition: width: 0.5s linear;
        z-index: 1000;
        -webkit-transform: translateZ(0)
        scale(1,1);

    }

    .nav-menu >ul {
        margin: 7px 0;
    }

    .nav-menu li{
        position: relative;
        display: block;
        width: 250px;
        left: -45px;
        padding: 10px 0px 0px 0px;
        list-style: none;
        height: 50px;
    }

    .nav-menu li a{
        text-decoration: none;
        color: #f5f5f5;
        font-size: 18px;
        width: 100%;
         height: 100%;
        position : relative;
        display: table;
        border-collapse: collapse;
        border-spacing: 0;
        -webkit-transform: translateZ(0)
        scale(1,1);
        transition: all .1s linear;
    }

    .nav-menu li a:hover{
        background-color: #1a83ff;
    }

     .nav-icon{
        position: relative;
        display: table-cell;
        padding: 0px 10px 0 0px;
        width: 60px;
        height: 36px;
        text-align: center;
        vertical-align: middle;
        // font-size: 18px;
    }

    .nav-text{
        position: relative;
        display: table-cell;
        vertical-align: middle;
        width: 190px; 
        font-family: tahoma;
        padding: 0px 0 0 3px
    }
`;
