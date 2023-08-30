import React from 'react'
import { Routes, Route } from 'react-router'
import items from './components/items' 

export default (
    <Routes>
        <Route path='/' component={ items } exact />
    </Routes>
)
