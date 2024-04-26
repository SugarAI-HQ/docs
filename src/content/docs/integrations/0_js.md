---
title: Javascript
description: Add Native AI Assistant to your Website in few minutes
---

Supercharge your existing Website with a Siri-like AI Assistant.

### Install Package

Install the package in to your Website

Add this to your head tag

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@sugar-ai/copilot-one-js@latest/dist/js/copilot-one.min.js"
  async
></script>
```

Add this inside your HTML body

```html
<!-- Adding copilot one container to your webiste  -->
<a id="copilot-one" href="https://sugarai.dev"></a>
<script>
  window.saiData = window.saiData || [];

  function saiAsync() {
    saiData.push(arguments);
  }

  # Add config
  // Get this config from your Copilot
  saiAsync("config", {
    copilotId: "<copilotId>",
    server: {
      endpoint: "https://play.sugarcaneai.dev/api",
      token: "<token>",
    },

    ...
    ...
    ...
  })
</script>
```

Additionally register your functions. Follow the example below of `addTodo` function

```js
saiAsync(
  "register",
  "addTodo",
  {
    name: "addTodo",
    description: "Add a new todo",
    parameters: [
      {
        name: "task",
        type: "string",
        description: "Task description",
        required: true,
      },
    ],
  },
  addTodo
);
```
