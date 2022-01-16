# Freestyle pizza creator

![pizzaPreview](https://user-images.githubusercontent.com/34210193/149172090-08a71686-c7bf-407b-8bd7-b4c6df4da57a.gif)

⚠️ Not maintained, code mainly from jan 2020
🚢 deployed at [vercel](https://pizza-haach.vercel.app/)

<hr></hr>

This is best viewed in Chrome or Firefox on a screen min 1440 x 900.

Here is a [time table](https://docs.google.com/document/d/1h9ARwv-4VWCHXfX8YGY0lGlcwZYuD7upSbrNrW5LhnA/edit?usp=sharing) of what I spent how much time more or less.

To start:

```
yarn start
```

## 🎨 Design inspiration

As this was for a challenge, I didn’t have the time to design something completely new from scratch (and that would be outside of my expertise as a developer).

Therefore, I decided to create a wizard-like app that is based on an existing design to make this more of a real-life example. After a deep dive into dribble, bechance, and Pinterest for inspiration, I ultimately landed on this [design](https://www.behance.net/gallery/81662745/Website-Header-Concept-Designs).

At first I thought about using a react ui component library, like Evergreen, but eventually decided to create the components myself, because I only needed a very limited amount of elements.

Then I replaced the photo in the Design with this [pizza illustration](https://www.freepik.com/free-vector/pizza-slice-background_1168758.htm#page=1&query=pizza&position=46) from freepik (where I also got the [pizza mockup](https://www.freepik.com/free-vector/colorful-round-tasty-pizza_3799722.htm) from), to be able to animate the svg better. I sourced the [slized pizza icon](https://thenounproject.com/search/?q=pizza&i=1746127) for the size collection from noun project.

When I first got this challenge, I was immediately reminded of [pizza connection 2](https://store.steampowered.com/app/599000/Pizza_Connection_2/), a favourite from the early 2000s. So, I wanted to pay homage to it and thus based the app’s pizza creator on it, hopefully making it more fun and intuitive for the customer :)

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
- use a roter & prevent user from navigating via hash to all steps
- create more modular components and encorporate design system / component library
- write animations using a framework instead of keyframes
- fetch sizes & toppings from backend
- store all data in backend instead of local storage
- group identical items in cart. put a "2x" if an identical item is in the cart multiple times
- have better validation for input (phone number, credit card number, MM/YY stuff like that)
- have actual request error handling (I created empty promises where you would typically would fetch a BE)
- do not have hard coded text: I personally prefer i18n if you are encorporating different languages
- make responsive, browser & device compatible
