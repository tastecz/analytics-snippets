# Analytics snippets
This repository contains small scripts that we can load in our Taste GTM templates. The templates in GTM use sandboxed javascript, and certain features cannot be implemented directly within them. That's why we reference these external scripts, which allow us to fully utilize the templates' functionality without the need to create additional variables.

The library contains 1 global variable `__taste` which is a function. Its functionality is set with the arguments. There are currently 2 main functionalities:

## Session storage
This functionality can set and read session storage items.

### Session storage – set item
Setting an item to session storage contains of four arguments:
1. `session_storage`
2. `set`
3. key – name of an item that should be saved in the session storage
4. value – value of n item that should be saved in the session storage

#### Example
If you want to save an item named `user_name` with value `John Doe` the function call will look like this:
```
__taste('session_storage', 'set', 'user_name', 'John Doe');
```

### Session storage – get item
This function will return a value saved in a particular session storage item. Calling this function takes three arguments:
1. `session_storage`
2. `get`
3. key – name of an item saved in the session storage

#### Example
If you want to get a value of an item named `user_name` the function call will look like this:
```
__taste('session_storage', 'get', 'user_name');
```

## User data
This functionality returns user data from a form inputs of the website. It works with the predefined arguments input from a GTM template that is an array and consists of another arrays. Each *subarray* had two values – name of the variable extracting from the input and a CSS selector. It can look like this:
```
[['email', 'name="email"'], ['postal_code', 'name="zip"']]
```

The function has an additional parameter that can restrict the CSS selectors to work only with particular form on the website. All parameters below:
1. `user_data`
2. GTM template input (shown above)
3. CSS selector for restricting the form (e.g. `#contact-form`) – additional

#### Example
Let's say the GTM template input is the same as above saved in a variable `inputData` and we want to restrict extracting the values only to a form with ID `#contact-form`. Calling the function would look like this:
```
__taste('user_data', inputData, '#contact-form');
```

If you call this function it returns similiar array as shown above but the second variable in each array is the actual value of the user's input:
```
[['email', 'john.doe@gmail.com'], ['postal_code', '11000']]
```
