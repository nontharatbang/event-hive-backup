import React, { useState } from 'react'

const Navigator = () => {
    const [filters, setFilters] = useState({
        option1: false,
        option2: false,
        option3: false,
    })

    const [data, setData] = useState([
        { id: 1, name: 'Item 1', option: 'option1' },
        { id: 2, name: 'Item 2', option: 'option2' },
        { id: 3, name: 'Item 3', option: 'option3' },
        // Additional data items
    ])

    // Function to handle checkbox changes
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }))
    }
    console.log(filters)

    // Apply filters to the data
    const filteredData = data.filter(
        (item) => filters[item.option]
        // console.log(filters[item.option])
    )
    console.log(filteredData)

    return (
        <div>
            <h1>Navigator</h1>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="option1"
                        checked={filters.option1}
                        onChange={handleCheckboxChange}
                    />
                    Option 1
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="option2"
                        checked={filters.option2}
                        onChange={handleCheckboxChange}
                    />
                    Option 2
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="option3"
                        checked={filters.option3}
                        onChange={handleCheckboxChange}
                    />
                    Option 3
                </label>
            </div>
            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Navigator
