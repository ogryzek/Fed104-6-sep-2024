# Week 5 Exercises  
  
## Exercise 06  

Display a user’s name, email, and age.

Add a condition to the component so that it only displays the user’s age if their age is greater than 18. If the user’s age is less than 18, display a message saying “Sorry, you are too young to view this information.”

Example of user object:
```js
const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 14,
};
```

## Exercise 07  
  
Create a select that allows users to check the current weather condition (sunny, raining, or snowing) and passes this value to a WeatherDisplay component as a prop.

In the WeatherDisplay component, add a condition to display either a message saying “It’s sunny outside!” if the weather is sunny, or a message saying “Bring an umbrella, it’s raining!” if the weather is raining. Add a third condition to display a message saying “It’s snowing outside! Bundle up!” if the weather is snowing.

![exercise 07 picture of dropdown](exercise07.png)  
