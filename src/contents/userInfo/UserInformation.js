import { signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../components/common/Button";
import { auth } from "../../FirebaseInstance";
import { removeStatus } from "../../redux/status/action";
import { removeUser } from "../../redux/user/action";
import UserInventory from "../userInventory/UserInventory";
import UserStatus from "./status/UserStatus";

const UserInfoTemplate = styled.div`
    border: 1px solid #222;
    width: 500px;
    height: 100%;
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserImage = styled.img`
    width: 200px;
    height: 200px;
`;

const UserInformation = () => {
    const [openInventory, setOpenInventory] = useState(false);
    const dispatch = useDispatch();
    const userObj = useSelector((state) => state.user.user);
    
    // 로그아웃
    const twitterSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            dispatch(removeStatus());
            window.location.replace("/");
          }).catch((error) => {
              console.error(`signOut error ${error}`);
          });          
    }

    return (
        <UserInfoTemplate>
            {openInventory
                ?
                    <UserInventory openInventory={openInventory} setOpenInventory={setOpenInventory}/>
                :
                <>
                    <UserImage src={(userObj.photoURL).replaceAll("_normal", "")} alt={`${userObj.displayName} 인장 이미지`}/>
                    <UserStatus/>
                    <Button fullWidth onClick={e => setOpenInventory(!openInventory)}>User Inventory</Button>
                    <Button fullWidth onClick={twitterSignOut}>logout</Button>
                </>

            }

        </UserInfoTemplate>
    );
}

export default UserInformation