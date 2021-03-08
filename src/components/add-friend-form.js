import { useState } from "react";

import "./index.css";


export default function NewFriendForm(props) {

    const [name, setName] = useState('');

    const addNewFriend = () => {
        props.addNewFriend({
            name: name,
            isFavorite: false
        });
        setName("");
    }

    return (
        <div className="friend__form">
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Add your friend's name"
            />
            <button onClick={addNewFriend}>Add Friend</button>
        </div>
    );
}