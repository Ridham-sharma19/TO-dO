"use client"
import React, { useState } from "react";

interface MainTask {
  todo: string;
  desc: string;
}

export default function Home() {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState<MainTask[]>([]); // ✅ Correct typing

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMainTask([...mainTask, { todo, desc }]);
    setTodo("");
    setDesc("");
  }
  function deleteHandler(i:any){
    let presentTask=[...mainTask]
    presentTask.splice(i,1)
    setMainTask(presentTask)
  }

  let renderTask:any=<h2>No task available</h2>
  if(mainTask.length>0){renderTask=mainTask.map((t,i)=>{
           return(
            <li key={i} >
              <div className="flex mb-4 justify-between items-center" >
              <h2 className="text-3xl">{t.todo}</h2>
              <h3 className="text-2xl">{t.desc}</h3>
              <button onClick={()=>deleteHandler(i)} className="bg-red-700 p-1 rounded text-white text-md font-bold">Delete</button>
            </div>
            
            </li>
           )
  })}
  

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full flex justify-center p-6 flex-col items-center ">
        <h1 className="text-5xl text-black font-semibold">TO DO List</h1>
        <h3 className="text-3xl text-black">Just do it</h3>
      </div>

      <form onSubmit={submitHandler} className="w-full flex justify-center items-center gap-2  bg-amber-300">
        <input
          value={todo}
          placeholder="Enter the task.."
          type="text"
          className="border-zinc-900 rounded-xl border-2 px-4 py-1  text-xl"
          onChange={(e)=>{
            setTodo(e.target.value)
          }}
        />
        <input
        onChange={(e)=>{
            setDesc(e.target.value)
          }}
          value={desc}
          placeholder="Description.."
          type="text"
          className="border-zinc-900 rounded-xl border-2 px-4 py-1  text-xl"
        />
        <button className="px-3 rounded-2xl py-2 cursor-pointer bg-black text-amber-50">
          Add+
        </button>
      </form>
      <div className="bg-red-300 w-5xl">
        <ul>
          {renderTask}
        </ul>

      </div>
    </div>
  );
}
