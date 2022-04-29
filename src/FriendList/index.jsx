import { FRIEND_LIST } from "../static/data";
import { FriendCard } from "./FriendCard";
import "./style.css";

export const FriendList = () => {
  const userCardJsx = FRIEND_LIST.map((user, index) => {
    return <FriendCard key={index} friend={user} />;
  });
  return <div className="friend-list-wrapper">{userCardJsx}</div>;
};
