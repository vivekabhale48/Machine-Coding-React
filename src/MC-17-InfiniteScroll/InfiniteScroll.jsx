import { useCallback, useEffect, useRef, useState } from "react";

const fetchItems = async (page) => {
    return Array(10).fill(0).map((_, i) => `Item ${(page - 1) * 10 + i + 1}`);
}
export default function InfiniteScroll() {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef(null);

    useEffect(() => {
        loadItems();
    }, [page]);

    const lastItemRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prevPage) => prevPage + 1);
            }
        })
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    const loadItems = async () => {
        try {
            setLoading(true)
            const newItems = await fetchItems(page);
            setItems((prev) => [...prev, ...newItems]);
            if (newItems.length === 0) setHasMore(false);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }



    return (
        <div>
            <h1 style={{fontSize: '30px', fontWeight: '600'}}>Infinite Scroll Demo Items</h1>
            {
                items.map((ele, i) => {
                    if (i === items.length - 1) {
                        return (
                            <div key={i} ref={lastItemRef} style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '10px' }}>
                                Hey {ele}
                            </div>
                        )
                    }
                    return (
                        <div key={i} style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '10px' }}>
                            {ele}
                        </div>
                    )
                })
            }

            {loading && <p>Loading...</p>}
            {!hasMore && <p>✅ No more items</p>}
        </div>
    )
}