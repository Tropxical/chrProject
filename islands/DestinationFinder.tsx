import { useState } from "preact/hooks"



export default function DestinationFinder() {

    const [ country, setCountry ] = useState("")
    const [ status, setStatus ] = useState("")
    const [ result, setResult ] = useState("")


    async function handleSubmit(e: Event) {
        e.preventDefault();

        setStatus("Loading...");
        setResult("")

        const getRoute = await fetch(`/${country.toUpperCase()}`)
        .catch(() => null);

        if (!getRoute) return setStatus("Error fetching data, please try again.");

        const routeData = await getRoute.json();
        if (routeData.error) return setStatus(routeData.error);

        setStatus("Results:")
        setResult(`Route from USA to ${routeData.destination}: ${routeData.list.join(" > ")}`);


    }

    return (
        <>
            <strong className="text-xl">C.H. Robinson Destination Finder</strong>

            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <label className="mt-5">Enter a Country:</label>

                <input
                    type="text"
                    value={ country }
                    maxLength={5}

                    className="border border-gray-300 rounded text-center"

                    onInput={(e) => setCountry(e.currentTarget.value.toUpperCase())}
                />

                <button 
                    className="bg-blue-500 text-white rounded py-2 px-4 mt-5"
                    onClick={handleSubmit}>Find Route
                </button>
            </form>

            {status && (
                <strong className="mt-5">{status}</strong>
            )}


            {result && (
                <p>{result}</p>
            )}

        </>
    )
}