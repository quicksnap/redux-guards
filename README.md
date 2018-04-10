# Redux Guards

Redux Guards are a pattern of leveraging TypeScript's [type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html) for a concise, fully-typed Redux application.

See the [introductory blog post](https://medium.com/@danschuman/redux-guards-for-typescript-1b2dc2ed4790) for a detailed look at this solution.

## Try It Out

Clone this repo, and navigate to the examples directory:

```
$ cd examples/kitchen-sink
$ yarn install
$ yarn start
```

I recommend checking out the example project in VSCode to inspect the typings and code hints.

## Approach

With Redux Guards, you will define three pieces to enable type safety across your `dispatch()` boundary:

* An action-creator-creator function, which encodes runtime type information
* A type guard that accepts action-creator functions created above
* A `dispatch()` [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) to account for middleware and adjustments made to our action creators

If you have questions or would like to see a middleware example added to the project, feel free to [open an issue](https://github.com/quicksnap/redux-guards/issues/new) and I will try to help out.

Pull Requests are appreciated!

## Consider Copy-Pasting!

Redux Guards is meant to be a _pattern_ rather than a library.

While this _is_ an NPM package, I highly recommend **copying the code from /src instead**. Most of your middleware-specific type guards will be tightly coupled to your state. Since TypeScript does not support [skipping some generics](https://github.com/Microsoft/TypeScript/issues/10571), it can become very un-ergonomic to attempt to allow AppState to be an optional generic. Until that issue is closed, having a state-generic approach will not be possible.

Also, nearly all Redux applications have only a single store and AppState. Having these coupled to your type guards makes things much simpler when consuming within the reducer, and is just easier to understand in general.

## Redux Pack Type Forking

I found it necessary to fork and re-type the [official Redux Pack](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/redux-pack/index.d.ts) types. I haven't had time to validate and PR upstream. The official types don't properly define the Handler-Reducer.

---

Forked from [typescript-lib-starter](https://github.com/hotell/typescript-lib-starter)
