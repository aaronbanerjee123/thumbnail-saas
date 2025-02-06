"use server"

import { redirect } from "next/navigation";
import { auth } from "~/server/auth";


const Page = async () =>{
    const serverSession = await auth();

    if(serverSession?.user){
        redirect("/dashboard");
    }

    return <div>Sign in here</div>
}

export default Page;