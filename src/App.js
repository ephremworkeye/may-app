import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import { useState } from 'react'


function App() {
  const [showModal, setShowModal] = useState(false)
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
      {showEvents && <EventList events={events} handleClick={handleClick}/>
      }

       {/* <Modal /> */}
       {showModal && <Modal handleClose={handleClose} isSalesModal = {true}>
         <h2>Hello world</h2>
         <p>This is simply a text</p>
       </Modal>}
       <div>
         <button onClick={() => setShowModal(true)}>Show Modal</button>
       </div>
    </div>
  );
}

export default App;
