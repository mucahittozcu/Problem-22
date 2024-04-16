import { useRef,useState } from 'react'

export default function VideoPlayer() {
  const ref = useRef()
  const [clicked, setClicked] = useState(false)

  console.log(ref.current)
  
  const handlePlayClick = () => {
    ref.current.play()
    setClicked(true)
  }
  const handleStopClick = () => {
    ref.current.pause()
    setClicked(false)
  }

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1  className='text-center font-bold text-3xl'>
        Video Oynatıcı
      </h1>
      <video
        ref={ref}
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      />
      <div className='flex justify-between'>
        <button onClick={handleStopClick} className='text-orange-500 font-semibold'>Duraklat</button>
         <div>{clicked ? "Oynatılıyor" : "Duraklatıldı"}</div>
        <button onClick={handlePlayClick} className='text-indigo-500 font-semibold'>Oynat</button>
      </div>
    </div>
  )
}

//  play(): Videonun oynatılmasını başlatır.
// pause(): Videonun duraklatılmasını sağlar.
// load(): Videonun yeniden yüklenmesini sağlar. Bu, kaynak değiştiğinde veya yeniden başlatmak istediğinizde kullanışlı olabilir.
// canPlayType(type): Belirli bir video türünün tarayıcı tarafından desteklenip desteklenmediğini kontrol eder.
// setCurrentTime(time): Videonun mevcut oynatma süresini belirtilen süreye ayarlar.
// seekTo(time): Belirli bir zamana (saniye cinsinden) atlar.
// requestPictureInPicture(): Videonun picture-in-picture moduna geçmesini talep eder.
// Bu metodlar, <video> elementinin kontrolünü JavaScript tarafından sağlamak için kullanılır ve kullanıcı deneyimini geliştirmek veya özelleştirmek için kullanılabilir. 