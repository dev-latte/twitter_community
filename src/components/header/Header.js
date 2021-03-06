import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import UserInformation from "../../contents/userInfo/UserInformation";
import More from "../../pages/More";
import HeaderTemplate from "./HeaderTemplate";

const ProfileButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    cursor: pointer;
    padding-right: 20px;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0px 5px;
    }
    span {
        display: flex;
        align-items: center;
        margin: 5px;
    }
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const userObj = useSelector((state) => state.user.user);

    return (
        <>
        {isOpen && 
            <More onClick={() => setIsOpen(!isOpen)}>
                <UserInformation>
                </UserInformation>
            </More>
        }
        <HeaderTemplate>
            <div>LOGO</div>
            <ProfileButtonDiv onClick={() => setIsOpen(!isOpen)}>
                <img src={userObj.photoURL} alt="profile_image"/>
                <span>{userObj.displayName}</span>
            </ProfileButtonDiv>
        </HeaderTemplate>
        </>
    );
}

export default Header;