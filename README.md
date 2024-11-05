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
This functionality returns user data from a form inputs of the website. It works with the predefined arguments input from a GTM template.

