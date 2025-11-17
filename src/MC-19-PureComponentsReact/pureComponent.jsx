import React, { useEffect } from "react"

function PureComponent({title}) {

    return (
        <div>{title}</div>
    )
}
// Memoized — will re-render ONLY if `title` prop changes
export default React.memo(PureComponent);