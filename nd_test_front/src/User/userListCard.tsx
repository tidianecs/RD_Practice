import { useEffect, useState } from "react";
import UserCard from "./userCard";
import { fetchAllUsers } from "./user.service";

type User = {
  id: number;
  name: string;
  email: string;
};

function UserListCard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllUsers()
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-slate-300">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default UserListCard;
