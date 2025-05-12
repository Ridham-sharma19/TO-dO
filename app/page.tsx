"use client"
import { BackgroundLines } from "../components/ui/background-lines";
import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

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
              <div className="flex mb-4  justify-between items-center" >
              <h2 className="text-3xl text-white ">{t.todo}</h2>
              <h3 className="text-2xl text-white">{t.desc}</h3>
              <button onClick={()=>deleteHandler(i)} className="bg-red-700 p-1 rounded text-white text-md font-bold"><Trash2 className="bg-red-600"/></button>
            </div>
            
            </li>
           )
  })}
  

  return (
  <BackgroundLines className="flex flex-col items-center w-full min-h-screen px-4 space-y-6  dark:bg-black ">

  <div className="w-full flex justify-center items-center flex-col text-center p-4">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-black dark:text-white border-white dark:border-black bg-transparent backdrop-blur-md">
      TO DO List
    </h1>
    <h3 className="text-xl sm:text-2xl md:text-4xl text-black dark:text-white">
      Just do it!
    </h3>
  </div>

  <form
    onSubmit={submitHandler}
    className="z-10 flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-2xl"
  >
    <input
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      placeholder="Enter the task.."
      type="text"
      className="w-full sm:w-auto z-10 border-2 border-zinc-900 text-white placeholder:text-white rounded-xl px-4 py-2 text-base sm:text-lg hover:scale-105"
    />
    <input
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
      placeholder="Description.."
      type="text"
      className="w-full sm:w-auto z-10 border-2 border-zinc-900 text-white placeholder:text-white rounded-xl px-4 py-2 text-base sm:text-lg hover:scale-105"
    />
    <button
      className="w-full sm:w-auto z-10 bg-green-600 hover:bg-green-700 text-white rounded-2xl px-4 py-2 text-base sm:text-lg hover:scale-105 transition-all"
    >
      Add+
    </button>
  </form>

  <div className="z-10 w-full max-w-2xl border-2 border-white rounded-2xl p-6 text-white mt-4 overflow-x-auto">
    <ul>{renderTask}</ul>
  </div>

</BackgroundLines>

  );
}
