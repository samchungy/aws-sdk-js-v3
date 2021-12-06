import { Paginator } from "@aws-sdk/types";

import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { Inspector2 } from "../Inspector2";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Inspector2Client,
  input: ListMembersCommandInput,
  ...args: any
): Promise<ListMembersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMembersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Inspector2,
  input: ListMembersCommandInput,
  ...args: any
): Promise<ListMembersCommandOutput> => {
  // @ts-ignore
  return await client.listMembers(input, ...args);
};
export async function* paginateListMembers(
  config: Inspector2PaginationConfiguration,
  input: ListMembersCommandInput,
  ...additionalArguments: any
): Paginator<ListMembersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMembersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Inspector2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector2 | Inspector2Client");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
