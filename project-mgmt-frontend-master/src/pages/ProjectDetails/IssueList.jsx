import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'

import CreateIssueForm from './CreateIssueForm'

import IssueCard from './IssueCard'
import { PlusIcon } from '@radix-ui/react-icons'

const IssueList = ({title, status}) => {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px]">
            <CardHeader>
                {title}
            </CardHeader>
            <CardContent className="px-2">
                <div className='space-y-2'> 
                    {[1,1,1,1,1].map((item)=><IssueCard key={item}/>)}

                </div>
            </CardContent>

            <CardFooter>
                <DialogTrigger>
                    <Button variant="outline" className="w-fulll flex items-center gap-2">
                        <PlusIcon/>
                        Create Issue</Button>
                </DialogTrigger>
            </CardFooter>
        </Card>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Creare New Issue</DialogTitle>
            </DialogHeader>
            <CreateIssueForm/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default IssueList
