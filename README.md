# Julu 2

<img src="https://res.cloudinary.com/programandoconmei/image/upload/v1663572213/Screen_Shot_2022-09-19_at_3.18.57_AM_q0b6hf.png" alt="mobile view" style="width:300px; height:400px;" />

<img src="https://res.cloudinary.com/programandoconmei/image/upload/v1663572226/Screen_Shot_2022-09-19_at_3.18.12_AM_iyhfzy.png" alt="mobile view" style="width:300px; height:400px;" />


## Deploy on Vercel
[Visit the Site](https://julu2.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### TailwindCSS   [Documentation](https://tailwindcss.com/docs/guides/nextjs)

```bash
npm install -D tailwindcss postcss autoprefixer --force
```

```bash
npx tailwindcss init -p
```

#### Add the paths to all of your template files in your tailwind.config.js file.

/\*_ @type {import('tailwindcss').Config} _/
module.exports = {

content: [

```bash
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
```

],
theme: {
extend: {},
},
plugins: [],
}

#### Add the paths to all of your template files in your globals.css file. Please clean your file before adding this code.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<hr/>

### TailwindUI [Documentation](https://tailwindui.com/documentation)

```bash
npm install tailwindcss@latest --force
```

```bash
npm i  @tailwindcss/forms --force
```

```bash
npm i  @tailwindcss/typography --force
```

```bash
npm i  @tailwindcss/aspect-ratio --force
```

```bash
npm install @headlessui/react @heroicons/react --force
```

<hr/>




