<div align="center" style="width: 64px; height: 64px; display: flex; align-items: center; gap: 12px;">
  <img src="./public/redux-logo.svg" style="width: 64px; height: 64px;" />
  <img src="./public/zustand_logo.png" style="width: auto; height: auto;" />
</div>

<h1 align = "center">Video Player using Redux and Zustand</h1>

<p>In this project, I learned how to deal with shared states through different components with ReactJS using Redux and Zustand.</p>

<p>Sometimes, we must create a global state handler to allow properties and states for components in a context. So, we use a library, such as Redux or Zustand, to make this job easier.</p>

<p>The video player needs to know the current module and current lesson beeing playing based on the user's selection. This way, different states need to be available for various React components. Therefore, we make the state global to the application, creating "actions" to process the data when a event is triggered.</p>

<div align="center">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <img src="https://img.shields.io/static/v1?label=ReactJS&message=v18.2.0&color=blue&style=plastic&logo="/>
    <img src="https://img.shields.io/static/v1?label=TypeScript&message=v5.2.2&color=blue&style=plastic&logo="/>
    <img src="https://img.shields.io/static/v1?label=Vite&message=v5.0.8&color=blue&style=plastic&logo="/>
    <img src="https://img.shields.io/static/v1?label=TypeScript&message=v5.2.2&color=blue&style=plastic&logo="/>
    <img src="https://img.shields.io/static/v1?label=NodeJS&message=v20.11.0&color=blue&style=plastic&logo="/>
  </div>
</div>

<h4 align="center"> 
	Video Player using Redux and Zustand | Status: Done ✔️
</h4>

## Features

### 1. Select the lesson

Browsing through the accordion component, you can select the lesson you want. By doing that, the video player of the current lesson is going to be playing.

### 2. Next video playing automatically after the previous video ends

When a video has ended, the next lesson will automatically play, even if the current module has already ended.

## Requirements to run the project

<p>Before you run the project, check if you have [Node.js](https://nodejs.org/en/) installed on your machine, as well [Git](https://git-scm.com) to clone this repository.</p>

## Running the application

```bash
    # Clone this repository on your machine:
    $ git clone https://github.com/vitorlinsbinski/react-redux-zustand.git

    # Access the project folder in your terminal:
    $ cd react-redux-zustand

    # Install all dependencies:
    $ npm install

    # Run the application:
    $ npm run dev
```

## Main Technologies

- [ReactJS](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ViteJS](https://vitejs.dev/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Player](https://www.npmjs.com/package/react-player)
- [Vitest](https://vitest.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSON Server](https://www.npmjs.com/package/json-server)

## Final Result

### Loading State

<img src="/public/screenshots/loading-state.png"/>

### Video playing

<img src="/public/screenshots/video-playing.png"/>

## Contributing Guidelines

Contributions are welcome! Whether you want to fix a bug, add a new feature, or improve documentation, your contributions are valuable.

## License

This project is licensed under [MIT](https://choosealicense.com/licenses/mit/) License.

### Author

<a href="https://github.com/vitorlinsbinski">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/69444717?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Vitor Linsbinski</b></sub></a> <a href="https://github.com/vitorlinsbinski" title="">🚀</a>

Developed by Vitor Linsbinski

[![Linkedin Badge](https://img.shields.io/badge/-Vitor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitorlinsbinski/)](https://www.linkedin.com/in/vitorlinsbinski/)
