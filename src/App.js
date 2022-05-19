import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import { useState } from 'react'
import NewEventForm from './components/NewEventForm';


function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])
  

  const addEvent = (event) => {
    setEvents((preEvents)=> {
      return [...preEvents, event]
    })
    setShowModal(false)
  }

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
         <NewEventForm addEvent={addEvent} />
       </Modal>}
       <div>
         <button onClick={() => setShowModal(true)}>Add New Event</button>
       </div>
    </div>
  );
}

export default App;
