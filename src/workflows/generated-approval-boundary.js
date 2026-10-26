import { createHook } from 'workflow';

export async function generatedApprovalBoundaryWorkflow(marker) {
  'use workflow';

  const approval = createHook();
  const decision = await approval;

  if (decision?.approved !== true) {
    return { approved: false };
  }

  return await recordGeneratedApproval(marker, decision.approvedBy);
}

async function recordGeneratedApproval(marker, approvedBy) {
  'use step';

  console.info(
    `[owned-generated-approval-boundary] ${marker} approvedBy=${approvedBy}`
  );
  return { approved: true, marker, approvedBy };
}
