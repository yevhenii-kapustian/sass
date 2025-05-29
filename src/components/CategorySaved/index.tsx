import Image from "next/image"
import { CategoryType } from "@/types/type"

type CategorySavedProps = {
    savedCourse: CategoryType[],
    handleRemove: (item: CategoryType) => void
}

const CategorySaved = ({savedCourse, handleRemove}:CategorySavedProps) => {
    return(
        <section className={savedCourse.length > 0 ? "saved" : ""}>
        {savedCourse.length > 0 && <h3 className="saved__title">Your saved courses:</h3>}
        <div className="saved__list">
            {savedCourse.map((item:CategoryType, index:number) => (
                <div className="saved__item" key={index}>
                    <div className={`category__icon category__icon--${item.style}`}>
                        <Image className="category__icon--item" src={item.icon} alt="" width={100} height={100}/>
                    </div>
                    <h3 className="category__name">{item.name}</h3>
                    <p className="category__description">{item.description}</p>
                    <button className="category__button" onClick={() => handleRemove(item)}>Remove Item</button>
                </div>
            ))}
        </div>
    </section>
    )
}

export default CategorySaved