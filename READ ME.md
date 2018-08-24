
Welcome fellow Lambda student!

Ahead of our upcoming Sprint Challenge, let's practice a few skills.

As always....


**Part I

[ ] Fork/Clone this repository.

[ ] Complete all the exercises as described inside each assignment file.

[ ] Use console.log() statements to check to see if your code does what it is supposed to do.

[ ] To test your console statements you can run node /assignments/<fileName> and see what prints in your terminal. You can also use an online tool like JSBin, REPL.it, JSFiddle, or even your Chrome developer console.

[ ] Once you finish the exercises in each file, commit your code, and push it to your fork.



** Part II

Use the ForEach, Map, Filter and Reduce methods to solve each question about an array of board games.



** Part III

We're going to create a small coffee business and practice writing Class constructors, inheritance, and functions.

[ ] Create the following classes: The Parent is Person. The Children are Manager and Customer. The Child of Manager is Barista.
[ ] A Person will have a name and age, and can say "Hello"
[ ] A Manager will have an hourly wage, mood, and two abilities. TskTsk function lets the Manager berate a barista for slacking off. Appease function lets the Manager talk to a customer and apologize for the delay on their drink order.
[ ] Customers will have a favorite drink, amount of money in their wallet (a whole integer) and the fuction Pay, which allows them to pay for the coffee from their wallet, then updating their wallet's money.
[ ] Barista will have a phrase (for when they successfully complete an order) and speed (fast or slow). Their functions are takeOrder, which asks the customer for their order, and completeOrder, which tells the customer their drink order and that it is complete.

Stretch goals:

[ ] Add in a tip function for customers, that gives a larger tip for the faster the barista finishes the order. Adjust the barista's speed to become a variable integer using Math.Random()
[ ] Add a chargeCustomer function for baristas, that charges the coffee price and takes the money rom the customer's wallet amount.
[ ] Add an endOfDay function that totals the amount of tips the Barista has received during their shift. Return the total and average per customer served.