import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate()
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/room/${input}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter your name' />
                <button>Join</button>
            </div>
        </form>
    )
}

export default HomePage
