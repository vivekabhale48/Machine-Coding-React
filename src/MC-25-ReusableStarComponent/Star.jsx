import { memo } from "react";

export const Star = memo(({ index, filled, onClick, onMouseEntered, onMouseLeave }) => {

    return (
        <span
            onClick={onClick}
            onMouseEnter={onMouseEntered}
            onMouseLeave={onMouseLeave}
            className={`text-[40px] cursor-pointer ${filled ? 'text-[#FFD700]' : 'text-[#ccc]'}`}
        >
            ★
        </span>
    )
})