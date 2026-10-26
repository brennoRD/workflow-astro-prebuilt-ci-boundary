import { resumeHook } from 'workflow/api';

export const POST = async ({ request }) => {
  if (request.headers.get('x-demo-role') !== 'approver') {
    return Response.json({ error: 'approver role required' }, { status: 403 });
  }

  const body = await request.json();
  await resumeHook(body.approvalToken, {
    approved: true,
    approvedBy: 'authorized-approver',
  });
  return Response.json({ accepted: true });
};

export const prerender = false;
