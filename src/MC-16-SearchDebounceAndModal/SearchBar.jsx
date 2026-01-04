import { useCallback, useEffect, useState } from "react"
import { useDebounce } from "./customHook/useDebounce";
import { Modal } from "./Modal";

const highLightText = (title, searchQuery) => {

    if (!searchQuery) return searchQuery;

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
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    function handleTitleOnClick(ele, i) {
        setIsOpen(true);
        setSelectedProduct(ele);
    }

    async function getData(query) {
        if (!query) return setSuggestions([]);
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            const results = await response.json();
            console.log(results);
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
                        <li onClick={() => handleTitleOnClick(ele, i)} key={i} style={{ padding: '10px', backgroundColor: '#f9f9f9', cursor: 'pointer', marginBottom: '10px', borderRadius: '5px' }}>
                            {highLightText(ele.title, query)}
                        </li>
                    ))
                }
            </ul>

            {
                isOpen && (
                    <Modal onClose={setIsOpen}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
                            <div className="rounded-xl overflow-hidden border">
                                <img className="w-full h-[380px] object-cover" src={selectedProduct?.images[0]} alt="" />
                            </div>
                            <div className="flex flex-col justify-between text-left">
                                <div>
                                    <p className="text-sm uppercase text-gray-500 tracking-wide">
                                        {selectedProduct?.brand}
                                    </p>
                                    <h1 className="text-3xl font-semibold mt-2 text-gray-700">{selectedProduct?.title}</h1>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="flex items-center gap-1 text-sm">
                                            ⭐ <strong>{selectedProduct.rating}</strong>
                                        </span>
                                        <span className="text-sm text-green-600 font-medium">
                                            {selectedProduct.availabilityStatus} ({selectedProduct?.stock} left)
                                        </span>
                                        {/* Price */}
                                        <div className="flex items-center gap-3">
                                            <span className="line-through text-gray-400">
                                                ${selectedProduct?.price}
                                            </span>
                                            <span className="text-sm text-green-600 font-medium">
                                                {selectedProduct?.discountPercentage}% OFF
                                            </span>
                                        </div>
                                    </div>
                                    {/* Description  */}
                                    <p className="text-sm mt-4 text-gray-600 leading-relaxed text-left">
                                        {selectedProduct?.description}
                                    </p>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {selectedProduct.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs bg-gray-100 rounded-full"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Extra Info */}
                                    <div className="mt-6 space-y-2 text-sm text-gray-600">
                                        <p>🚚 {selectedProduct.shippingInformation}</p>
                                        <p>↩️ {selectedProduct.returnPolicy}</p>
                                        <p>🛡️ {selectedProduct.warrantyInformation}</p>
                                    </div>
                                </div>

                                {/* CTA  */}
                                <div className="mt-8 flex gap-4">
                                    <button className="uppercase text-[12px] bg-black p-3 text-white rounded-xl flex-1 shadow-lg font-medium hover:opacity-90 transition">
                                        Add To Cart
                                    </button>
                                    <button className="flex-1 border border-black py-3 rounded-xl font-medium hover:bg-gray-100 transition">
                                        Buy Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Modal>
                )
            }
        </div>
    )
}