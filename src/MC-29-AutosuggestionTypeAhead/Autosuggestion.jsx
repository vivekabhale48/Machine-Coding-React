import { AutoCompleteSuggestion } from "./components/AutoCompleteSuggestion"

export const AutoSuggestion =() => {

    const getSuggestions = async(query) => {
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
        if(!response.ok) {
            throw new Error('Network response is not OK.');
        }
        const result = await response.json();
        return result?.recipes;
    }

    let staticData = ["apple", "banana", "mango", "pineapplce", "chiku"];

    return (
        <div>
            <h1 className="text-xl font-bold text-center">
                Auto Suggest
            </h1>
            <AutoCompleteSuggestion
                staticData={staticData} 
                getSuggestion={getSuggestions}
                dataName="name"
                cutomLoading={<p>Loading...</p>}
                onSelect={() => {}}
                placeholder="Type the receipes"
                onChange={() => {}}
                onFocus={() => {}}
                onBlur={() => {}}
                customStyles={{}}
            />

            
        
        </div>
    )
}