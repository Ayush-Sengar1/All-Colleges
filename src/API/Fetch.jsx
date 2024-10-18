import { useEffect, useState } from "react"

export default function Fetch () {

    const URL = 'http://universities.hipolabs.com/search?country'
    const [query , setQuery] = useState("India")
    const [data ,setData] = useState([]);
    const [page ,setPage] = useState(1)
    const [limit , setLimit] = useState(20)
    let array = [];

    function handleclick () {
        console.log(query)
    }

    useEffect(()=>{
        
        const getdata = async () => {
            let response = await fetch (`${URL}=${query}`)
            let colleges = await response.json()
            setData(colleges)
        }
        getdata()

    },[])

    return (
        <div className="w-full bg-gray-600">
            <div className=" w=full bg-gray-800 p-6 flex justify-around items-center">
                <div className="text-white text-xl">Enter Country Name</div>
            <input className="text-center p-1 text-xl border-red-800 border-2 rounded-xl active:border-pink-500" type="text" value={query} onChange={(e)=> setQuery(e.target.value)} />
            </div>
            <div className="flex justify-center text-xl capitalize text-amber-100 m-5">{`These are the colleges of ${query}`}</div>
            <button onClick={handleclick}></button>

            {data.map((college ,index)  => (
                <div className="grid grid-cols-2 py-2" key={index}>
                    
                    <h3 className="m-auto text-white">{college.name}</h3>
                    <a className="text-blue-300 m-auto hover:text-blue-500 hover:underline underline-offset-8" href={college.web_pages}>{college.web_pages}</a>
                </div>
            ))}
        </div>
    )
}