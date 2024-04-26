---
title: Get Started
description: awd
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
- Sugar AI [Account](https://play.sugarcaneai.dev) or [Self Hosted](https://github.com/sugarcane-ai/sugarcane-ai/)

## Install

You can install the `@sugar-ai/copilot-one-sdk` package via npm:

### Installation

```bash
npm install @sugar-ai/copilot-one-sdk
```

### Add to your React App

In your main file. src/App.tsx

```js
import {
  useCopilot,
  CopilotConfigType,
  CopilotProvider,
  VoiceAssistant,
} from "@sugar-ai/copilot-one-sdk";

const copilotConfig: CopilotConfigType = {
  copilotId: "<copilotId>",
  server: {
    endpoint: "http://sugarai.dev:3000/api",
    token: "<token>",
  },

  ai: {
    defaultPromptTemmplate: "hi/skills/todo-skill/0.0.5",
    defaultPromptVariables: {
      $ROLE: "Boss",
    },
    successResponse: "Task is completed",
    failureResponse: "I am not able to do this",
  },
};
```

In a todo App, Track Live Screen context for current user using `useStateEmbedding`

```js

const TodoApp = () => {

const { useStateEmbedding, registerAction, unregisterAction } = useCopilot(); // Add

// const [todos, setTodos] = useState([]);
const [todos, setTodos] = useStateEmbedding([], 'todoApp', 'todos'); // Switch

...

}

```

Register functions for create, delete and mark as done.

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

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.