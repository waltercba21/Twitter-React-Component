import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){


    return (
        <section className='App'> 
        <TwitterFollowCard userName='Waltercba'> Walter Cordoba </TwitterFollowCard>
        <TwitterFollowCard userName='AgusSand'> Agustina Sandon</TwitterFollowCard>
        <TwitterFollowCard userName='AdriCanale'> Adri Canale  </TwitterFollowCard>
        <TwitterFollowCard userName='gonzaUcb'> Gonzalo UCB </TwitterFollowCard>
        </section>
        
    )
}