import { useEffect, useState } from "react";

import "./index.css";
import NewFriendForm from "./add-friend-form";
import FriendList from "./friendList";
import friendstore from "../data/friends";

export default function AppBody() {
    const [friendList, setFriendList] = useState(friendstore.friends);

    const addNewFriend = (friendObj) => {
        setFriendList(friendstore.addFriend(friendObj).slice());
        console.log(friendList);
    };

    const setUpdatedFriendList = (updatedFriendList) => {
        setFriendList(updatedFriendList);
    }
    
    return (
        <div className="app__body">
            <NewFriendForm addNewFriend={addNewFriend} />
            <FriendList friendList={friendList} setUpdatedFriendList={setUpdatedFriendList} />
        </div>
    )
}