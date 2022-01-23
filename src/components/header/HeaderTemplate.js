import React from "react";
import styled from "styled-components";

const HeaderTemplateDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 45px;
    background: rgba(0, 0, 0, .8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid pink;
`;

const HeaderTemplate = ({children}) => {
    return (
        <HeaderTemplateDiv>
            {children}
        </HeaderTemplateDiv>

    );   
}

export default HeaderTemplate;