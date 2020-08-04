<script>
  import srs from "svelte-router-spa";
  import { Link } from "../components";

  export let currentRoute;

  const { Route } = srs;
  const params = {};

  const menus = [
    { to: "/about", title: "About" },
  ];

  $: console.log(currentRoute);
</script>

<nav class="flex m-4 items-center">
  <Link to="/">
    <img
      src="logo.svg"
      alt="logo"
      width="60"
      height="60"
      class="p-2" />
  </Link>
  <div class="flex-1" />
  {#each menus as { to, title }}
    <div class="px-6 py-2">
      <Link {to} {currentRoute}>{title}</Link>
    </div>
  {/each}
</nav>

<main>
  <Route {currentRoute} {params} />
</main>
