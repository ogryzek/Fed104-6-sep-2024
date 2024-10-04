/*  Exercise 02
Create a functional component that will be responsible for a passenger ticket.
The components gets those parameters:
  - Name
  - Destination
  - Greeting (Dr/Jr/Sr/Ms)
  - Seat
The component will return a div with these details.
Render this component twice, each time with different information.
*/

function PassengerTicket(props) {
    return (
        <div className="Passenger-Tickets">
        <h2>Passenger Ticket</h2>
        <p>Name: {props.name}</p>
        <p>Destination: {props.destination}</p>
        <p>Greeting: {props.greeting}</p>
        <p>Seat: {props.seat}</p>
        </div>
    );
}

export default PassengerTicket;