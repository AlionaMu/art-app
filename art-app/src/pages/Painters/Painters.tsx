import { useState } from 'react'
import { useSelector } from 'react-redux'
import BasicModal from '../../components/BasicModal/BasicModal'
import PaintersCard from '../../components/PaintersCard/PaintersCard'
import { RootState } from '../../store'

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
