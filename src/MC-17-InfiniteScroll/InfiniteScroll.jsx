import { useCallback, useEffect, useRef, useState } from "react";

const fetchItems = async (page) => {
    return new Array(10).fill(0).map((_, i) => ({
        id: `img-${page}-${i}`,
        url: `https://picsum.photos/800/600?random=${page}${i}`
    }));
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
            <h1 style={{fontSize: '30px', fontWeight: '600', textAlign: 'center'}}>Infinite Scroll</h1>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px', padding: '20px'}}>
                {
                    items.map((img, i) => {
                        if(items.length-1 === i) {
                            return (
                                <img style={{width: '100%', objectFit: 'cover', height: '250px', borderRadius: '10px'}} ref={lastItemRef} key={img?.id} src={img.url} alt="HD"  />
                            )
                        }
                        return (
                            <img style={{width: '100%', objectFit: 'cover', height: '250px', borderRadius: '10px'}} key={img?.id} src={img.url} alt="HD" />
                        )
                    })
                }
            </div>

            {loading && <p>Loading...</p>}
            {!hasMore && <p>✅ No more items</p>}
        </div>
    )
}