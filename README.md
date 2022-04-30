# React-Startup-With-Vite-Template

I'm lazy @u@

## Demo
[Demo Page](https://react-startup-with-vite-template.vercel.app/)

## What Does This Repo Do?

### 1️⃣ Packages

#### ⭕ Include

<div>
  <img
    src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat"
    alt="React"
  />
  <img
    src="https://img.shields.io/badge/-Styled Component-DB7093?logo=styled-components&logoColor=white&style=flat"
    alt="Styled Component"
  />
  <img
    src="https://img.shields.io/badge/-React Router-CA4245?logo=React-Router&logoColor=white&style=flat"
    alt="React Router"
  />
  <img
    src="https://img.shields.io/badge/-React Icons-31B8BB?logo=Icon&logoColor=white&style=flat"
    alt="React Icons"
  />
</div>

#### ❌ Not Include but recommend

<div>
  <img
    src="https://img.shields.io/badge/-Redux-764ABC?logo=Redux&logoColor=white&style=flat"
    alt="Redux"
  />
  <img
    src="https://img.shields.io/badge/-Redux Saga-999999?logo=Redux-Saga&logoColor=white&style=flat"
    alt="Redux Saga"
  />
  <img
    src="https://img.shields.io/badge/-Redux Persist-FF0029?&logoColor=white&style=flat"
    alt="Redux Persist"
  />
</div>

### 2️⃣ Absolute import

To import file correctly.
It is awesome to use absolute path instead of relative path.

For example

```jsx
import { Home } from '@/pages';
```

#### How

`root/vite.config.js`

```jsx
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
```

`root/jsconfig.json`

```jsx
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

### 3️⃣ Global, Reset styles and gray schemes

Yes, this repo has those things.
To make sure the website style is clean.

`root/styles/globalStyle.jsx`
`root/styles/resetStyle.jsx`
`root/styles/colors.jsx`

### 4️⃣ File Structure

I want to make the structure like how I code html, css, js.

```
├── src
│   ├── assets
│   ├── components
│   ├── layout
│   ├── pages
│   └── styles
└── other files
```

### 5️⃣ Website Settings

Like `favicon.ico` `open graph` is important but important enough.

```html
<link
  rel="icon"
  type="image/svg+xml"
  href="/src/assets/favicon.ico"
/>
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>
<meta property="og:title" content="HI~ OuO" />
<meta property="og:image" content="/src/assets/favicon.icon" />
<meta property="og:description" content="It is a website." />
```
