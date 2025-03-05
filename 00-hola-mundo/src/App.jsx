import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'kai_Tw',
    name: 'Kai',
    isFollowing: true
  },
  {
    userName: 'Duwang292',
    name: 'Duwang',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel',
    isFollowing: false
  }
]

export function App () {

  return(
    <section className='App'>
       {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard
            key = {userName}
            userName = {userName}
            initialIsFollowing = {isFollowing}
          >
            {name}
          </TwitterFollowCard>
         ))
       }
    </section>
  )
}