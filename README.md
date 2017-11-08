# Payslip app

## Assumuptions

## Assumption in Requirements

### Assume input `payment start date` to be a month, and `payment period` is a range of time.

  Although,in the example csv, the input is
  ```
  ..., payment start date
  ..., 01 March – 31 March
  ..., 01 March – 31 March
  ```

  while the user expect output as
  ```
  ..., pay period, ...
  ..., 01 March – 31 March, ...
  ..., 01 March – 31 March, ...
  ```
It seems to be the same, but the doc also point out 
```
pay period = Month of March (01 March to 31 March)
```

So I think it would safe to make an assumption: payment start date should be a month, while the output should be a date range. i.e.
payment start date: March
pay period: 01 March - 31 March

And we also assume that it would NOT take years into consideration, and only consider months from now on. i.e
```
Given it is now November of 2017.
When input is November, it means November of 2017. 
When input is October, it means October of 2018.
```

It would fit to the solutions online about how to generate payslips and can extended in future.

## Assumption in App Design




### Assume user will use the app on different screen.
So the app should be responseive. supporting different resolution

### Assume writing CSS in JS is the way to go
Using SASS is good, stylus is better. But if we could write css in Javascript, that maybe the best. Because that means js developers do not need to learn verbose syntax in styles sheets and just use their favoriate language. And a lot more dynamic! There are lots of people already started using it, and it's working great with React thanks to HOC concepts.
To know more about it, please check: [CSS in JS](http://cssinjs.org/).


### Assume the app would rely on some kind of backend service in future.
As a result of this assumption, the data validation should be done both on the client side and server side. So it requires separation of the validation and calculation logic for the `payslipCalculator` module.


### Assume the less lib used, the better (reading).
It would be easier to write FP with Ramda, but it would bring less readable code becuase not everyone knows Ramda. So I just used pure javascript to implement FP, easy to read!


### Assume the complexity of the app not reaches the level of using Redux.
[redux](http://redux.js.org/) force you to write pure function and centralize immuateable state store, it is a quite popular lib and I use it a lot. However, there're lots of data stores avaliable on the market, i.e [relay](https://facebook.github.io/relay/), [mobx](https://github.com/mobxjs/mobx), etc. Thinking of this app may have different backend implementation, so we made NO assumption about what's the backend, so we just put the global variable inside the top level component - `App.js` as component state.

We could easily switch the state store without lots of effort, because I have already removed logic from ui component, and most the side effects have been removed.

### Assume the app would change. Modules should be able to `Plug and Use`
It is very common to have changes in apps. Take this application for an example, the method to get `name` would change, the payment period would change, the tax rate calculation method may change etc.

I choose Functional Programing way to reduce the dependencies between each blocks and make components easier to test. 

Because it doesn't involve any data persistance, the only side effect on the application is the change of time to generate `pay period` So it would make sense to make most of the functions in the app to be pure functions.

To remove the hassle of types in javascript, [flow](https://flow.org/) is used to do compile time check. It is a bit buggy for the current version, though, as documented in the `Known Issues` session.

### Assume UI change would be not so dramatic
Assume the rendered HTML will not change a lot, so we will implement snap shot testing for template render change validation. It will do a render on the page and save the render result, when test runs, it would compare the render result, to see what have been changed.

The snap shot will be committed in source control.


## Future work
### Responsive page test 
It should be done by do mounting the app, given the context of different resolution. It is an assumption now, once defined in requirement, it should be implmenetd.



## Known Issuees

1. Snap shot testing is current an issue for jss
https://github.com/cssinjs/react-jss/issues/93
To tackle it, we can put css to be inline, or try another approach (render style along with html elements).

2. We are using flow for type check in javascript. But some library we are currently using seems have some sorts of error in the flow defination that keep producing errors. I am pretty sure that will do no harm but it really annoying. Hopefully that will be fixed soon. It looks like below:
```
This type is incompatible with empty
```
issue tracking: https://github.com/callemall/material-ui/issues/9002