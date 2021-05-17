# CSS3 Animations

Examples of CSS transitions and animation keyframes using `position` and `transform`.

## Transitions

Most common form of animations on the web. Transitions provide a staightforward way to change CSS properties given an interaction. Typically, you define the initial state of the animation, final state of the animation, and how to animate the properties. Transitions can be defined with the following properties:

`transition-property` - What CSS properties you want to animate.

`transition-duration` - How long your animation should take.

`transition-timing-function` - How to iterate through each step of the animation ([examples](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)).

`transition-delay` - How long to wait before the animation starts.

And its shorthand:

```
transition: <property> <duration> <timing-function> <delay>
```

### Example

```
div {
    background-color: green;
    width: 200px;
    height: 200px;
    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: linear;
    transition-delay: 0s;
}

div:hover,
dif:focus {
    width: 300px;
    height: 300px;
    background-color: blue;
}
```

### More Info

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

## Animations

More complex, but more powerful transitions. These allow you to define an entire sequence of events in a specified amount of time. Like transitions, keyframe animations work on all [animatable CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

`animation-name` - The name of the keyframe animation you want to run.

`animation-duration` - How long the animation should take.

`animation-timing-function` - How to iterate through the animation ([examples](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)).

`animation-delay` - How long to wait before the animation starts.

`animation-iteration-count` - How many times the animation should run.

`animation-direction` - What point the animation should start from on each iteration.

`animation-fill-mode` - What properties apply before and/or after the animation runs.

`animation-play-state` - Paused or running.

`@keyframes` - Properties at each point in the animation.

And its shorthand:

```
animation: <name> <duration> <delay> <timing-function> <iteration-count> <direction> <fill-mode> <play-state>
```

*Note:* The order of the animation shorthand doesn't matter, with the exception of `animation-duration` and `animation-delay`, which need to be in that respective order.

### Example

```
div {
    animation-name: example;
    animation-duration: 2s;
    animation-timing-function: ease-in;
    animation-delay: 1s;
    animation-iteration-count: 2;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
}

@keyframes example {
    from {
        background-color: green;
        width: 200px;
        height: 200px;
    }
    to {
        background-color: blue;
        width: 300px;
        height: 300px;
    }
}
```

### More Info

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)


### Accessibility

Certain animations can be distracting for folks with different disabilities. In some cases, they may be dangerous. Use your best judgment when creating animations on the web.

[WCAG Success Criterion 2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)
