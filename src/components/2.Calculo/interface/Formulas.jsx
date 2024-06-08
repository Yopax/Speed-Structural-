import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuMousePointerClick } from "react-icons/lu";

export function Formulas({
  title,
  boton,
  item2,
  description2,
  item3,
  description3,
  item4,
  description4,
  description41,
  item5,
  description5,
  description51,
  item6,
  description6,
  description61,
  item7,
  description7,
  description71,
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default"><LuMousePointerClick />
        {boton}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <h2 className="text-sm font-bold">{item2}:</h2>
          <SheetDescription>{description2}</SheetDescription>
          <h2 className="text-sm font-bold">{item3}:</h2>
          <SheetDescription>{description3}</SheetDescription>
          <h2 className="text-sm font-bold">{item4}:</h2>
          <SheetDescription>{description4}</SheetDescription>
          <SheetDescription>{description41}</SheetDescription>
          <h2 className="text-sm font-bold">{item5}:</h2>
          <SheetDescription>{description5}</SheetDescription>
          <SheetDescription>{description51}</SheetDescription>
          <h2 className="text-sm font-bold">{item6}:</h2>
          <SheetDescription>{description6}</SheetDescription>
          <SheetDescription>{description61}</SheetDescription>
          <h2 className="text-sm font-bold">{item7}</h2>
          <SheetDescription>{description7}</SheetDescription>
          <SheetDescription>{description71}</SheetDescription>

        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
