import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Badge} from '@/components/ui/badge'
import { Button } from "@/components/ui/button"
import InviteUserForm from './InviteUserForm'
import {ScrollArea} from '@/components/ui/scroll-area'
import IssueList from './IssueList'
import ChatBox from './ChatBox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { PlusIcon } from 'lucide-react'


const ProjectDetails = () => {
    const handleProjectInvitation = ()=>{

    }
  return (
    <>
    <div className='mt-5 lg:px-10'>
        <div className='lg:flex gap-5 justify-between pb-4'>
            <ScrollArea className="h-screen lg:w-[69%] pr-2" >
                <div className='text-gray-400 pb-10 w-full'>
                    <h1 className='text-lg font-semibold pb-5'>Create Ecommerce Website</h1>
                     <div className='space-y-5 pb-10 text-sm'>
                    <p className='w-full md:max-w-lg lg:max-w-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                    <div className='flex'>
                        <p className='w-36'>Project Lead</p>
                        <p>Achaman</p>
                    </div>
                    <div className='flex'>
                        <p className='w-36'>Members :</p>
                        <div className='flex items-center gap-2'>
                            {[1,2,3,4].map((item)=><Avatar className="cursor-pointer" key={item}>
                                <AvatarFallback>A</AvatarFallback>
                                </Avatar>)}
                        </div>    
                       <Dialog>
                           <DialogTrigger asChild>
                                    <Button className='ml-2 mt-1' size="sm" variant="outline" onClick={handleProjectInvitation}>
                                        <span >
                                            Invite
                                        </span>
                                        <PlusIcon className='w-3 h-3'/>
                                    </Button>
                           </DialogTrigger>
                           <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Invite User</DialogTitle>
                            </DialogHeader>
                            <InviteUserForm/>
                           </DialogContent>
                       </Dialog>
                    </div>
                     <div className='flex'>
                        <p className='w-36'>Category :</p>
                        <p >Fullstack</p>
                    </div>
                    <div className='flex'>
                        <p className='w-36'>Status :</p>
                        <Badge>In Progress</Badge>
                    </div>
                </div>
                <section >
                    <p className='py-5 border-b text-lg -tracking-wider'>Tasks</p>
                    <div className='lg:flex md:flex gap-5 justify-between py-5'>
                        <IssueList status="pending" title="Todo List"/>
                        <IssueList status="In-Progress" title="In Progress"/>
                        <IssueList status="done" title="Done"/>
                    </div>
                </section>
                </div>
               
            </ScrollArea>
            <div className='lg:w-[30%] rounded-md sticky right-5 top-0'>
                <ChatBox/>
            </div>

        </div>

    </div>
    </>
  )
}

export default ProjectDetails