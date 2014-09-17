meteor atmosphere package

##Install

```shell
meteor add walawala:timedifference-en
```

##Example
```
vagueTime.get({
    from: 60,
    to: 0,
    units: 's'
}); // returns '1 minute ago'

vagueTime.get({
    from: 0,
    to: 60,
    units: 's'
}); // returns 'in 1 minute'

vagueTime.get({
    from: 7200,
    to: 0,
    units: 's'
}); // returns '2 hours ago'
```
