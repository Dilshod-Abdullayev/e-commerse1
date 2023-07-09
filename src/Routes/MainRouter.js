import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import Main from '../components/Main'
export default function MainRouter() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </div>
    )
}
