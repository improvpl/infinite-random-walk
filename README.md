# InfiniteWalk Web App
Port of Infinite walk to JavaScript/HTML

# How does it work?

Click generate to start drawing a line using the random walk algorithm which determines the next placement of the pixel depending on random numbers.

# How are the random numbers generated?

They are generated using JavaScripts random module
For example to generate a random number in JavaScript just write the following:

```
Math.random()
>>0.8549689228426061
```
To generate a random integer modify the code slightly:
```
Math.floor(Math.random()*10)
>>3
```
You can go further and create a random choice function:
```
function randomElement(list){
let choice = Math.floor(Math.random()*list.length)
return list[choice]
}
```
# What's the purpose of this project?

Explore what's possible given just a bunch of random numbers
