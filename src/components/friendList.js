import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiSortBoolAscending, mdiSortBoolDescending } from "@mdi/js";
import JwPagination from 'jw-react-pagination';
import friendstore from "../data/friends";

import "./index.css";
import FriendItem from "./friendItem";

export default function FriendList({ friendList, setUpdatedFriendList }) {

    const [searchText, setSearchText] = useState('');
    const [isSortedDescending, SetSortStrategy] = useState(true);
    const [pageOfItems, setPageOfItems] = useState([]);

    useEffect(() => handleSearchText(searchText), [searchText]);

    useEffect(() => handleSorting(isSortedDescending), [isSortedDescending]);

    const handleSearchText = (searchText) => {
        console.log(searchText);
        const updatedFriendList = friendstore.friends.filter((friend) => friend.name.toLowerCase().includes(searchText.toLowerCase()));
        setUpdatedFriendList(updatedFriendList);
    }

    const handleSorting = (isSortedDescending) => {
        const unsortedList = friendstore.friends.slice();
        unsortedList.sort(function (x, y) {
            if (isSortedDescending) {
                // true values first
                return (x.isFavorite === y.isFavorite) ? 0 : x.isFavorite ? -1 : 1;
            } else {
                // false values first
                return (x.isFavorite === y.isFavorite) ? 0 : x.isFavorite ? 1 : -1;
            }
        });
        setUpdatedFriendList(unsortedList);
    }

    const markFavorite = (friendObj) => {
        friendstore.updateFriend(friendObj);
        let updateList = friendstore.getFriends().slice();
        setUpdatedFriendList(updateList);
    };

    const deleteFriend = (deletedFriend) => {
        friendstore.removeFriend(deletedFriend);
        const updatedFriendList = friendList.filter((friend) => friend.id !== deletedFriend);
        setUpdatedFriendList(updatedFriendList);
    };

    const onChangePage = (pageItems) => setPageOfItems(pageItems);

    return (
        <div className="friends__list">
            <div className="friends__list-header">
                <p>Friends List</p>
                <button onClick={e => SetSortStrategy(!isSortedDescending)}><Icon path={isSortedDescending ? mdiSortBoolDescending : mdiSortBoolAscending} size={1} /></button>
            </div>
            <input
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="Enter your friend's name"
            />
            <div className="friends__list-content">
                {pageOfItems.map((item) => <FriendItem key={item.id} friend={item} markFavorite={markFavorite} deleteFriend={deleteFriend} />)}
            </div>
            <JwPagination items={friendList} onChangePage={onChangePage} pageSize={4} />
        </div>
    );
}