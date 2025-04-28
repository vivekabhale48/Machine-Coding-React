import { useCallback, useEffect, useState } from "react"
import { useDebounce } from "./customHook/useDebounce";

const highLightText = (title, searchQuery) => {

    const regex = new RegExp(`(${searchQuery})`, 'gi');
    // console.log(regex);  
    console.log(title.split(regex));
    return title.split(regex).map((part, i) => part.toLowerCase() === searchQuery.toLowerCase() ? (
        <span key={i} style={{ color: "blue", fontWeight: "bold" }}>
            {part}
        </span>
    ) : (
        part
    ))
}

export const SearchBar = () => {


    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getData(query) {
        if (!query) return setSuggestions([]);
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            const results = await response.json();
            setSuggestions(results?.products);

        } catch (error) {
            setError({ text: 'Failed to Load the suggestion', error })
        }
        setLoading(false);
    }

    const callDebounce = useCallback(useDebounce(getData, 300), []);

    useEffect(() => {
        callDebounce(query);
    }, [query])


    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }} type="text" />
            {
                error && (<p style={{ color: 'red' }}>{error.text}</p>)
            }
            {
                loading && (<p style={{ color: 'blue' }}>Loading...</p>)
            }
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
                {
                    suggestions.map((ele, i) => (
                        <li key={i} style={{ padding: '10px', backgroundColor: '#f9f9f9', cursor: 'pointer', marginBottom: '10px', borderRadius: '5px' }}>
                            {highLightText(ele.title, query)}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}