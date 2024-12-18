import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { Sidebar } from '../components/ui/Sidebar'
import { PlusIcon } from '../icons/PlusIcon'
import ShareIcon from '../icons/ShareIcon'

// create generic butoon 
function Dashboard() {
const [modalOpen ,setModalOpen] = useState(false)
// const [onOutSideClick , setOnOutSideClik]= useState(false)
  return (
    <>
    <div>  
       <Sidebar/>
       </div>
    <div className='flex flex-row ml-64 h-screen bg-slate-100'>
      {  
      <CreateContentModal  open= {modalOpen}  onClose={ () => {  setModalOpen(false)}}/> } 
   
      
       <div>
      <div className=' flex  justify-end gap-2 p-2  items-center '>
      
        <Button onButtonClick= { () => setModalOpen(true)} varaint={'primary'}   startIcon= { <PlusIcon size='md' /> } size={'md'}  text={'add content'}  />
        
        <Button varaint={'secondary'}  startIcon= { <ShareIcon size='md' /> } size={'md'}  text={'share'} />
       
        </div>
        
       <div className=' flex  gap-4  p-4  flex-wrap  '>
       <Card  title='Naivair song' type='Youtube' link='https://www.youtube.com/watch?v=iRbmvpExOj8'/>
      <Card title= "Donald tweet" type='Twitter' link='https://x.com/realDonaldTrump/status/1867819780809666804'/>
      </div>
      </div>
      </div>
    </>
  )
}

export default Dashboard
