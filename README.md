# pizza

Pizza Challenge - UI focus

<hr></hr>

This is best viewed in Chrome or Firefox on a screen min 1440 x 900.

Here is a [time table](https://docs.google.com/document/d/1h9ARwv-4VWCHXfX8YGY0lGlcwZYuD7upSbrNrW5LhnA/edit?usp=sharing) of what I spent how much time more or less.

To start:

```
yarn start
```

## 🎨 Design inspiration

I cannot design something completely new from scratch for two good reasons:

<ol>
<li>it would take too much time</li>
<li>I am a developer</li>
</ol>

So I decided to make this more of a real life example, where I would have a design to follow and so I did a deep dive into dribble, behance and pinterest for inspirations. This [design](https://www.behance.net/gallery/81662745/Website-Header-Concept-Designs) seemed fitting, because it matched the wizard-like app, I wanted to create.

At first I thought about using a react ui component library, like Evergreen, but eventually decided to create my components myself, because I wanted full control over their behaviour and I only needed a very limited amount of elements.

Because I wanted to use some nice animations, I replaced the photo with this [pizza illustration](https://www.freepik.com/free-vector/pizza-slice-background_1168758.htm#page=1&query=pizza&position=46) from freepik. The [pizza mockup](https://www.freepik.com/free-vector/colorful-round-tasty-pizza_3799722.htm) that i used for the creator is also from freepik.

This challenge right away reminded me of this game I had in the early 2000s, [pizza connection 2](https://store.steampowered.com/app/599000/Pizza_Connection_2/). As a little homage, I wanted the pizza creator to go bit into that direction. The [tiny icon](https://thenounproject.com/search/?q=pizza&i=1746127) for the size collection is from noun project.

<hr></hr>

## 💻 Implementation

I used several npm modules:

[react-step-wizard](https://github.com/jcmcneal/react-step-wizard#readme): Offers a simple API to quickly create a wizard

[react-helmet](https://github.com/nfl/react-helmet): Component based handling of changes to the document head tag

[styled-components](https://www.styled-components.com/): Well you know styled components

[husky](https://github.com/typicode/husky#readme), [prettier](https://github.com/prettier/prettier) and [pretty-quick](https://github.com/azz/pretty-quick): For code formatting

[shortid](https://github.com/dylang/shortid): to generate UUIDs for cart items

[react-spinners](https://github.com/davidhu2000/react-spinners): Is a package of easy to use loading spinners

[lottie-react-web](https://github.com/felippenardi/lottie-react-web): Is a react wrapper for Bodymovin Animations

<hr></hr>

### What I did not do, but would have in real life:

- write tests
- create more mudolar components / use component library
- write animations using a framework instead of keyframes & optimize them
- fetch sizes & toppings from backend
- store all data in backend instead of local storage
- group identical items in cart
- have better validation in forms for input types
- have actual request error handling
- prevent user from navigating via hash to all steps
- not have hard coded text
- make responsive
- make browser & device compatible
- have a favicon
