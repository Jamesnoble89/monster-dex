import React from 'react'

import './search-box.styles.css'

export const  SearchBox = ({placeholder, handleChange}: {placeholder: string, handleChange: React.FormEventHandler<HTMLInputElement>}) => (
    <input
        className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)