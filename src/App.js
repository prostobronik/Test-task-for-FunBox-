import Card from './components/Card'
import background from './assets/patern.png'

const DATA_CATS = [
  {
    id: '1',
    name: 'Нямушка',
    additive: 'фуа-гра',
    number: 8,
    portions: '10',
    mouse: '1',
    weight: '0,5',
    description: 'Печень утки разварная с артишоками.',
  },
  {
    id: '2',
    name: 'Нямушка',
    additive: 'рыбой ',
    number: 3,
    portions: '40',
    mouse: '2',
    weight: '2',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    id: '3',
    name: 'Нямушка',
    additive: 'курой',
    number: 0,
    portions: '100',
    mouse: '5',
    weight: '5',
    description: 'Филе из цыплят с трюфелями в бульоне.',
  },
]

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
      <Card data={DATA_CATS} />
    </div>
  )
}

export default App
