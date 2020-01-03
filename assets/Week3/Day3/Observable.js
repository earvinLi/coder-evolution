const changeListeners = {};
const store = {};
const storeHandler = {
  set(target, key, value) {
    changeListeners.GCBS.forEach((callback) => { callback(); });
    target[key] = value;
  },
};

const observer = (callback) => {
  changeListeners.GCBS = changeListeners.GCBS || [];
  // console.log(this);
  changeListeners.GCBS.push(callback);
};

observer(() => console.log('subscriber from Earvin'));

storeHandler.set(store, 'title one', 'learn observable');
storeHandler.set(store, 'title two', 'learn more about observable');
