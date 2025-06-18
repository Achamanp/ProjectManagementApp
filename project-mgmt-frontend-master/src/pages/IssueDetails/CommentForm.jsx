import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Avatar,
  AvatarFallback
} from '@/components/ui/avatar' 
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const CommentForm = ({ issueId }) => {
  const form = useForm({
    defaultValues: {
      content: ''
    }
  })

  const onSubmit = (data) => {
    console.log('create comment data', data)
    // You can send `data.content` along with `issueId` to your backend here.
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Write content..."
                    type="text"
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button type="submit" size="sm">
          Save
        </Button>
      </form>
    </Form>
  )
}

export default CommentForm