import Layout from "./Layout.svelte";
import Home from "./Home.svelte";
import About from "./About.svelte";

const routes = [
  {
    name: '/',
    component: Home,
    layout: Layout
  },
  {
    name: '/about',
    component: About,
    layout: Layout
  }
]

export { routes }