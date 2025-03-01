import '@vidstack/react/player/styles/base.css'
import { MediaPlayer, MediaProvider } from '@vidstack/react'

export default function Test() {
  return (
    <MediaPlayer
      src="https://transito.serttel.com.br/cttupe/index.php/getHls/192.168."
      controls
    >
      <MediaProvider />
    </MediaPlayer>
  )
}
