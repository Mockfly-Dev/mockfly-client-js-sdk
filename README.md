## `mockfly-client-js-sdk` SDK Documentation

### General Overview:

The `mockfly-client-js-sdk` SDK provides a simple interface to interact with the Mockfly service. The SDK allows you to identify users and retrieve flags based on a user's evaluation key.

### Getting Started:

To begin using `mockfly-client-js-sdk`, you need to install it. (Note: I'm assuming that the package is available on npm).

```bash
npm install mockfly-client-js-sdk
```

or

```bash
yarn add  mockfly-client-js-sdk
```

or

```html
<script src="node_modules/mockfly-client-js-sdk/lib/mockfly-client-js-sdk.js"></script>
```

Then, you can import it into your project:

```javascript
const Mockfly = require('mockfly-client-js-sdk')
```

or

```javascript
import Mockfly from 'mockfly-client-js-sdk'
```

If you have used the script tag to import it, you already have it as a global object in Mockfly.

### Constructor:

The SDK is initialized using the constructor. The constructor accepts an object with the following properties:

- `environment`: The environment for which you are obtaining the flags: "production" or "test".
- `authHeader`: A string representing the authorization header required to make calls to the Mockfly API. This should be derived from your project's private API key.

Example:

```javascript
const mockfly = new Mockfly({
  environment: 'production',
  authHeader: 'YOUR_PRIVATE_API_KEY',
})
```

### Methods:

#### `identify(value)`

This method is used to identify a user within the system.

- `value`: The user's evaluation key. It is essential to call this method before `getFlag()`.

Example:

```javascript
mockfly.identify('user@gmail.com')
```

#### `getFlag(key)`

This method is used to get a flag based on the provided key.

- `key`: The key of the flag you wish to get.

Returns a promise that resolves to the flag value for the given key and the identified user.

Example:

```javascript
mockfly
  .getFlag('feature_toggle')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
```

### Error Handling:

The SDK has built-in validations and will throw errors in the following cases:

- If the `authHeader` is not provided when creating a `Mockfly` instance.
- If attempting to get a flag without providing a key.
- If attempting to get a flag without previously identifying the user.

### Conclusion:

The `mockfly-client-js-sdk` SDK simplifies interaction with the Mockfly service from browsers. Ensure to handle potential errors and use the `identify` method before making calls to `getFlag`. Always remember that the `authHeader` value should be derived from the private API key of your project.
