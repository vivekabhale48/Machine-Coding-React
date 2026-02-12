import { useState } from "react"
import { StarRating } from "./StarRating"

export const ReusableStarComponent = () => {

    const [rating, setRating] = useState(5)
    
    return(
        <StarRating value={rating} onChange={setRating}/>
    )
}