import { imgs, categories } from "../data"
import { CategoryCard } from "./CategoryCard"

const [
    imgEgipcios,
    imgGriegos,
    imgRomanos,
    imgNordicos
] = imgs

export const CategoryList = () => {
    return (
        <div className="flex flex-row flex-wrap  justify-evenly gap-4 mt-10">
            {/* Category Link Egipcios */}            
            <CategoryCard
                category={categories.egipcios}
                src={imgEgipcios}
                alt={`Categoría ${categories.egipcios}`}
                gradientColor='from-lime-500 to-teal-500'
            />

            {/* Category Link Griegos */}            
            <CategoryCard
                category={categories.griegos}
                src={imgGriegos}
                alt={`Categoría ${categories.griegos}`}
                gradientColor='from-cyan-200 to-pink-200'
            />

            {/* Category Link Romanos */}        
            <CategoryCard
                category={categories.romanos}
                src={imgRomanos}
                alt={`Categoría ${categories.romanos}`}
                gradientColor='from-red-400 to-pink-300'
            />

            {/* Category Link Nordicos */}            
            <CategoryCard
                category={categories.nordicos}
                src={imgNordicos}
                alt={`Categoría ${categories.nordicos}`}
                gradientColor='from-purple-500 to-pink-500'
            />
        </div>
    )
}
