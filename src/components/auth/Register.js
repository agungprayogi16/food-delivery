export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded-lg max-w-sm w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="nama"
                            id="nama"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="masukkan nama"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-custom-pink text-white py-2 px-4 rounded-lg hover:bg-pink-600"
                    >
                        Register
                    </button>
                    <div className="text-end mt-4">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="text-custom-pink hover:underline">
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
