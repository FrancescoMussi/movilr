# Movilr

## Demo

For quick reference, the demo can be seen in this [Heroku app](https://movilr.herokuapp.com/)

## Local Setup

- clone repo
- `yarn install`
- `yarn serve`


## Description

### Framework

I have used [Vue](https://vuejs.org/) as js framework, and [Bulma](https://bulma.io/) as css framework.

### Structure

The project is component-based.
`App.vue` represented the main application file.<br/>
Inside it there is a `div` with id `#app`, which is the part of the DOM managed by Vue. <br/>
Inside this `div` we inject the two main components: the `Menu` and the `Search` page.

##### Menu component

Menu is the left sidebar navigation. It's located at `src/components/Menu.vue` <br/>
Each navigation's item it's represented by its own `MenuItem` child component, to whom are passed as props the title of the item, the svg icon path and a boolean telling Vue if the item is active.

**Notes**: 
- For this demo project the boolean value is hardcoded. In a real world scenario we would dynamically update the `isActive` boolean inside a `onClick` function.
- In a real-world scenario, the various pages of the SPA would be managed by the `Vue-router`. In this case, since we have just one page, I simply inject the `Search` page component into the main app.


##### Search component

The `Search` page is located at `src/pages/Search.vue` contain three child components: the `SearchInput`, the `Card` and the `Notification`.

- The `SearchInput` will take the user query and perform a GET request.
This is done using Vue `Watchers`. Vue _'watch'_ changes to the `query` variable, and will make the request with a debounce of 500ms.

- Once the list of shows are retrieved from the [Axios](https://github.com/axios/axios) response, they are displayed in a loop using `v-for`. Each value will be passed as a prop to the `Card` component and displayed.
The cards are displayed with a little animation that fade in the opacity of the element.

- A dynamic `Notification` error component is displayed in case no results are found or if there is an error with the API.

##### Store

The `store` (located at `src/store.js`) represent the application state. In this case it's very little. It just contain three state vars (the shows list and the notification data), one Action (asynchronous action to retrieve the shows list and commit the mutation with the data) and three Mutations to update the app's state.


