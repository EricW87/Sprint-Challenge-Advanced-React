- [ ] Why would you use class component over function components (removing hooks from the question)?
It might be used by the company you work at. It lets you use this.state which might be needed in some circumstances. Lifecycle methods might be more convienent with some apps.
- [ ] Name three lifecycle methods and their purposes.
ComponentDidMount - this is ran once when the component is loaded. Good for things you need to run only once at the beginning.
ComponentDidUpdate - ran after a component is updated, say by changing state. Let's you make changes when state changes.
ComponentDidUnmount - good for cleanup.
- [ ] What is the purpose of a custom hook?
It allows you to add additional funcntionality to hooks that is "behind the scenes" and you don't have to rewrite the same code.
- [ ] Why is it important to test our apps?
Testing apps lets you look for bugs and think of or catch edge cases you wouldn't have considered.