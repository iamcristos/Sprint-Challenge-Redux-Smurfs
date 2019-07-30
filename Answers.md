1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

-concat()
-filter()
-find()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions are payload of information that sends data from our application to the store. They are sent to the store by using dispatch.

-Reducers specifies how the application state changes with respect to the action dispatched to the store.

-The store brings holds the application state, allows access to the state and allows state to be updated. The store is the single source of truth because it's in the store you can find and update the state, it's brings the action and reducers together.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state exists when we handle our state externally a porpular example is using redux to handle state, while component state is when we handle our state in a component. When handling states that involes changes in UI for example modal, input fields, form valiodation its good we use Component state, when handling states that involes api call its good we use Aplication state especially for a large project.

1.  What is middleware?

-A middleware is a function that runs between a request and a response. In redux a middleware runs between the reducers and action dispatched.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-Redux-thunk is a middleware that allows us perform asynchronous functions


1.  Which `react-redux` method links up our `components` with our `redux store`?

- CONNECT
