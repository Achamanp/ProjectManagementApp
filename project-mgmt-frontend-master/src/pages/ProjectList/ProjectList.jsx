import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import ProjectCard from '../Project/ProjectCard'

export const tags =[
    "all","react","nextjs", "spring boot","mysql","mongodb","angular","python","flask","django"
]

const ProjectList = () => {
    const [keyword, setKeyword] = useState("");
    
    const handleFilterChange = (type, value) => {
        console.log("filter type:", type, "value:", value);
    }
    
    const handleSearchChange = (e) => {
        setKeyword(e.target.value);
        console.log("search:", e.target.value);
    }
    
  return (
    <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
      <section className='filterSection'>
        <Card className='p-5 sticky top-10'>
          <div className='flex justify-between lg:w-[20rem]'>
            <p className='text-xl -tracking-wider'>filters</p>
            <Button variant="ghost" size="icon">
               <MixerHorizontalIcon/>
            </Button>
          </div>
          <CardContent className='mt-5'>
            <ScrollArea className="h-[70vh]">
                <div className="space-y-10">
                    <div>
                        <h1 className='pb-4 text-gray-400 border-b'>Category</h1>
                        <div className='pt-6'>
                            <RadioGroup className="space-y-4" defaultValue="all" onValueChange={(value)=>handleFilterChange("category",value)}>
                                 <div className="flex items-center space-x-3">
                                    <RadioGroupItem value='all' id='cat-all'/>
                                    <Label htmlFor="cat-all">all</Label>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value='frontend' id='cat-frontend'/>
                                    <Label htmlFor="cat-frontend">front end</Label>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value='fullstack' id='cat-fullstack'/>
                                    <Label htmlFor="cat-fullstack">full stack</Label>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value='backend' id='cat-backend'/>
                                    <Label htmlFor="cat-backend">backend</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>

                    <div>
                        <h1 className='pb-4 text-gray-400 border-b'>Tags</h1>
                        <div className='pt-6'>
                            <RadioGroup className="space-y-4" defaultValue="all" onValueChange={(value)=>handleFilterChange("tags",value)}>
                                {tags.map((tag, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <RadioGroupItem value={tag.toLowerCase().replace(/\s+/g, '')} id={`tag-${tag.toLowerCase().replace(/\s+/g, '')}`}/>
                                        <Label htmlFor={`tag-${tag.toLowerCase().replace(/\s+/g, '')}`}>{tag}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>
      <section className='projectListSection w-full lg:w-[48rem]'>
        <div className='flex gap-2 items-center pb-5 justify-between'>
            <div className='relative p-0 w-full'>
                <Input
                    value={keyword}
                    onChange={handleSearchChange}
                    placeholder="Search Project"
                    className="w-full pl-10 pr-4 py-2"
                />
                <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400"/>
            </div>
        </div>
        <div className='space-y-5 min-h-[74vh]'>
            {
                keyword 
                ? [1,2,3].map((item) => <ProjectCard key={item}/>)
                : [1,2,3,4].map((item) => <ProjectCard key={item}/>)
            }
        </div>
      </section>
    </div>
  )
}

export default ProjectList