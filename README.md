# simple-redux-action-generator
A snippet to auto generate immutable Redux action objects

Use case

```javascript
import generateReduxAction from './generateReduxAction.js';

const action = generateReduxAction('ACTION_TYPE', ['ACTION_1', 'ACTION_2', 'ACTION_3']);

//  action = {
//    ACTION_1: 'ACTION_TYPE/ACTION_1',
//    ACTION_2: 'ACTION_TYPE/ACTION_2',
//    ACTION_3: 'ACTION_TYPE/ACTION_3',
//  }
```
