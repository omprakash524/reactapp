import React from "react";
import MealsProvider from './Providers/MealsProvider';
import MealsList from './MealsList';
import Counter from './Counter';


function StateManage(){
    return(
        <div>
            <MealsProvider>
                <MealsList/>
                <Counter/>
            </MealsProvider>

        </div>
    );
};

export default StateManage;