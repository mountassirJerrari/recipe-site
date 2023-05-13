
"use client"
import clsx from "clsx";
import { FC ,HTMLAttributes } from "react";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface NutritionCardProps extends HTMLAttributes<HTMLDivElement> {
    nutritionFacts: any[];
}

const NutritionCard: FC<NutritionCardProps> = ({ className, nutritionFacts }) => {
    return (
    <div className={clsx("flex justify-center items-stretch",className)}>
    <List sx={{ width: '100%', bgcolor: '#ffece6', borderRadius: '10px', padding:0, margin: 0, justifyContent: 'space-between'}}>
    <div className="font-bold text-xl ml-5 mt-3 mr-36 mb-2">Nutrition Facts</div>
    {nutritionFacts.map((fact) => (
      <ListItem key={fact.label} disableGutters>
        <ListItemText className="flex flex-row justify-between h-3 mr-5 ml-5 p-0 mb-2.5" primary={fact.label} secondary={fact.value} />
      </ListItem>
    ))}
    </List>
    </div>
    );
}

export default NutritionCard;