import './App.css';
import { useState } from 'react'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: 'first title', id:1},
    {title: 'second title', id:2},
    {title: 'third title', id:3},
  ])
  const handleClick = (id) => {
    setEvents((preEvents) => {
      return preEvents.filter((event) => {
        return id !== event.id
      })
    })
  }
  return (
    <div className='App'>
      {showEvents && (<div>
        <button onClick={() => {setShowEvents(false)}}>Hide Events</button>
      </div>)}
      
      {!showEvents && (<div>
        <button onClick={() => {setShowEvents(true)}}>Show Events</button>
      </div>)}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index}-{ event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
