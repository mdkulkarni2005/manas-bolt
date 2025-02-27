"use client";

import { MessagesContext } from "@/context/MessagesContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import Color from "@/data/Color";
import Lookup from "@/data/Lookup";
import { ArrowRight, Link, Link2 } from "lucide-react";
import React, { useContext, useState } from "react";
import SignInDialog from "./SignInDialog";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

function Hero() {
  const [userInput, setUserInput] = useState();
  const { messages, setMessages} = useContext(MessagesContext);
  const {userDetail,setUserDetail}=useContext(UserDetailContext)
  const [openDialog,setOpenDialog]=useState(false)
  const CreateWorkspace=useMutation(api.workspace.CreateWorkspace)
  const router=useRouter()

  const onGenerate = async (input) => {
    if(!userDetail?.name)
    {
        setOpenDialog(true)
        return
    }
    const msg={
      role: "user",
      content: input,
    }
    setMessages(msg);

    const workspaceId=await CreateWorkspace({
      user:userDetail._id,
      messages: [msg]
    })
    console.log(workspaceId)
    router.push('/workspace/'+workspaceId)
  };

  return (
    <div className="flex flex-col items-start ml-8 md:ml-16 mt-36 xl:mt-52 gap-2 max-w-2xl">
      <h2 className="font-bold text-4xl">{Lookup.HERO_HEADING}</h2>
      <p className="text-gray-400 font-medium">{Lookup.HERO_DESC}</p>
      <div
        className="p-5 border rounded-xl w-full mt-3"
        style={{
          backgroundColor: Color.BACKGROUND,
        }}
      >
        <div className="flex gap-3">
          <textarea
            placeholder={Lookup.INPUT_PLACEHOLDER}
            onChange={(event) => setUserInput(event.target.value)}
            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none"
          />
          {userInput && (
            <ArrowRight
              onClick={() => onGenerate(userInput)}
              className="bg-blue-500 p-2 h-10 w-10 rounded-md cursor-pointer"
            />
          )}
        </div>
        <div>
          <Link className="h-5 w-5" />
        </div>
      </div>

      <div className="flex mt-8 flex-wrap items-start justify-start gap-3">
        {Lookup?.SUGGSTIONS.map((suggestion, index) => (
          <h2
            className="p-1 px-2 border rounded-full text-sm text-gray-400 hover:text-white cursor-pointer"
            key={index}
            onClick={()=>onGenerate(suggestion)}
          >
            {suggestion}
          </h2>
        ))}
      </div>
      <SignInDialog openDialog={openDialog} closeDialog={(v)=>setOpenDialog(v)} />
    </div>
  );
}

export default Hero;