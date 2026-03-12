import { useEffect, useState } from "react"
import { SuggestionList } from "./SuggestionList";
import { useDebounce } from "../hooks/useDebounce"

export const AutoCompleteSuggestion = ({
    getSuggestion,
    staticData,
    dataName,
    cutomLoading,
    onSelect,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    customStyles,
}) => {

    const [value, setValue] = useState('');
    const [debounceValue, setDebounceValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const callDebounce = useDebounce((val) => {
        setDebounceValue(val);
    }, 1000);

    const handleOnChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
        callDebounce(e.target.value)
        if (e.target.value.length === 0) {
            setSuggestions([]);
        }
    }

    const getSuggestionsHandle = async (query) => {
        setError(null);
        setLoading(true);
        try {
            if (staticData) {
                let newResult = staticData.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
                setSuggestions(newResult);
            }

            const res = await getSuggestion(query.toLowerCase());
            const newSuggestions = res.filter((item) => !selectedItems.includes(item.name));
            setSuggestions(newSuggestions);

        } catch (error) {
            console.log(error);
            setError('Failed to fetch the suggestions');
            setSuggestions([]);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (debounceValue.length > 1) {
            getSuggestionsHandle(debounceValue);
        }
    }, [debounceValue])

    function onSuggestionClick(item) {
        // console.log(item);
        setSelectedItems([...selectedItems, item[dataName]])
        setSuggestions([]);
        setValue('');
    }

    function removeItems(item) {
        setSelectedItems((prevItems) => prevItems.filter((ele) => ele !== item));
        setSuggestions([]);
        setValue('');
    }


    return (
        <div>
            <div className="border flex items-center p-2 flex-wrap gap-3">
                {selectedItems.length > 0 &&
                    selectedItems.map((ele, index) => (
                        <div
                            className="bg-[#000] rounded p-2 text-white text-[12px] mr-2 flex justify-center items-center"
                            key={index}
                        >
                            {ele}
                            <div
                                onClick={() => removeItems(ele)}
                                className="ml-2 cursor-pointer bg-[#ccc] font-bold text-[#000] w-[20px] h-[20px] flex justify-center items-center rounded-[50%] p-1"
                            >
                                X
                            </div>
                        </div>
                    ))}
                <input
                    value={value} 
                    onChange={handleOnChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    className="border w-full rounded-xl px-3 py-2 border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 focus: border-blue-500 outline-none transition duration-300 shadow-sm"
                    type="text"
                />
            </div>
            <div className="flex items-center justify-center">
                {
                    (suggestions.length > 0 || loading || error) && (
                        <ul className="w-full mx-auto shadow bg-[#f4f3f3] max-h-[300px] overflow-y-auto">
                            {error && <div className="error">{error}</div>}
                            {loading && <div className="loading">Loading...</div>}
                            <SuggestionList
                                suggestions={suggestions}
                                highlight={value}
                                dataName={dataName}
                                onSuggestionClick={onSuggestionClick}
                            />
                        </ul>
                    )
                }
            </div>
        </div>
    )
}