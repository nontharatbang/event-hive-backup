import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Footer from '../component/Footer'
import Button from '../component/Button'

import Image from 'next/image'
import Search from '../pages/assets/search.svg'
import Filter from '../pages/assets/filter.svg'

import { useState } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'

function Shops({ shopdata, tags }: any) {
    const [filter, setFilter] = useState(false)
    const [items, setItems] = useState(shopdata)
    const [showItems, setShowItems] = useState(shopdata)
    var searchTag: any[] = []
    const [filters, setFilters] = useState({
        Food: false,
        Sport: false,
        Drink: false,
    })
    // const [data, setData] = useState([
    //     { id: 1, name: 'Item 1', option: 'option1' },
    //     { id: 2, name: 'Item 2', option: 'option2' },
    //     { id: 3, name: 'Item 3', option: 'option3' },
    //     // Additional data items
    //   ]);
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }))
        console.log(filters)
        // filteredData()
        // console.log(showItems)
    }

    // // Apply filters to the data
    // const filteredData = () => {
        // setShowItems(
            // const filteredData = items.filter((item) => {
            //     const nameMatch = item.tags.some(
            //         (tag) =>
            //             // tag.id === value.id &&
            //             filters[tag.tagName]
            //     )
            //     return nameMatch
            // })
        // )
    // }
    // console.log(filteredData)
    // setShowItems(filteredData)
    // useEffect(() => {
    //      // const filteredData = () => {
    //     setShowItems(items.filter((item) => {
    //             const nameMatch = item.tags.some(
    //                 (tag) =>
    //                     // tag.id === value.id &&
    //                     filters[tag.tagName]
    //             )
    //             return nameMatch
    //         })
    //     )
    // // }
    //   }, [showItems]);
    

    const onSearch = (value: string) => {
        setShowItems(
            items.filter((item: { shopName: string }) => {
                const nameMatch = item.shopName.toLowerCase().includes(value)
                return nameMatch
            })
        )
    }

    const handleValue = async (value: any) => {
        setShowItems(
            items.filter((item) => {
                const nameMatch = item.tags.some(
                    (tag) =>
                        // tag.id === value.id &&
                        tag.tagName === value.tagName
                )
                return nameMatch
            })
        )
        // if (value.toggle == true) {
        //     searchTag.push(value.id)
        // } else {
        //     searchTag = searchTag.filter((item: any) => item !== value.id)
        // }
        // console.log(searchTag)

        // for (let index = 0; index < searchTag.length; index++) {
        //     const res = await fetch(
        //         'http://localhost:3000/api/shopsbytags?tags=' + searchTag[index]
        //     ) // Replace with your API endpoint URL
        //     const data = await res.json()
        //     console.log(data)
        //     items.push(data)

        // }
        // setItems(items)

        // var result: any[] = []
        // for (let i = 0; i < items.length; i++) {
        //     for (let j = 0; j < items[i].tags.length; j++) {
        //         if (
        //             searchTag.includes(items[i].tags[j].id) &&
        //             !result.includes(items[i])
        //         ) {
        //             result.push(items[i])
        //         }
        //     }
        // }
        // console.log(result)
        // setItems(result)
        // // if (searchTag.length != 0) {
        //     let temp = searchTag[0]
        //     if (searchTag.length > 1) {
        //         for (let index = 1; index < searchTag.length; index++) {
        //             temp.push(","+searchTag[index])
        //         }
        //     }

        // }
        // setItems(shopdata)
    }

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-grow">
                    <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl">
                        <div className="mx-12 flex flex-row rounded-lg bg-gradient-to-r from-[#EF9323] to-[#5D3891] p-1 md:mx-36 xl:mx-4">
                            <input
                                onChange={(event) =>
                                    onSearch(event.target.value)
                                }
                                name="text"
                                type="text"
                                placeholder="Type event name..."
                                className="max-w input-bordered input w-full rounded-md rounded-r-none border-r-0 bg-white py-2 pl-4 outline-none"
                            />
                            <button className="bg-white">
                                <Image
                                    className="w-6"
                                    src={Search}
                                    alt={'Search'}
                                />
                            </button>
                            <button
                                className="rounded-r-md bg-white pr-2"
                                onClick={() => setFilter(!filter)}
                            >
                                <Image
                                    className="h-6"
                                    src={Filter}
                                    alt={'Filter'}
                                />
                            </button>
                        </div>
                        <div
                            className={`my-4 mx-12 rounded-sm bg-white p-8 md:mx-36 lg:max-w-7xl lg:self-end xl:mx-4 ${
                                filter ? 'block' : 'hidden'
                            }`}
                        >
                            <h4 className="mb-4 text-xl font-extrabold text-primary">
                                Catagories
                            </h4>
                            <div className="grid grid-cols-3 gap-4 lg:grid-cols-5">
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="Food"
                                            checked={filters.Food}
                                            onChange={handleCheckboxChange}
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
                                            onChange={handleCheckboxChange}
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
                                            onChange={handleCheckboxChange}
                                        />
                                        Drink
                                    </label>
                                </div>
                                {/* {tags.map((tag: any) => (
                                    <Button
                                        key={tag.id}
                                        id={tag.id}
                                        data={tag.tagName}
                                        onValue={handleValue}
                                    />
                                ))} */}
                            </div>
                        </div>
                        <h4 className="m-8 mx-auto text-xl font-extrabold text-primary">
                            SEARCH FOR :
                        </h4>
                        <div className="mb-8 grid grid-cols-1 gap-8 place-self-center lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                            {items.map((item: any) => (
                                <Card key={item.id} type="Shop" data={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const session = await getServerSession(
        context.req,
        context.res,
        authOptions
    )
    const res1 = await fetch('https://event-hive-service.onrender.com/api/shops/') // Replace with your API endpoint URL
    const data1 = await res1.json()

    const res2 = await fetch('https://event-hive-service.onrender.com/api/tags/') // Replace with your API endpoint URL
    const data2 = await res2.json()
    return {
        props: {
            session,
            shopdata: data1,
            tags: data2,
        },
    }
}

export default Shops
