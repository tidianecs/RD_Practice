function UserCard(){
    return <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <span className="inline-block mb-2 text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
            Beginner
            </span>

            <h2 className="text-xl font-semibold mb-2">Introduction to Web Development</h2>
            <p className="text-gray-600 mb-4">
            Learn the fundamentals of HTML, CSS, and JavaScript.
            </p>

            <button className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            View Course
            </button>
        </div>
} export default UserCard;