<script lang="ts">
  import srs from "svelte-router-spa";
  const { Navigate, routeIsActive } = srs;
  
  export let to: string;
  export let tw = "";
  export let currentRoute = undefined;

  let active = false;
  $: active = currentRoute !== undefined && routeIsActive(to);
</script>

<Navigate {to} styles={`navigate text-2xl hover:text-brand ${active ? "underline" : ""} ${tw}`}>
  <slot>Button</slot>
</Navigate>
