import { POST as handleWorkflowDelivery } from '../src/pages/.well-known/workflow/v1/flow.js';

export async function POST(request) {
  return handleWorkflowDelivery({ request });
}
