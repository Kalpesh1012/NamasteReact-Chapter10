Chapter-10 Jo Dikhta hai vo bikta hai

\1) Various ways to write css?

- SCSS and SASS – SASS stands for Syntactically Awesome Style Sheet and its amongst the most popular CSS preprocessor. SCSS is the newer Syntax of SASS, it uses CSS like block formatting. 
- Inline CSS – We can write the CSS in our go to file we don’t have to write a separate file for CSS we can write on that CSS on that element or attribute. But it is hardly coded we can’t use that code again.  
- Library – There are many libraries available to design our page. Like 
1. Material UI
1. Ant UI
1. Chakra UI
1. Base UI 
- Styled Component- In style Component we write our CSS in our existing file with new variable like, As you can see our code is looking little bit lengthy.

`  `const Button = styled.button`

`    `font-size: 1rem;

`    `margin: 1rem;

`    `padding: 1rem 1rem;

`    `@media (min-width: 768px) {

`        `padding: 2rem 2rem;

`    `}

`    `border-radius: 0.25rem;

`    `border: 2px solid blue;

`    `background-color: blue;

`    `color: white;

`;

const TestComponent = () => (

`    `<>

`        `<Button>

`            `Hello world!

`        `</Button>

`    `</>

);

- Tailwind CSS – It is a framework which we are using to design our page. Tailwind CSS is a package full of pre-built classes to styled your Component.



`                    `ul className="flex p-4 space-x-3 ml-[1000px]">

`        `<li className="p-3">

`          `<Link to="/">Home</Link>

`        `</li>

\2) How do we Configure Tailwind?

1. For Parcel install parcel first after that Install Tailwind with postcss
1. Configure our PostCSS.
1. Configure your template path
1. Add the tailwind directives to you CSS.

- npm install-D tailwindcss postcss
- npx tailwindcss init



`                                          `2) Configure – {

`                                                                         `“Plugins”: 

`                                                                               `{“tailwindcss”: {}                                                 

`                                                                                 `}

`                                                                       `}

`                                           `3) Configure your terminal path - /\*\* @type                  {import('tailwindcss').Config} \*/

`                    `module.exports = {

`                        `content: ["./src/\*\*/\*.{html,js,ts,jsx,tsx}"],

`                        `theme: {

`                               `extend: {},

`                                 `},

`                        `plugins: [],

`                                      `};

`    `3) In tailwind CSS What does all the keys means (content, theme, extend, plugins)?

- Content – The content section is where you configure the paths to all your HTML templates, JS component and any file that contain tailwind class names.
- Theme – The theme section is where you define your project color palette, fonts, background, border radius and more.
- Extend – The easiest way to add an additional larger breakpoint is using the extend key.
- Plugins – Plugins let you register new styles for tailwind to inject into the users stylesheet using JS instead off CSS

\4) Why do we have .postcssrc file?

`                  `Our Browser will not know any tailwind CSS so what happens our Parcel will call postcssrc which will convert our tailwind into a CSS. Basically we can say it is interpreted tailwind to CSS.
