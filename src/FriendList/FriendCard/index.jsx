import "./style.css";

export const FriendCard = ({ friend }) => {
  return (
    <div className="friend-card-item">
      <div className="friend-card-info">
        <img src={friend.imageUrl} alt="avatar" className="img-avatar" />
        <div className="friend-info">
          <h3 className="friend-name">{friend.userName}</h3>
          <p className="mutual-friends">{friend.mutualFriend} общих друга</p>
        </div>
      </div>
      <button className="more-button">
        <i class="bx bx-dots-horizontal-rounded"></i>
      </button>
    </div>
  );
};
