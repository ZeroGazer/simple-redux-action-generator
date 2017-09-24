function createImmutableObject(obj) {
	const immutableObj = Object.keys(obj).reduce((newObj, key) => {
		if (!obj.hasOwnProperty(key)) {
			return newObj;
		}
		return Object.defineProperty(newObj, key, {
			writable: false,
			configurable: false,
			value: obj[key],
			enumerable: true
		});
	}, {});
	return Object.freeze(immutableObj);
}

export default function generateReduxAction(actionType, actions) {
  if (typeof actionType != 'string' || !actionType) {
    throw Error('actionType is not a non-empty string');
  }

  const actionTypeInUpperCase = actionType.toUpperCase();

  const actionObj = actions.map(action => action.toUpperCase()).reduce((obj, action) => {
    if (typeof actionType != 'string' || !actionType) {
      throw Error('action is not a non-empty string');
    }
    
    obj[action] = `${actionTypeInUpperCase}/${action}`;
    return obj;
  }, {});

  return createImmutableObject(actionObj);
}
