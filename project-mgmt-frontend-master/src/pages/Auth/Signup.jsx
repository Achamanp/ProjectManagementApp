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

const Signup = () => {
    
    
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
            username: ''
        }
    })
    const onSubmit = (data) => {
    console.log('create project data', data)
    }
    
  return (
    <div className='space-y-5 '>
        <h1>Register</h1>
        <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Project Name */}
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="username..."
                                  type="text"
                                  className="border w-full border-gray-300 py-2 px-3"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="email..."
                                  type="text"
                                  className="border w-full border-gray-300 py-2 px-3"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="password..."
                                  type="password"
                                  className="border w-full border-gray-300 py-2 px-3"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
              
                       
                            <Button type="submit" className="w-full py-5">
                              Register
                            </Button>
                          
                        
                      </form>
                    </Form>
    </div>
  )
}

export default Signup
