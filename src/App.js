import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import { useState } from 'react'


function App() {
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: 'first title', id:1},
    {title: 'second title', id:2},
    {title: 'third title', id:3},
  ])
  console.log(showModal)
  const handleClick = (id) => {
    setEvents((preEvents) => {
      return preEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  
  const handleClose = () => {
    setShowModal(false)
  }
  

  const subtitle = 'This is a sub-title'
  return (
    <div className='App'>
      <Title title='First title' subtitle={subtitle}/>
     
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

       {/* <Modal /> */}
       {showModal && <Modal handleClose={handleClose}>
         <h1>Hello world</h1>
         <p>This is simply a text</p>
       </Modal>}
    </div>
  );
}

export default App;
