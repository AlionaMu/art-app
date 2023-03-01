import { useState } from 'react'
import BasicModal from '../../components/BasicModal/BasicModal'
import PaintersCard from '../../components/PaintersCard/PaintersCard'

function Painters() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <main className='main'>
      <section className='main__title-container'>painters game</section>
      <section className='painters wrapper'>
        <PaintersCard open={open} handleOpen={handleOpen}></PaintersCard>
        <BasicModal open={open} handleClose={handleClose} handleOpen={handleOpen}></BasicModal>
      </section>
    </main>
  )
}

export default Painters
