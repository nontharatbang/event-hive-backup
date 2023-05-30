import { useState } from 'react'
import Image from 'next/image'
import Checked from '../pages/assets/checked.svg'
import Unchecked from '../pages/assets/unchecked.svg'

interface ButtonProps {
    // id: any
    // data: string
    //props: ButtonProps
    onValue: any
}

export default function Button({ value, onChange }) {
    const [toggle, setToggle] = useState(false)
    
    // const jsonData = {tags : [ {
    //     id: props.id,
    //     toggle: toggle,
    // }
    // ]
    // }
    // const jsonData = {
    //     id: props.id,
    //     tagName: props.data,

    // }
    const [filters, setFilters] = useState({
        Food: false,
        Sport: false,
        Drink: false,
    })
    const handleClick = (event) => {
        const { name, checked } = event.target;
        setFilters(prevFilters => ({
          ...prevFilters,
          [name]: checked
        }));// Set your new state value here
        onChange(filters);
        console.log(filters)
      };
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFilters(prevFilters => ({
          ...prevFilters,
          [name]: checked
        }));
 
      }
    // props.onValue(filters)
    //   // Apply filters to the data
    //   const filteredData = data.filter(item => 
    //     filters[item.option]
    //     // console.log(filters[item.option])
    //   );
    //   console.log(filteredData)// console.log(showItems)
    

    const tagAlert = () => {
        // setToggle(!toggle)
        console.log(filters)
        props.onValue(filters)
    }

    return (
        <>
            {/* <div className="flex self-center">
                <button onClick={() => tagAlert()}>
                    {toggle ? (
                        <Image className="w-6" src={Unchecked} alt={''} />
                    ) : (
                        <Image className="w-6" src={Checked} alt={''} />
                    )}
                </button>
                {props.data}
            </div> */}
           <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="Food"
                                            
                                            checked={filters.Food}
                                            onClick={handleClick}
                                            // onChange={(e) => {handleCheckboxChange(e)
                                            //     tagAlert()

                                            // }
                                        // }
                                        />
                                        Food
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="Sport"
                                            checked={filters.Sport}
                                            onClick={handleClick}
                                            // onChange={(e) => {handleCheckboxChange(e)
                                            //     tagAlert()

                                            // }
                                        // }
                                            // onChange={handleCheckboxChange}
                                        />
                                        Sport
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="Drink"
                                            checked={filters.Drink}
                                            onClick={handleClick}
                                            // onChange={(e) => {handleCheckboxChange(e)
                                            //     tagAlert()

                                            // }
                                        // }
                                            // onChange={handleCheckboxChange}
                                        />
                                        Drink
                                    </label>
                                </div> 
        </>
    )
}
