function UserForm(){
    return <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        <form className="space-y-5">
            <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
                <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                Create a User
            </button>
      </form>
    </div>
} export default UserForm;