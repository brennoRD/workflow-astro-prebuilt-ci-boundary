import { start } from 'workflow/api';
import { generatedApprovalBoundaryWorkflow } from '../../workflows/generated-approval-boundary.js';

export const POST = async ({ request }) => {
  const body = await request.json().catch(() => ({}));
  const marker =
    typeof body.marker === 'string' && body.marker.length > 0
      ? body.marker
      : `OWNED_CI_CONTROL_${crypto.randomUUID()}`;
  const run = await start(generatedApprovalBoundaryWorkflow, [marker]);

  return Response.json({ runId: run.runId, marker });
};

export const prerender = false;
