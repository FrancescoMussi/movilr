# Movilr

## Demo

[Heroku app](https://movilr.herokuapp.com/)

## Local Setup

- clone repo
- `yarn install`
- `yarn serve`


## Description

### Framework

I have used [Vue](https://vuejs.org/) as js framework, and [Bulma](https://bulma.io/) as css framework.

### Structure

The project is component-based.
`App.vu`e represented the main application file.
The `div` with id `#app` is the part of the DOM controlled by Vue. 
Inside this `div` we inject the two main page components: the `Menu` and the `Search` page.

Menu is the left navigation, where each navigation's item it's represented by its own `MenuItem` child component.
To it are passed as props the name of the item, the svg icon path and a boolean telling Vue if the item is active.

**Notes**: 
- For the demo this value is hardcoded. In a real world scenario we would dynamically assign the `isActive` boolean inside a `onClick` function.
- In a real-world scenario, the various pages of the SPA would be managed by the `Vue-router`. In this case, since we have just one page, I simply inject the `Search` page component into the main app.

The `Search` page contain three child components: the `SearchInput`, the `Card` and the `Notification`.

The `SearchInput` will take the user query and perform a GET request.
This is done using Vue `Watchers`. Vue _'watch'_ changes to the `query` variable, and will make the request with a debounce of 500ms.

Once the list of shows are retrieved from the [Axios](https://github.com/axios/axios) response, they are displayed in a loop using `v-for`. Each value will be passed as a prop to the `Card` component and displayed.
The cards are displayed with a little animation that fade in the opacity of the element.

A dynamic `Notification` error component is displayed in case no results are found or if there is an error with the API.

The `store` represent the application state. In this case it's very little. It just contain three state vars (the shows list and the notification data), one Action (asynchronous action to retrieve the shows list and commit the mutation with the data) and three Mutations to update the app's state.


