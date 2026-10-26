# Owned Workflow Astro CI fixture

Minimal researcher-owned fixture for validating an Astro Workflow deployment built and deployed with the officially documented Vercel CLI prebuilt flow.

The project also contains a documented private `queue/v2beta` consumer for
Workflow topics. Legitimate queue delivery uses that consumer. The Astro
integration independently emits the Workflow HTTP route in the public
`_render` function when the external build has no deployment ID.

The synthetic start, status, result, and approval controls are also exposed at
root-level paths. Vercel reserves `/api/*` for the standalone consumer when a
project combines an Astro render function with a Vercel Function.

The repository contains no credentials and no exploit code. GitHub Actions credentials are stored only as repository secrets.
