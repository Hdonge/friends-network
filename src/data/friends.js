let friends = [
    {
        id: 1,
        name: 'Rahul Gupta',
        isFavorite: true
    },
    {
        id: 2,
        name: 'Shivangi Sharma',
        isFavorite: false
    },
    {
        id: 3,
        name: 'Akash Singh',
        isFavorite: true
    },
    {
        id: 4,
        name: 'Deep Singh',
        isFavorite: false
    },
    {
        id: 5,
        name: 'Rahul Dravid',
        isFavorite: false
    }
];

class FriendStore {
    constructor(friends) {
        this.friends = friends;
        this.lastCreatedId = friends[friends.length - 1].id;
    }

    getFriends() {
        return this.friends;
    }

    addFriend(friend) {
        friend.id = this.lastCreatedId + 1;
        this.friends.push(friend);
        this.lastCreatedId = friend.id;
        return this.friends;
    }

    removeFriend(friendToBeDeleted) {
        this.friends.splice(this.friends.findIndex((friend) => friend.id === friendToBeDeleted), 1);
    }

    updateFriend(friendToBeUpdated) {
        this.friends.forEach((friend) => {
            if (friend.id === friendToBeUpdated.id) {
                friend.isFavorite = friendToBeUpdated.isFavorite;
            }
        });
    }
}

let instance;

if (!instance) {
    instance = new FriendStore(friends);
}

export default instance;
