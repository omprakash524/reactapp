import React from "react";

import { useMealsListContext } from "./Providers/MealsProvider";

const MealsList = () =>{
    const {meals} = useMealsListContext();

    return(
        <div>
            <h1>Meals List using context API</h1>
            {meals.map((meal,index)=>(
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    );
};

export default MealsList;