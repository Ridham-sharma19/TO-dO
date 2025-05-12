import Image from "next/image";

export default function Home() {
  return (
   <div>
     <div className="w-full flex justify-center p-6 flex-col items-center ">
      <h1 className="text-5xl text-black font-semibold">TO DO List</h1>
      <h3 className="text-3xl text-black" >Just do it</h3>
     </div>

     <div className="w-full flex justify-center items-center gap-2  bg-amber-300">
       <input placeholder="Enter the task.." type="text"  className="border-zinc-900 rounded-xl border-2 px-4 py-1  text-xl"/>
       <input placeholder="Description.." type="text"  className="border-zinc-900 rounded-xl border-2 px-4 py-1  text-xl"/>
       <button className="px-3 rounded-2xl py-2 cursor-pointer bg-black text-amber-50">Add+</button>
     </div>
    

   </div>
  );
}
