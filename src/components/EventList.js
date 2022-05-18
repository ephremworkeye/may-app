export default function EventList({events, handleClick}) {
    return (
        <div>
            {events.map((event, index) => (
                <div key={event.id}>
                    <p>{index}-{event.title}</p>
                    <button onClick={() => {handleClick(event.id)}}>delete event</button>
                </div>
            ))}
        </div>
    )
} 