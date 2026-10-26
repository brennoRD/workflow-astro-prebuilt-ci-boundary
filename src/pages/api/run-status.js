import { getRun } from 'workflow/api';

export const GET = async ({ request }) => {
  const runId = new URL(request.url).searchParams.get('runId');
  if (!runId) {
    return Response.json({ error: 'runId required' }, { status: 400 });
  }

  const run = getRun(runId);
  if (!(await run.exists)) {
    return Response.json({ error: 'not found' }, { status: 404 });
  }

  return Response.json({ runId, status: await run.status });
};

export const prerender = false;
