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

  if ((await run.status) !== 'completed') {
    return Response.json({ error: 'run not completed' }, { status: 409 });
  }

  return Response.json({ runId, result: await run.returnValue });
};

export const prerender = false;
