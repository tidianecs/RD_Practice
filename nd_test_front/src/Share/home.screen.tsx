import UserForm from "../User/userForm"
import UserListCard from "../User/userListCard"

function HomeScreen(){
    return <>
        <h1 className="text-3xl font-bold mb-8 text-center text-slate-200">
            Welcome to User Manager
        </h1>
        <h2 className="text-xl text-center font-medium text-slate-200">
            Add a user
        </h2>
        <UserForm></UserForm>
        <h2 className="text-xl text-center font-medium text-slate-200">
            All the users
        </h2>
        <UserListCard></UserListCard>
    </>
} export default HomeScreen