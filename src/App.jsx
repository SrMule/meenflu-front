import Navbar from './components/Navbar'
import Map from './components/Map'
import './App.css'

function App() {

    return (
        <div className='w-full min-h-screen bg-white'>
            <Navbar />
            <main className='relative z-0'>
                <Map/>
            </main>
            <footer></footer>
        </div>
    )
}

export default App
