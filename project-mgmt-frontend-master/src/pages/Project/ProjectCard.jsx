import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from '@/components/ui/button'
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'


const ProjectCard = () => {
  const navigate = useNavigate()
  return (
    <Card className='p-5 w-full lg:max-w-3xl'>
      <div className='space-y-5'>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-5'>
              <h1 onClick={()=> navigate('/project/3')} className='cursor-pointer font-bold text-lg'>
                Create Ecommerce Project
              </h1>
              <DotFilledIcon />
              <p className='text-sm text-gray-400'>fullstack</p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className='rounded-full' variant="ghost" size="icon">
                    <DotsVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => alert("Edit clicked")}>
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => alert("Share clicked")}>
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => alert("Delete clicked")} className="text-red-600">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className='text-gray-500 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className='flex flex-wrap gap-2 items-center'>
          {[1, 1, 1, 1].map((item, index) => (
            <Badge key={index} variant="outline">frontend</Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
