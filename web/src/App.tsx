import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { GameBanner } from './components/GameBanner'

import './styles/main.css'

import LogoImg from './assets/Logo-NLW.svg'
import { CreatAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'

interface Game {
    id: string
    tittle: string
    bannerUrl: string
    _count: {
        ads: number
    }
}

function App() {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        axios('http://localhost:3333/games').then((response) => {
            setGames(response.data)
        })
    }, [])

    return (
        <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
            <img src={LogoImg} alt="" />
            <h1 className="text-6xl text-white font-black mt-20">
                Seu{' '}
                <span className="text-transparent bg-nlw-gradient bg-clip-text">
                    duo
                </span>{' '}
                está aqui.
            </h1>

            <div className="flex flex-6-cols gap-6 mt-16">
                {games.map((game) => {
                    return (
                        <GameBanner
                            key={game.id}
                            bannerUrl={game.bannerUrl}
                            title={game.tittle}
                            adsCount={game._count.ads}
                        />
                    )
                })}
            </div>
            <Dialog.Root>
                <CreatAdBanner />
                <CreateAdModal />
            </Dialog.Root>
        </div>
    )
}

export default App
