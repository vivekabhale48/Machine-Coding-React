import { useFetch } from "./hook/useFetch";

export const UseFetchWithAbortController = () => {

    const {data, error, loading, refetch} = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">
                    User's List
                </h1>
                
                <button onClick={refetch} className="mb-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Refresh
                </button>

                {loading && (
                    <p className="text-blue-500 font-medium">Loading...</p>
                )}
                {error && (
                    <p className="text-red-500 font-medium">{error}</p>
                )}

                <ul className="space-y-3">
                    {
                        data && data.map((user) => (
                            <li
                                key={user.id}
                                className="p-3 border rounded-lg hover:bg-gray-50"
                            >
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}