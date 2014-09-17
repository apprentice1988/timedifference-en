meteor atmosphere package

将时间差转换成表达性语句， 如‘1 天之前’， ‘1 个月之后’

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
