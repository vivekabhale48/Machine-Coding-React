import { useEffect, useRef, useState } from "react"

export const useFetch = (url, options={}) => {
 
    let [data, setData] = useState([]);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);
    const abortControllerRef = useRef();

    async function fetchData() {

        if(!url) return;

        if(abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        const controller = new AbortController();
        abortControllerRef.current = controller;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
            })

            if(!response.ok) {
                throw new Error('Failed to fetch the data.');
            }
            const result = await response.json();
            setData(result);

        } catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        return () => {
            if(abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        }
    }, [url])
    
    return {data, error, loading, refetch: fetchData}
}