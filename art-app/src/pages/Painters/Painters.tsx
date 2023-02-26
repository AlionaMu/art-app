import { useSelector } from 'react-redux'
import PaintersCard from '../../components/PaintersCard/PaintersCard'
import { RootState } from '../../store'

function Painters() {
  const paintersGame = useSelector((state: RootState) => state.paintersGame)
  return (
    <main className='main'>
      <section className='main__title-container'>painters game</section>
      <section className='painters wrapper'>
        <PaintersCard props={paintersGame}></PaintersCard>
      </section>
    </main>
  )
}

export default Painters
