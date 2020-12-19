import React, { useRef } from "react";

//type for the prop
interface Person { firstName: string; lastName: string }

interface Props {
    text: string;
    person: Person;
    handleChange:(event: React.ChangeEvent<HTMLInputElement>) => void
}
export const TextField: React.FC<Props> = ({handleChange}) => {

   const inputRef = useRef<HTMLInputElement>(null);
   const divRef = useRef<HTMLDivElement>(null);
    return (
    <div ref={divRef}>
        <input ref={inputRef} onChange={handleChange}  />
    </div>)
}