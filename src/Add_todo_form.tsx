import { useRef } from "react";
import { todoAtom } from "./atom/todo.atom";
import { trans } from "@mongez/localization";


const Add_todo_form = () => {

  const inputRef = useRef<HTMLInputElement | null>(null) 

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value?.trim();
    if (!inputValue) return
    todoAtom.add(inputValue);
    inputRef.current!.value = '';
  }

  return (
    <div className="mb-4">
      <form onSubmit={handelSubmit} className='relative'>
        <input type="text" ref={inputRef}
          id="first_name" className=" absolute bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-14" placeholder="Write your Todo" required />
        <button type="submit" className="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center end-2.5 my-2">{trans('AddButtonText')}</button>
      </form>
    </div>
  )
}

export default Add_todo_form
