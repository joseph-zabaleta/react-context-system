# React Context System

## Table of Contents

---

-   [Overview](#overview)
    -   [Sources of Data](#sources-of-data)
    -   [Method 1: Default Value](#method-1-default-value)
    -   [Method 2: Provider Component](#method-2-provider-component)
    -   [Consumers of Data](#consumers-of-data)
    -   [Method 1: this.context](#method-1-this.context)
    -   [Method 2: Consumer Component](#method-2-consumer-component)
-   [Installation](#installation)
-   [Authors](#authors)
-   [Collaborations](#collaborations)
-   [License](#license)
-   [Acknowledgements / Resources](#acknowledgements-/-resources)

---

## Overview

This is an example of how the React Context System works. It shows the two ways we get data into the context system pipeline and the two ways of getting information out.

### Sources of Data

The two ways to get data into the Context Object are providing a `default value`, or using the `Provider Component`. This provider component is not the same thing as from the Redux library.

#### Method 1: Default Value

This method is where you provide your initial context object with a default value. The default value can be any javascript variable type

-   String
-   Int
-   Object
-   Array

Example for reference: `src/contexts/LanguageContext.js`

#### Method 2: Provider Component

This method utilizes the provider component that comes with the Context System. We wrapped the components that require access to the context object with `Context.Provider` component. This component takes a special prop name of `value` and anything passed in as value will be available on children components with `this.context`.

NOTE: Nested Children must establish a connection to the context object by implementing the following:  
`static contextType = RandomContext`
Where `contextType` is a special keyword and `RandomContext` is the name of your Context Object.

Example for reference:  
Provider: `src/components/App.js`  
contextType: `src/components/Field.js`

### Consumers of Data

The two ways that the context object is consumed by components are through the `this.context` or using the `Consumer Component`

#### Method 1: this.context

In order to have access to this.context within your nested component. You must first have wrapped some parent component with a `Provider Component`. Then inside your nested component define your `contextType`. After this, your context object will be available for use on `this.context`.

Example for reference:  
Provider: `src/components/App.js`  
contextType: `src/components/Field.js`

#### Method 2: Consumer Component

Consumer component is used when wanting to access multiple context types. Within nested components, you will no longer make use of `this.context` but creating a `Consumer Component` that accepts a function as its only child. This function will be called with a context value, and return some amount of jsx.

Example for reference:
Consumer: `src/components/Button.js`

## Installation

To run this application locally please review the following code snippets

```bash
git clone https://github.com/joseph-zabaleta/react-context-system.git
cd react-context-system
npm install
```

This will copy this repository locally and install all dependencies required. Then all you have to do is execute `npm start` to get the application running on `localhost:3000`.

## Authors

-   Software Developer: Joseph Zabaleta
    -   [Official Github](https://github.com/joseph-zabaleta)

## License

This project is under the MIT License.

## Acknowledgements / Resources

-   [Modern React with Redux](https://www.udemy.com/course/react-redux/)
