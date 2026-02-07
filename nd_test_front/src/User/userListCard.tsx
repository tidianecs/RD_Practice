import UserCard from "./userCard";

function UserListCard(){
    return <>
        <div className="max-w-2xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <UserCard></UserCard>
        </div>
    </>
} export default UserListCard;