import Title from './components/Title'
import Counter from './components/Counter'
import useCountdown from './hooks/useCountdown'

import picture from './assets/pics.gif'

import './App.css'

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2023 00:00:00")

  return (
    <div className="App" style={{backgroundImage: `url(${picture})`}}>
      <div className="container">
        <Title title="contagem regressiva para 2023" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
