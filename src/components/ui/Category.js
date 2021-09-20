import React from 'react'

const Category = ({category}) => {
    const {id, title, image} = category
    return (
       <a href="!#" className="flex flex-col gap-y-2 transition-all hover:bg-purple-50 items-center text-center p-4">
           <img src={image} alt={title} className="w-12 h-12 rounded border-gray-200"/>
           <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight">{title}</span>
       </a>
    )
}

export default Category
