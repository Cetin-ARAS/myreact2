
import React, { useContext } from 'react'
import {TemaVerisi} from '../App'

export default function Icerik() {
  return (
    <div style={useContext(TemaVerisi)}>
        <h1>React Öğreniyorum</h1>
        <h2>useContect ile componentler arası veri taşıma</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate quisquam optio excepturi rerum modi ducimus eligendi ratione? Facere atque optio ratione recusandae quibusdam voluptate ipsa esse pariatur enim et.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate quisquam optio excepturi rerum modi ducimus eligendi ratione? Facere atque optio ratione recusandae quibusdam voluptate ipsa esse pariatur enim et.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate quisquam optio excepturi rerum modi ducimus eligendi ratione? Facere atque optio ratione recusandae quibusdam voluptate ipsa esse pariatur enim et.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate quisquam optio excepturi rerum modi ducimus eligendi ratione? Facere atque optio ratione recusandae quibusdam voluptate ipsa esse pariatur enim et.</p>
    </div>
  )
}
