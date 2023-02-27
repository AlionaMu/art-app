import { useSelector } from 'react-redux'
import PaintersCard from '../../components/PaintersCard/PaintersCard'
import { RootState } from '../../store'

function Painters() {
  return (
    <main className='main'>
      <section className='main__title-container'>painters game</section>
      <section className='painters wrapper'>
        <PaintersCard></PaintersCard>
      </section>
    </main>
  )
}

export default Painters
