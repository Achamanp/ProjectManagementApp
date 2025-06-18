import React from 'react'

import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'


import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'

const InviteUserForm = () => {


     const form = useForm({
        defaultValues: {
          email: ''
        }
      })
    const onSubmit = (data) => {
    console.log('create project data', data)
  }


  return (
    <div>
      <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Project Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Invite User</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="user email..."
                          type="text"
                          className="border w-full border-gray-300 py-2 px-3"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
      
               
                  <DialogClose asChild>
                    <Button type="submit" className="w-full py-5">
                      Invite User
                    </Button>
                  </DialogClose>
                
              </form>
      </Form>
    </div>
  )
}

export default InviteUserForm
