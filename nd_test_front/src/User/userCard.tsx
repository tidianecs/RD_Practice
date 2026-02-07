type UserCardProps = {
  name: string;
  email: string;
};

function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

export default UserCard;
