import { readFileSync } from 'node:fs';

const outputConfig = JSON.parse(
  readFileSync('.vercel/output/config.json', 'utf8'),
);
const renderConfig = JSON.parse(
  readFileSync('.vercel/output/functions/_render.func/.vc-config.json', 'utf8'),
);
const consumerConfig = JSON.parse(
  readFileSync(
    '.vercel/output/functions/api/workflow-consumer.func/.vc-config.json',
    'utf8',
  ),
);

const workflowRoutes = outputConfig.routes.filter((route) =>
  String(route.src ?? '').includes('workflow'),
);

console.log(
  JSON.stringify(
    {
      deploymentId: outputConfig.deploymentId ?? null,
      workflowRoutes,
      renderFunction: {
        runtime: renderConfig.runtime,
        experimentalTriggers: renderConfig.experimentalTriggers ?? [],
      },
      privateWorkflowConsumer: {
        runtime: consumerConfig.runtime,
        experimentalTriggers: consumerConfig.experimentalTriggers ?? [],
      },
    },
    null,
    2,
  ),
);
