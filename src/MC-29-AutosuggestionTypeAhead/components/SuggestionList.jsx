export const SuggestionList = ({ suggestions = [], highlight, dataName, onSuggestionClick }) => {

    const highlightTheText = (item) => {
        if(!item) return;
        const splitedTitle = item.split(new RegExp(`(${highlight})`, 'gi'));

        return (splitedTitle.map((item) => (
            item.toLowerCase() === highlight.toLowerCase() ? <span className="text-red-600 font-bold">{item}</span> : <span>{item}</span>
        )))
    }

    return (
        <>
            {
                suggestions.map((item, i) => (
                    <li  className="p-3 hover:bg-[#dadada] cursor-pointer" onClick={() => onSuggestionClick(item)}>
                        {highlightTheText(item[dataName])}
                    </li>
                ))
            }
        </>
    )
}