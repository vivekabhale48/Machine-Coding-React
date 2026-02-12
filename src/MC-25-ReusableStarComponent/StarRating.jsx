import { useCallback, useState } from "react";
import { Star } from "./Star";

export const StarRating = ({ max = 5, value, onChange }) => {
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleSelect = useCallback((newRating) => {
        onChange(newRating);
    }, [onChange])

    return (
        <div role="radiogroup" aria-label="Star Rating">
            {
                Array.from({ length: max }, (_, i) => {
                    const index = i + 1;
                    const filled = hoveredRating > 0 ? index <= hoveredRating : index <= value;

                    return (
                        <Star
                            key={i}
                            index={index}
                            filled={filled}
                            onMouseEntered={() => setHoveredRating(index)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => handleSelect(index)}
                        />
                    )
                })
            }
        </div>
    )
}