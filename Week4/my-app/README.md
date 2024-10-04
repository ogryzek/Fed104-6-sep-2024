# Week 4: Getting Started with React  
  
We are using [create-react-app](https://create-react-app.dev/docs/getting-started). To do so, make sure it is installed, and then just call it with `npx create-react-app`...
  
i.e.
```
# install
npm install create-react-app

# create a new app
npx create-react-app my-app

# cd into the app, if you'd like
cd my-app
```

Inside the `app.js`, we have a function `App()`. That is rendered oin the index.js. Let's add another component `<Lol />` to the return value of `App()` and a function to support it.  
  
```js
function Lol(props) {
  return (
    <div>
      <p>Hello from me. My name is {props.name}!</p>
      <p>I live in {props.city}.</p>
    </div>
  )
}
```
Add it to the `App()` return value:  
  
```js
function App() {
  return (
      <div class="container">
        <h1>Hello World!</h1>
        <Lol name="Drew" city="Vancouver"/>
      </div>
  );
}
```

## Props & Components in other Files  
  
You can create a component in another file, just make sure to export it, and import what you need. For example, we can create the function `PassengerTickets` in the `PassengerTicket.js` file, then import it with `import PassengerTicket from './PassengerTicket';`  
  
```js
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
```

Add it to the `App.js` return value:
```js
function App() {
  return (
      <div class="container">
        <h1>Hello World!</h1>
        <Lol name="Drew" city="Vancouver"/>
        <PassengerTicket name="Drew" destination="Hawaii" greeting="Dr" seat="44A"/>
      </div>
  );
}
```
