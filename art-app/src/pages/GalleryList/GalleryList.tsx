import GalleryCard from '../../components/GalleryCard/GalleryCard'
import { Item } from '../../types'
import './GalleryList.scss'

import { images } from '../../data/images'

const GalleryList = () => {
  return (
    <>
      <main className='main'>
        <section className='main__title-container'>gallery</section>
        {images ? (
          <div className='gallery wrapper'>
            {images.map((item: Item) => {
              return <GalleryCard props={item} key={item.imageNum} />
            })}
          </div>
        ) : (
          <h2> List is empty </h2>
        )}
      </main>
    </>
  )
}

export default GalleryList
