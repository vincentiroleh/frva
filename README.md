# The Task

Create a simple rule-validation API.

The response structure for your API should be fashioned after the popular JSEND pattern.

`Example:`

```bash

{
  "message": "API response message",
  "status": "success",
  "data": {
    isValidForRule: true,
  }
}
```

## Installation

```bash

# production
npm install

# development
npm run dev
```

## EndPoints

```bash

# "GET"
https://frva.herokuapp.com

# "POST"
https://frva.herokuapp.com/validate-rule

```

## Author

[Vincent Iroleh](https://twitter.com/IrolehVincent)
