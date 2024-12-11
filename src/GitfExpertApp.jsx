import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitfExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    //setCategories([...categories, 'valorant'])
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/** Titulo */}
      <h1>GitfExpertApp</h1>

      {/** Input */}
      <AddCategory
        onNewCategory={onAddCategory}
        //setCategories={setCategories}
      />

      {/** Listado de Gif */}

      
        {categories.map((category) => {
          return (
          //<li key={category}>{category}</li>
          <GifGrid key={category} category={category}/>
        )
        })}
      

      {/** Gif Item */}
    </>
  );
};
