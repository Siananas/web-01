# TP Question

## 1. `npm install` command also generated a package-lock.json file along with package.json. What is the purpose of this file?
**The automatically generated `package-lock.json`** locks the versions of dependencies installed in a project, ensuring consistency between installations; prevents accidental package upgrades or downgrades when someone else operates the project or deploys it in different environments; improves the speed of installations; provides a clear and detailed view of the project's entire dependency tree; and ensures that the project is able to be deployed on a wide range of different computers and environments.

## 2. By convention, all NPM dependencies use a 3-digit format for version numbers. How do you call this?
**Use `npm list --depth=0`**

## 3. What is a devDependency exactly? What are the differences with a dependency?
**`devDependency` vs `dependency`**: `devDependency` is only for development and testing propose, while `dependency` is used in running application.

## 4. What is a closure/iife ? What was it used for ? What replaced it?
**Closures** is an important use of Immediately Invoked Function Expression (IIFE), which is the ability of a function to use variables or other information outside its local scope. It can be replaced by ES6.

## 5. What is the difference between import * from './utils' and import { parseUrl } from './utils'? What can be the consequences of using one instead of the other?
- `import * from './utils'`: imports all exported values from the './utils' module and binds them to a single namespace object, accessing the imported values using dot notation on the namespace object.
- `import { parseUrl } from './utils'`: imports only the specific export named 'parseUrl' from the './utils' module directly into the current scope, accessing the imported value without using dot notation.
-  If we use `import * from './utils'` might cause a longer code and might import more than necessary ,which cause potential performance issue ; else, if we use `import { parseUrl }` from `'./utils'`, this situation requires a separate import for each named export, which can be cumbersome if multiple values need to be imported from the same module, and in addition, naming conflicts may occur if multiple values with the same name are imported from different modules.

## 6. Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?
**Multiple inheritance and static members

## 7. What are the differences between var and let;
**`let`** provides block scoping, prevents re-declaration within the same scope, and is not subject to hoisting in the same way as `var`.

## 8. What is the .bind(this) stuff? What happens if you delete it? Is it needed when using an arrow function ? why ?
**`.bind(this)`** is used to explicitly bind the value of `this` within a function to a specific object. It creates a new function with the same body as the original function but with a fixed `this` value. When `.bind(this)` is deleted, the behavior of the function may change. Arrow functions do not have their own this binding, because `this` function lexically captures the value of this from its surrounding scope at the time of its definition.

## 9. What does the @ symbol mean in @babel/***?
**The @ symbol in @babel/*** is used to indicate that the package is a scoped package in the npm ecosystem. Scoped packages allow developers to group related packages under a specific namespace.

## 10. What are the advantages of Promises?
**Promise** provides a cleaner and more readable way to handle asynchronous code; helps to avoid the problem of callback hell, making asynchronous code more structured and manageable; provides a centralized way to handle errors by throwing errors within a Promise or explicitly rejected by calling `reject()` are automatically propagated down the Promise chain until they are caught by a `.catch()` handler; supports chaining with `.then()` and `.catch()`, allowing for sequential execution of asynchronous operations; easily tracks the status of asynchronous operations and handle different outcomes accordingly with three different Promise states; allows developers to write asynchronous code in a synchronous style, which is more intuitive and easier to reason about.

## 11. What version of ECMAScript async / await was released in?
**The eighth version of the ECMAScript standard** was released in 2017.

## 12. Component-oriented programming for the web is considered more maintainable. Why?
**Component-oriented programming for the web** promotes best practices such as modularity, reusability, scalability, encapsulation, and separation of concerns, which all contribute to improved maintainability of web applications.

## 13. What is Functional programming?
**Functions and Functional Programming**: Functions are fundamental to code organization; they exist in all higher order programming languages. Generally, functional programming means using functions to the best effect for creating clean and maintainable software. More specifically, functional programming is a set of approaches to coding, usually described as a programming paradigm.

Functional programming is sometimes defined in opposition to object-oriented programming (OOP) and procedural programming. That is misleading as these approaches are not mutually exclusive and most systems tend to use all three.

Functional programming offers clear benefits in certain cases, it’s used heavily in many languages and frameworks, and it’s prominent in current software trends. It is a useful and powerful tool that should be part of the conceptual and syntactic toolkit of every developer.

## 14. Explain what the map() function does?
**map()** creates a new array from calling a function for every array element.

## 15. Explain what the filter() function does?
**filter()** creates a new array filled with elements that pass a test provided by a function.

## 16. Explain what the reduce() function does?
**reduce()** executes a reducer function for array element.

## 17. What is the difference between .then() and async/await when handling asynchronous functions?
**async/await syntax** provides a more natural and synchronous-looking way to write asynchronous code compared to .then() chaining; `async/await` can only be used inside functions marked with the async keyword, while `.then()` can be used anywhere; error handling in `async/await` is done with try/catch blocks, making it similar to synchronous error handling, whereas with `.then()`, error handling is typically done using the `.catch()` method; `async/await` can only be used with functions that return Promises, whereas `.then()` can be used with any function that returns a Promise or even a raw value.

## 18. What does the _ prefix mean on a sass file?
In **Sass**, a CSS preprocessor, the `_` prefix convention is used to indicate partial Sass files. These files are meant to be imported into other Sass files and not compiled on their own.
