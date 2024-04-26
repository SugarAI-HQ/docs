---
title: ⚡ Quick Start
description: Add Native AI Assistant to your React App in few minutes

---

Supercharge your existing Web/React App with a Siri-like AI Assistant.

## Key Features

- **Voice To Action**: Perform actions based on voice input.
- **Text To Action**: Perform actions based on text input.
- **Screen Embeddings**: Auto create embeddings on current screen data to generate better context based on current user queries.
- **Text Interface for API**: Transform an existing API to support a human language interface for both requests and responses.

## Supported Voice-enabled UX Agents

1. **UI Agent**: Enables hands-free capability to perform existing UI tasks and workflows.
2. **Navigation Agent**: Assists users in navigating to the right page, section, or settings.
3. **Form Agent**: Simplifies form filling by transforming API from JSON/XML interface to a human language interface.

These agents focuses on reducing learning curve for user and enalbes handsfree expereince for content discovery, feature discovery, user onboarding and form filling.

Check out Travel Product built using this sdk: https://youtu.be/t2e0CThWZUE

## Prerequisites

Before using this package, ensure you have the following:

- An existing React application
- Sugar AI [Account](https://play.sugarcaneai.dev) or [Self Hosted](https://github.com/SugarAI-HQ/CopilotOne/)


## Install
You can install the `@sugar-ai/copilot-one-sdk` package via npm:


### Instal Package

Install the package in to your React Application

````bash
npm install @sugar-ai/copilot-one-sdk@latest
````

### Create Copilot 
Login/Sigup [Account](https://play.sugarcaneai.dev) or [Self Hosted](https://github.com/SugarAI-HQ/CopilotOne/)

Create a Copilot and get the  `copilotId` and `token`

### Add to your React App

In your main file. src/App.tsx

```js
import { useCopilot, CopilotConfigType, CopilotProvider, VoiceAssistant } from '@sugar-ai/copilot-one-js';


const copilotConfig: CopilotConfigType = {
  copilotId: '<copilotId>',
  server: {
    endpoint: 'http://play.sugarcaneai.dev/api',
    token: '<token>',
  },

  ai: {
    defaultPromptTemplate: '<prompt template>',
    defaultPromptVariables: {
      $NAME: 'Sugar',
    },
    successResponse: 'Task is completed',
    failureResponse: 'I am not able to do this'
  },
}

// Wrap the App with Copilot Provider

    <CopilotProvider config={copilotConfig}>
      <TodoApp />
    </CopilotProvider>
```

### Add Voice Assistant

Add the Voice assistant to the pages you want to. If you want to enable it on all the pages, add it to common section.

```js
      <VoiceAssistant 
        promptVariables={{ $NAME: 'Sugar' }} 
        position={'botttm-center'}
      >
        
      </VoiceAssistant>
```

This will show a mic button on the bottom center of the page. Test it out if you talk with it. This Assistant have no registered actions


### Register Actions

To invoke actions by AI Assistant, register methods using `registerAction` with its name, definition and callback.

```js
const TodoApp = () => {

  ...

  // Functionalies
  const addTodo = (task) => {...}};
  const deleteTodo = (task) => {...};
  const markTodoAsDoneById = function (todoId: number) {...};

  // Register addTodo function
  registerAction(
    'addTodo',
    {
      name: 'addTodo',
      description: 'Add a new todo',
      parameters: [
        {
          name: 'task',
          type: 'string',
          description: 'Task description',
          required: true,
        }
      ],
    },
    addTodo,
  );

...

}

```

After this, ask Assistant to perform the action by saying `Remind to get a haircut`. In you app you can use equivalent instruction.


### Active Screen Context 

To make AI Assistant aware of the current screen content, use `useStateEmbedding` to track the current screen content. 

`useStateEmbedding` is build on too of `useState` hook. This automatically create an embedding in db for the current user with a scope. 

you can easily replace your `useState` hook with `useStateEmbedding` and pass the scope as the second argument. This will define the scope for created embedding.


Check out the todo App exmaple below
`useStateEmbedding`

```js

const TodoApp = () => {

const { useStateEmbedding, registerAction, unregisterAction } = useCopilot(); // Add
const scope = {scope1: 'todoApp', scope2:  'todos'}

// const [todos, setTodos] = useState([]);
const [todos, setTodos] = useStateEmbedding([], {...scope}); // Switch

...

}

```





Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

