import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import UserList from './UserList'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import {
  DotsVerticalIcon,
  PersonIcon
} from '@radix-ui/react-icons'
import {
  Avatar,
  AvatarFallback
} from '@/components/ui/avatar'
import { useNavigate } from 'react-router-dom'

const IssueCard = () => {
  const navigate = useNavigate();
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pb-1 space-y-2">
        <div className="flex justify-between items-center">
          <CardTitle className="cursor-pointer" onClick={()=>navigate('/project/3/issue/10')}>Create Navbar</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Done</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardContent className="p-0 pt-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">FBP - 1</p>
            <DropdownMenu className="w--[30rem] border border-red-400">
                <DropdownMenuTrigger>
            <Button
              size="icon"
              className="bg-gray-900 hover:text-black text-white rounded-full"
            >
              <Avatar>
                <AvatarFallback>
                  <PersonIcon />
                </AvatarFallback>
              </Avatar>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <UserList/>
            </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default IssueCard
