import { openApiErrorResponses } from "@/lib/openapi/responses";
import { DomainSchema } from "@/lib/zod/schemas";
import { ZodOpenApiOperationObject } from "zod-openapi";
import { workspaceParamsSchema } from "../request";

export const deleteDomain: ZodOpenApiOperationObject = {
  operationId: "deleteDomain",
  "x-speakeasy-name-override": "delete",
  summary: "Delete a domain",
  description: "Delete a domain from a workspace.",
  requestParams: {
    query: workspaceParamsSchema,
    path: DomainSchema.pick({ slug: true }),
  },
  responses: {
    "200": {
      description: "The domain was deleted.",
      content: {
        "application/json": {
          schema: DomainSchema.pick({ slug: true }),
        },
      },
    },
    ...openApiErrorResponses,
  },
  tags: ["Domains"],
  security: [{ token: [] }],
};
