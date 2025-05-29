'use client'

import Image from "next/image"
import { category } from "@/data/data"
import { CategoryType } from "@/types/type"

type CategoryProps = {
    handleSave: (item: CategoryType) => void,
}

const CategoryItems = ({handleSave}:CategoryProps) => {
    return(
        <section className="category">
            <h2 className="category__title">
                Choice favourite course from top category
            </h2>
            <div className="category__list">
                {category.map((item:CategoryType, index:number) => (
                    <div className="category__item" key={index}>
                        <div className={`category__icon category__icon--${item.style}`}>
                            <Image className="category__icon--item" src={item.icon} alt="" width={100} height={100}/>
                        </div>
                        <h3 className="category__name">{item.name}</h3>
                        <p className="category__description">{item.description}</p>
                        <button onClick={() => handleSave(item)} className="category__button">Save course</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryItems