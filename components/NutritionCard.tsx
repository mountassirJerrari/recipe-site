
import clsx from "clsx";
import { FC ,HTMLAttributes } from "react";
import * as React from 'react';

import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface NutritionCardProps extends HTMLAttributes<HTMLDivElement> {
    nutritionFacts: any[];
}

type CardProps = React.ComponentProps<typeof Card>

const NutritionCard: FC<NutritionCardProps> = ({ className, nutritionFacts}) => {
    return (
      <Card className={cn("w-[380px] bg-facts", className)}>
      <CardHeader>
        <CardTitle>Nutrition Facts</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {nutritionFacts.map((fact:any) => (
            <div
              key={fact.label}
              className="mb-3.5 grid grid-cols-[25px_1fr] items-start pb-1 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-putput" />
              <div className="flex flex-row justify-between align-middle">
                <p className="text-sm font-medium leading-none">
                  {fact.label}
                </p>
                <p className="text-sm ml-3 whitespace-nowrap text-muted-foreground">
                  {fact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default NutritionCard;
