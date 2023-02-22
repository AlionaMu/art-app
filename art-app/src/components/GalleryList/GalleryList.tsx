import GalleryCard, { Item } from '../GalleryCard/GalleryCard'
import './GalleryList.scss'

import { images } from '../../data/images'

// export interface ItemType {
//   author: string
//   name: string
//   year: string
//   imageNum: string
// }

const GalleryList = () => {
  console.log(images)
  return (
    <>
      <main className='main wrapper'>
        {images ? (
          <div className='gallery'>
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
