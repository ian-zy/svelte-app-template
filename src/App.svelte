<script>
  import srs from 'svelte-router-spa'
  import { routes } from './pages'

  const { Router } = srs;
</script>

<Router {routes} />
