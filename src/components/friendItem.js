import "./index.css";
import Icon from "@mdi/react";
import { mdiStar, mdiStarOutline, mdiDelete } from "@mdi/js";

export default function FriendItem(props) {

    const deleteFriend = () => props.deleteFriend(props.friend.id);

    const markFavorite = () => props.markFavorite({
        id: props.friend.id,
        name: props.friend.name,
        isFavorite: !props.friend.isFavorite
    });

    return (
        <div className="friendlist__item">
            <div className="friendlist__itemText">
                {props.friend.name}
            </div>
            <div className="friendlist__itemButtons">
                <button onClick={markFavorite}><Icon path={props.friend.isFavorite ? mdiStar : mdiStarOutline} size={1} /></button>
                <button onClick={deleteFriend}><Icon path={mdiDelete} size={1} /></button>
            </div>
        </div>
    );
}