"use client"
import React, { FC, useState } from 'react';
interface props {
    onSearch : (query:string)=>void ; 
    initialValue?:string
}

const SearchBar :FC<props> = ({ onSearch ,initialValue }) => {
    const [query, setQuery] = useState(initialValue||'');

    const handleChange = (e:any) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className='w-full'>
            <input onChange={handleChange}  type="text" value={query} placeholder="search" className="bg-gray-50 border w-full h-8 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </form>
    );
};

export default SearchBar;
