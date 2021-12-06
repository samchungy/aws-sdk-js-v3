import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateEncryptionConfigCommandInput,
  AssociateEncryptionConfigCommandOutput,
} from "../commands/AssociateEncryptionConfigCommand";
import {
  AssociateIdentityProviderConfigCommandInput,
  AssociateIdentityProviderConfigCommandOutput,
} from "../commands/AssociateIdentityProviderConfigCommand";
import { CreateAddonCommandInput, CreateAddonCommandOutput } from "../commands/CreateAddonCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import {
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput,
} from "../commands/CreateFargateProfileCommand";
import { CreateNodegroupCommandInput, CreateNodegroupCommandOutput } from "../commands/CreateNodegroupCommand";
import { DeleteAddonCommandInput, DeleteAddonCommandOutput } from "../commands/DeleteAddonCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput,
} from "../commands/DeleteFargateProfileCommand";
import { DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput } from "../commands/DeleteNodegroupCommand";
import { DeregisterClusterCommandInput, DeregisterClusterCommandOutput } from "../commands/DeregisterClusterCommand";
import { DescribeAddonCommandInput, DescribeAddonCommandOutput } from "../commands/DescribeAddonCommand";
import {
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
} from "../commands/DescribeAddonVersionsCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "../commands/DescribeClusterCommand";
import {
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput,
} from "../commands/DescribeFargateProfileCommand";
import {
  DescribeIdentityProviderConfigCommandInput,
  DescribeIdentityProviderConfigCommandOutput,
} from "../commands/DescribeIdentityProviderConfigCommand";
import { DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput } from "../commands/DescribeNodegroupCommand";
import { DescribeUpdateCommandInput, DescribeUpdateCommandOutput } from "../commands/DescribeUpdateCommand";
import {
  DisassociateIdentityProviderConfigCommandInput,
  DisassociateIdentityProviderConfigCommandOutput,
} from "../commands/DisassociateIdentityProviderConfigCommand";
import { ListAddonsCommandInput, ListAddonsCommandOutput } from "../commands/ListAddonsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import {
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
} from "../commands/ListFargateProfilesCommand";
import {
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
} from "../commands/ListIdentityProviderConfigsCommand";
import { ListNodegroupsCommandInput, ListNodegroupsCommandOutput } from "../commands/ListNodegroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUpdatesCommandInput, ListUpdatesCommandOutput } from "../commands/ListUpdatesCommand";
import { RegisterClusterCommandInput, RegisterClusterCommandOutput } from "../commands/RegisterClusterCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAddonCommandInput, UpdateAddonCommandOutput } from "../commands/UpdateAddonCommand";
import {
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput,
} from "../commands/UpdateClusterConfigCommand";
import {
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput,
} from "../commands/UpdateClusterVersionCommand";
import {
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
} from "../commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
} from "../commands/UpdateNodegroupVersionCommand";
import {
  AccessDeniedException,
  Addon,
  AddonHealth,
  AddonInfo,
  AddonIssue,
  AddonVersionInfo,
  AutoScalingGroup,
  BadRequestException,
  Certificate,
  ClientException,
  Cluster,
  Compatibility,
  ConnectorConfigRequest,
  ConnectorConfigResponse,
  EncryptionConfig,
  ErrorDetail,
  FargateProfile,
  FargateProfileSelector,
  Identity,
  IdentityProviderConfig,
  IdentityProviderConfigResponse,
  InvalidParameterException,
  InvalidRequestException,
  Issue,
  KubernetesNetworkConfigRequest,
  KubernetesNetworkConfigResponse,
  LaunchTemplateSpecification,
  Logging,
  LogSetup,
  LogType,
  Nodegroup,
  NodegroupHealth,
  NodegroupResources,
  NodegroupScalingConfig,
  NodegroupUpdateConfig,
  NotFoundException,
  OIDC,
  OidcIdentityProviderConfig,
  OidcIdentityProviderConfigRequest,
  Provider,
  RemoteAccessConfig,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourcePropagationDelayException,
  ServerException,
  ServiceUnavailableException,
  Taint,
  UnsupportedAvailabilityZoneException,
  Update,
  UpdateLabelsPayload,
  UpdateParam,
  UpdateTaintsPayload,
  VpcConfigRequest,
  VpcConfigResponse,
} from "../models/models_0";

export const serializeAws_restJson1AssociateEncryptionConfigCommand = async (
  input: AssociateEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/encryption-config/associate";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.encryptionConfig !== undefined &&
      input.encryptionConfig !== null && {
        encryptionConfig: serializeAws_restJson1EncryptionConfigList(input.encryptionConfig, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateIdentityProviderConfigCommand = async (
  input: AssociateIdentityProviderConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/identity-provider-configs/associate";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.oidc !== undefined &&
      input.oidc !== null && { oidc: serializeAws_restJson1OidcIdentityProviderConfigRequest(input.oidc, context) }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAddonCommand = async (
  input: CreateAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/addons";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.addonName !== undefined && input.addonName !== null && { addonName: input.addonName }),
    ...(input.addonVersion !== undefined && input.addonVersion !== null && { addonVersion: input.addonVersion }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.resolveConflicts !== undefined &&
      input.resolveConflicts !== null && { resolveConflicts: input.resolveConflicts }),
    ...(input.serviceAccountRoleArn !== undefined &&
      input.serviceAccountRoleArn !== null && { serviceAccountRoleArn: input.serviceAccountRoleArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.encryptionConfig !== undefined &&
      input.encryptionConfig !== null && {
        encryptionConfig: serializeAws_restJson1EncryptionConfigList(input.encryptionConfig, context),
      }),
    ...(input.kubernetesNetworkConfig !== undefined &&
      input.kubernetesNetworkConfig !== null && {
        kubernetesNetworkConfig: serializeAws_restJson1KubernetesNetworkConfigRequest(
          input.kubernetesNetworkConfig,
          context
        ),
      }),
    ...(input.logging !== undefined &&
      input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.resourcesVpcConfig !== undefined &&
      input.resourcesVpcConfig !== null && {
        resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(input.resourcesVpcConfig, context),
      }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateFargateProfileCommand = async (
  input: CreateFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/fargate-profiles";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.fargateProfileName !== undefined &&
      input.fargateProfileName !== null && { fargateProfileName: input.fargateProfileName }),
    ...(input.podExecutionRoleArn !== undefined &&
      input.podExecutionRoleArn !== null && { podExecutionRoleArn: input.podExecutionRoleArn }),
    ...(input.selectors !== undefined &&
      input.selectors !== null && {
        selectors: serializeAws_restJson1FargateProfileSelectors(input.selectors, context),
      }),
    ...(input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateNodegroupCommand = async (
  input: CreateNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/node-groups";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.amiType !== undefined && input.amiType !== null && { amiType: input.amiType }),
    ...(input.capacityType !== undefined && input.capacityType !== null && { capacityType: input.capacityType }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.diskSize !== undefined && input.diskSize !== null && { diskSize: input.diskSize }),
    ...(input.instanceTypes !== undefined &&
      input.instanceTypes !== null && {
        instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
      }),
    ...(input.labels !== undefined &&
      input.labels !== null && { labels: serializeAws_restJson1labelsMap(input.labels, context) }),
    ...(input.launchTemplate !== undefined &&
      input.launchTemplate !== null && {
        launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
      }),
    ...(input.nodeRole !== undefined && input.nodeRole !== null && { nodeRole: input.nodeRole }),
    ...(input.nodegroupName !== undefined && input.nodegroupName !== null && { nodegroupName: input.nodegroupName }),
    ...(input.releaseVersion !== undefined &&
      input.releaseVersion !== null && { releaseVersion: input.releaseVersion }),
    ...(input.remoteAccess !== undefined &&
      input.remoteAccess !== null && {
        remoteAccess: serializeAws_restJson1RemoteAccessConfig(input.remoteAccess, context),
      }),
    ...(input.scalingConfig !== undefined &&
      input.scalingConfig !== null && {
        scalingConfig: serializeAws_restJson1NodegroupScalingConfig(input.scalingConfig, context),
      }),
    ...(input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.taints !== undefined &&
      input.taints !== null && { taints: serializeAws_restJson1taintsList(input.taints, context) }),
    ...(input.updateConfig !== undefined &&
      input.updateConfig !== null && {
        updateConfig: serializeAws_restJson1NodegroupUpdateConfig(input.updateConfig, context),
      }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAddonCommand = async (
  input: DeleteAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/addons/{addonName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.addonName !== undefined) {
    const labelValue: string = input.addonName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: addonName.");
    }
    resolvedPath = resolvedPath.replace("{addonName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: addonName.");
  }
  const query: any = {
    ...(input.preserve !== undefined && { preserve: input.preserve.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFargateProfileCommand = async (
  input: DeleteFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.fargateProfileName !== undefined) {
    const labelValue: string = input.fargateProfileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fargateProfileName.");
    }
    resolvedPath = resolvedPath.replace("{fargateProfileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: fargateProfileName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteNodegroupCommand = async (
  input: DeleteNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/node-groups/{nodegroupName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: string = input.nodegroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: nodegroupName.");
    }
    resolvedPath = resolvedPath.replace("{nodegroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeregisterClusterCommand = async (
  input: DeregisterClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cluster-registrations/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAddonCommand = async (
  input: DescribeAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/addons/{addonName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.addonName !== undefined) {
    const labelValue: string = input.addonName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: addonName.");
    }
    resolvedPath = resolvedPath.replace("{addonName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: addonName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAddonVersionsCommand = async (
  input: DescribeAddonVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/addons/supported-versions";
  const query: any = {
    ...(input.kubernetesVersion !== undefined && { kubernetesVersion: input.kubernetesVersion }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.addonName !== undefined && { addonName: input.addonName }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeFargateProfileCommand = async (
  input: DescribeFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.fargateProfileName !== undefined) {
    const labelValue: string = input.fargateProfileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fargateProfileName.");
    }
    resolvedPath = resolvedPath.replace("{fargateProfileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: fargateProfileName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeIdentityProviderConfigCommand = async (
  input: DescribeIdentityProviderConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/identity-provider-configs/describe";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.identityProviderConfig !== undefined &&
      input.identityProviderConfig !== null && {
        identityProviderConfig: serializeAws_restJson1IdentityProviderConfig(input.identityProviderConfig, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeNodegroupCommand = async (
  input: DescribeNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/node-groups/{nodegroupName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: string = input.nodegroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: nodegroupName.");
    }
    resolvedPath = resolvedPath.replace("{nodegroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeUpdateCommand = async (
  input: DescribeUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}/updates/{updateId}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.updateId !== undefined) {
    const labelValue: string = input.updateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: updateId.");
    }
    resolvedPath = resolvedPath.replace("{updateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: updateId.");
  }
  const query: any = {
    ...(input.nodegroupName !== undefined && { nodegroupName: input.nodegroupName }),
    ...(input.addonName !== undefined && { addonName: input.addonName }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociateIdentityProviderConfigCommand = async (
  input: DisassociateIdentityProviderConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/identity-provider-configs/disassociate";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.identityProviderConfig !== undefined &&
      input.identityProviderConfig !== null && {
        identityProviderConfig: serializeAws_restJson1IdentityProviderConfig(input.identityProviderConfig, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListAddonsCommand = async (
  input: ListAddonsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/addons";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters";
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.include !== undefined && { include: (input.include || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFargateProfilesCommand = async (
  input: ListFargateProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/fargate-profiles";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListIdentityProviderConfigsCommand = async (
  input: ListIdentityProviderConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/identity-provider-configs";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListNodegroupsCommand = async (
  input: ListNodegroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/node-groups";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListUpdatesCommand = async (
  input: ListUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}/updates";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  const query: any = {
    ...(input.nodegroupName !== undefined && { nodegroupName: input.nodegroupName }),
    ...(input.addonName !== undefined && { addonName: input.addonName }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RegisterClusterCommand = async (
  input: RegisterClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cluster-registrations";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.connectorConfig !== undefined &&
      input.connectorConfig !== null && {
        connectorConfig: serializeAws_restJson1ConnectorConfigRequest(input.connectorConfig, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAddonCommand = async (
  input: UpdateAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/addons/{addonName}/update";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.addonName !== undefined) {
    const labelValue: string = input.addonName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: addonName.");
    }
    resolvedPath = resolvedPath.replace("{addonName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: addonName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.addonVersion !== undefined && input.addonVersion !== null && { addonVersion: input.addonVersion }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.resolveConflicts !== undefined &&
      input.resolveConflicts !== null && { resolveConflicts: input.resolveConflicts }),
    ...(input.serviceAccountRoleArn !== undefined &&
      input.serviceAccountRoleArn !== null && { serviceAccountRoleArn: input.serviceAccountRoleArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateClusterConfigCommand = async (
  input: UpdateClusterConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}/update-config";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.logging !== undefined &&
      input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
    ...(input.resourcesVpcConfig !== undefined &&
      input.resourcesVpcConfig !== null && {
        resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(input.resourcesVpcConfig, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateClusterVersionCommand = async (
  input: UpdateClusterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}/updates";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateNodegroupConfigCommand = async (
  input: UpdateNodegroupConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/node-groups/{nodegroupName}/update-config";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: string = input.nodegroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: nodegroupName.");
    }
    resolvedPath = resolvedPath.replace("{nodegroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.labels !== undefined &&
      input.labels !== null && { labels: serializeAws_restJson1UpdateLabelsPayload(input.labels, context) }),
    ...(input.scalingConfig !== undefined &&
      input.scalingConfig !== null && {
        scalingConfig: serializeAws_restJson1NodegroupScalingConfig(input.scalingConfig, context),
      }),
    ...(input.taints !== undefined &&
      input.taints !== null && { taints: serializeAws_restJson1UpdateTaintsPayload(input.taints, context) }),
    ...(input.updateConfig !== undefined &&
      input.updateConfig !== null && {
        updateConfig: serializeAws_restJson1NodegroupUpdateConfig(input.updateConfig, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateNodegroupVersionCommand = async (
  input: UpdateNodegroupVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/node-groups/{nodegroupName}/update-version";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clusterName.");
    }
    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: string = input.nodegroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: nodegroupName.");
    }
    resolvedPath = resolvedPath.replace("{nodegroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.force !== undefined && input.force !== null && { force: input.force }),
    ...(input.launchTemplate !== undefined &&
      input.launchTemplate !== null && {
        launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
      }),
    ...(input.releaseVersion !== undefined &&
      input.releaseVersion !== null && { releaseVersion: input.releaseVersion }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AssociateEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateEncryptionConfigCommandError(output, context);
  }
  const contents: AssociateEncryptionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    update: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AssociateIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateIdentityProviderConfigCommandError(output, context);
  }
  const contents: AssociateIdentityProviderConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
    update: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateIdentityProviderConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIdentityProviderConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAddonCommandError(output, context);
  }
  const contents: CreateAddonCommandOutput = {
    $metadata: deserializeMetadata(output),
    addon: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addon !== undefined && data.addon !== null) {
    contents.addon = deserializeAws_restJson1Addon(data.addon, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAddonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateClusterCommandError(output, context);
  }
  const contents: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    cluster: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster !== undefined && data.cluster !== null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFargateProfileCommandError(output, context);
  }
  const contents: CreateFargateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    fargateProfile: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
    contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFargateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNodegroupCommandError(output, context);
  }
  const contents: CreateNodegroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    nodegroup: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nodegroup !== undefined && data.nodegroup !== null) {
    contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateNodegroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAddonCommandError(output, context);
  }
  const contents: DeleteAddonCommandOutput = {
    $metadata: deserializeMetadata(output),
    addon: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addon !== undefined && data.addon !== null) {
    contents.addon = deserializeAws_restJson1Addon(data.addon, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAddonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteClusterCommandError(output, context);
  }
  const contents: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    cluster: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster !== undefined && data.cluster !== null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFargateProfileCommandError(output, context);
  }
  const contents: DeleteFargateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    fargateProfile: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
    contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFargateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNodegroupCommandError(output, context);
  }
  const contents: DeleteNodegroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    nodegroup: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nodegroup !== undefined && data.nodegroup !== null) {
    contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteNodegroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeregisterClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterClusterCommandError(output, context);
  }
  const contents: DeregisterClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    cluster: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster !== undefined && data.cluster !== null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeregisterClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.eks#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAddonCommandError(output, context);
  }
  const contents: DescribeAddonCommandOutput = {
    $metadata: deserializeMetadata(output),
    addon: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addon !== undefined && data.addon !== null) {
    contents.addon = deserializeAws_restJson1Addon(data.addon, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAddonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAddonVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAddonVersionsCommandError(output, context);
  }
  const contents: DescribeAddonVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    addons: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addons !== undefined && data.addons !== null) {
    contents.addons = deserializeAws_restJson1Addons(data.addons, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAddonVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeClusterCommandError(output, context);
  }
  const contents: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    cluster: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster !== undefined && data.cluster !== null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFargateProfileCommandError(output, context);
  }
  const contents: DescribeFargateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    fargateProfile: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
    contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFargateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIdentityProviderConfigCommandError(output, context);
  }
  const contents: DescribeIdentityProviderConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    identityProviderConfig: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProviderConfig !== undefined && data.identityProviderConfig !== null) {
    contents.identityProviderConfig = deserializeAws_restJson1IdentityProviderConfigResponse(
      data.identityProviderConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeIdentityProviderConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNodegroupCommandError(output, context);
  }
  const contents: DescribeNodegroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    nodegroup: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nodegroup !== undefined && data.nodegroup !== null) {
    contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeNodegroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeUpdateCommandError(output, context);
  }
  const contents: DescribeUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
    update: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateIdentityProviderConfigCommandError(output, context);
  }
  const contents: DisassociateIdentityProviderConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    update: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateIdentityProviderConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIdentityProviderConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAddonsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddonsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAddonsCommandError(output, context);
  }
  const contents: ListAddonsCommandOutput = {
    $metadata: deserializeMetadata(output),
    addons: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addons !== undefined && data.addons !== null) {
    contents.addons = deserializeAws_restJson1StringList(data.addons, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAddonsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddonsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListClustersCommandError(output, context);
  }
  const contents: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    clusters: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusters !== undefined && data.clusters !== null) {
    contents.clusters = deserializeAws_restJson1StringList(data.clusters, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListFargateProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFargateProfilesCommandError(output, context);
  }
  const contents: ListFargateProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    fargateProfileNames: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfileNames !== undefined && data.fargateProfileNames !== null) {
    contents.fargateProfileNames = deserializeAws_restJson1StringList(data.fargateProfileNames, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFargateProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListIdentityProviderConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIdentityProviderConfigsCommandError(output, context);
  }
  const contents: ListIdentityProviderConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    identityProviderConfigs: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProviderConfigs !== undefined && data.identityProviderConfigs !== null) {
    contents.identityProviderConfigs = deserializeAws_restJson1IdentityProviderConfigs(
      data.identityProviderConfigs,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIdentityProviderConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListNodegroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNodegroupsCommandError(output, context);
  }
  const contents: ListNodegroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    nodegroups: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.nodegroups !== undefined && data.nodegroups !== null) {
    contents.nodegroups = deserializeAws_restJson1StringList(data.nodegroups, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNodegroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUpdatesCommandError(output, context);
  }
  const contents: ListUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    updateIds: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.updateIds !== undefined && data.updateIds !== null) {
    contents.updateIds = deserializeAws_restJson1StringList(data.updateIds, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListUpdatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RegisterClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterClusterCommandError(output, context);
  }
  const contents: RegisterClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    cluster: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster !== undefined && data.cluster !== null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.eks#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourcePropagationDelayException":
    case "com.amazonaws.eks#ResourcePropagationDelayException":
      response = {
        ...(await deserializeAws_restJson1ResourcePropagationDelayExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAddonCommandError(output, context);
  }
  const contents: UpdateAddonCommandOutput = {
    $metadata: deserializeMetadata(output),
    update: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAddonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateClusterConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClusterConfigCommandError(output, context);
  }
  const contents: UpdateClusterConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    update: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateClusterConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateClusterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClusterVersionCommandError(output, context);
  }
  const contents: UpdateClusterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    update: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateClusterVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateNodegroupConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNodegroupConfigCommandError(output, context);
  }
  const contents: UpdateNodegroupConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    update: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateNodegroupConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateNodegroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNodegroupVersionCommandError(output, context);
  }
  const contents: UpdateNodegroupVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    update: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateNodegroupVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: ClientException = {
    name: "ClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    addonName: undefined,
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.addonName !== undefined && data.addonName !== null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  return contents;
};

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    addonName: undefined,
    clusterName: undefined,
    fargateProfileName: undefined,
    message: undefined,
    nodegroupName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.addonName !== undefined && data.addonName !== null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.fargateProfileName !== undefined && data.fargateProfileName !== null) {
    contents.fargateProfileName = __expectString(data.fargateProfileName);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    addonName: undefined,
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.addonName !== undefined && data.addonName !== null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    addonName: undefined,
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.addonName !== undefined && data.addonName !== null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  return contents;
};

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    addonName: undefined,
    clusterName: undefined,
    fargateProfileName: undefined,
    message: undefined,
    nodegroupName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.addonName !== undefined && data.addonName !== null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.fargateProfileName !== undefined && data.fargateProfileName !== null) {
    contents.fargateProfileName = __expectString(data.fargateProfileName);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  return contents;
};

const deserializeAws_restJson1ResourcePropagationDelayExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePropagationDelayException> => {
  const contents: ResourcePropagationDelayException = {
    name: "ResourcePropagationDelayException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const contents: ServerException = {
    name: "ServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    addonName: undefined,
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.addonName !== undefined && data.addonName !== null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZoneException> => {
  const contents: UnsupportedAvailabilityZoneException = {
    name: "UnsupportedAvailabilityZoneException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined,
    validZones: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  if (data.validZones !== undefined && data.validZones !== null) {
    contents.validZones = deserializeAws_restJson1StringList(data.validZones, context);
  }
  return contents;
};

const serializeAws_restJson1ConnectorConfigRequest = (input: ConnectorConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.provider !== undefined && input.provider !== null && { provider: input.provider }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1EncryptionConfig = (input: EncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.provider !== undefined &&
      input.provider !== null && { provider: serializeAws_restJson1Provider(input.provider, context) }),
    ...(input.resources !== undefined &&
      input.resources !== null && { resources: serializeAws_restJson1StringList(input.resources, context) }),
  };
};

const serializeAws_restJson1EncryptionConfigList = (input: EncryptionConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1EncryptionConfig(entry, context);
    });
};

const serializeAws_restJson1FargateProfileLabel = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1FargateProfileSelector = (input: FargateProfileSelector, context: __SerdeContext): any => {
  return {
    ...(input.labels !== undefined &&
      input.labels !== null && { labels: serializeAws_restJson1FargateProfileLabel(input.labels, context) }),
    ...(input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace }),
  };
};

const serializeAws_restJson1FargateProfileSelectors = (
  input: FargateProfileSelector[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1FargateProfileSelector(entry, context);
    });
};

const serializeAws_restJson1IdentityProviderConfig = (input: IdentityProviderConfig, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1KubernetesNetworkConfigRequest = (
  input: KubernetesNetworkConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceIpv4Cidr !== undefined &&
      input.serviceIpv4Cidr !== null && { serviceIpv4Cidr: input.serviceIpv4Cidr }),
  };
};

const serializeAws_restJson1labelsKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1labelsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1LaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_restJson1Logging = (input: Logging, context: __SerdeContext): any => {
  return {
    ...(input.clusterLogging !== undefined &&
      input.clusterLogging !== null && {
        clusterLogging: serializeAws_restJson1LogSetups(input.clusterLogging, context),
      }),
  };
};

const serializeAws_restJson1LogSetup = (input: LogSetup, context: __SerdeContext): any => {
  return {
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.types !== undefined &&
      input.types !== null && { types: serializeAws_restJson1LogTypes(input.types, context) }),
  };
};

const serializeAws_restJson1LogSetups = (input: LogSetup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LogSetup(entry, context);
    });
};

const serializeAws_restJson1LogTypes = (input: (LogType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1NodegroupScalingConfig = (input: NodegroupScalingConfig, context: __SerdeContext): any => {
  return {
    ...(input.desiredSize !== undefined && input.desiredSize !== null && { desiredSize: input.desiredSize }),
    ...(input.maxSize !== undefined && input.maxSize !== null && { maxSize: input.maxSize }),
    ...(input.minSize !== undefined && input.minSize !== null && { minSize: input.minSize }),
  };
};

const serializeAws_restJson1NodegroupUpdateConfig = (input: NodegroupUpdateConfig, context: __SerdeContext): any => {
  return {
    ...(input.maxUnavailable !== undefined &&
      input.maxUnavailable !== null && { maxUnavailable: input.maxUnavailable }),
    ...(input.maxUnavailablePercentage !== undefined &&
      input.maxUnavailablePercentage !== null && { maxUnavailablePercentage: input.maxUnavailablePercentage }),
  };
};

const serializeAws_restJson1OidcIdentityProviderConfigRequest = (
  input: OidcIdentityProviderConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.groupsClaim !== undefined && input.groupsClaim !== null && { groupsClaim: input.groupsClaim }),
    ...(input.groupsPrefix !== undefined && input.groupsPrefix !== null && { groupsPrefix: input.groupsPrefix }),
    ...(input.identityProviderConfigName !== undefined &&
      input.identityProviderConfigName !== null && { identityProviderConfigName: input.identityProviderConfigName }),
    ...(input.issuerUrl !== undefined && input.issuerUrl !== null && { issuerUrl: input.issuerUrl }),
    ...(input.requiredClaims !== undefined &&
      input.requiredClaims !== null && {
        requiredClaims: serializeAws_restJson1requiredClaimsMap(input.requiredClaims, context),
      }),
    ...(input.usernameClaim !== undefined && input.usernameClaim !== null && { usernameClaim: input.usernameClaim }),
    ...(input.usernamePrefix !== undefined &&
      input.usernamePrefix !== null && { usernamePrefix: input.usernamePrefix }),
  };
};

const serializeAws_restJson1Provider = (input: Provider, context: __SerdeContext): any => {
  return {
    ...(input.keyArn !== undefined && input.keyArn !== null && { keyArn: input.keyArn }),
  };
};

const serializeAws_restJson1RemoteAccessConfig = (input: RemoteAccessConfig, context: __SerdeContext): any => {
  return {
    ...(input.ec2SshKey !== undefined && input.ec2SshKey !== null && { ec2SshKey: input.ec2SshKey }),
    ...(input.sourceSecurityGroups !== undefined &&
      input.sourceSecurityGroups !== null && {
        sourceSecurityGroups: serializeAws_restJson1StringList(input.sourceSecurityGroups, context),
      }),
  };
};

const serializeAws_restJson1requiredClaimsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1Taint = (input: Taint, context: __SerdeContext): any => {
  return {
    ...(input.effect !== undefined && input.effect !== null && { effect: input.effect }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1taintsList = (input: Taint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Taint(entry, context);
    });
};

const serializeAws_restJson1UpdateLabelsPayload = (input: UpdateLabelsPayload, context: __SerdeContext): any => {
  return {
    ...(input.addOrUpdateLabels !== undefined &&
      input.addOrUpdateLabels !== null && {
        addOrUpdateLabels: serializeAws_restJson1labelsMap(input.addOrUpdateLabels, context),
      }),
    ...(input.removeLabels !== undefined &&
      input.removeLabels !== null && {
        removeLabels: serializeAws_restJson1labelsKeyList(input.removeLabels, context),
      }),
  };
};

const serializeAws_restJson1UpdateTaintsPayload = (input: UpdateTaintsPayload, context: __SerdeContext): any => {
  return {
    ...(input.addOrUpdateTaints !== undefined &&
      input.addOrUpdateTaints !== null && {
        addOrUpdateTaints: serializeAws_restJson1taintsList(input.addOrUpdateTaints, context),
      }),
    ...(input.removeTaints !== undefined &&
      input.removeTaints !== null && { removeTaints: serializeAws_restJson1taintsList(input.removeTaints, context) }),
  };
};

const serializeAws_restJson1VpcConfigRequest = (input: VpcConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.endpointPrivateAccess !== undefined &&
      input.endpointPrivateAccess !== null && { endpointPrivateAccess: input.endpointPrivateAccess }),
    ...(input.endpointPublicAccess !== undefined &&
      input.endpointPublicAccess !== null && { endpointPublicAccess: input.endpointPublicAccess }),
    ...(input.publicAccessCidrs !== undefined &&
      input.publicAccessCidrs !== null && {
        publicAccessCidrs: serializeAws_restJson1StringList(input.publicAccessCidrs, context),
      }),
    ...(input.securityGroupIds !== undefined &&
      input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
      }),
    ...(input.subnetIds !== undefined &&
      input.subnetIds !== null && { subnetIds: serializeAws_restJson1StringList(input.subnetIds, context) }),
  };
};

const deserializeAws_restJson1Addon = (output: any, context: __SerdeContext): Addon => {
  return {
    addonArn: __expectString(output.addonArn),
    addonName: __expectString(output.addonName),
    addonVersion: __expectString(output.addonVersion),
    clusterName: __expectString(output.clusterName),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    health:
      output.health !== undefined && output.health !== null
        ? deserializeAws_restJson1AddonHealth(output.health, context)
        : undefined,
    modifiedAt:
      output.modifiedAt !== undefined && output.modifiedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modifiedAt)))
        : undefined,
    serviceAccountRoleArn: __expectString(output.serviceAccountRoleArn),
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AddonHealth = (output: any, context: __SerdeContext): AddonHealth => {
  return {
    issues:
      output.issues !== undefined && output.issues !== null
        ? deserializeAws_restJson1AddonIssueList(output.issues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AddonInfo = (output: any, context: __SerdeContext): AddonInfo => {
  return {
    addonName: __expectString(output.addonName),
    addonVersions:
      output.addonVersions !== undefined && output.addonVersions !== null
        ? deserializeAws_restJson1AddonVersionInfoList(output.addonVersions, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AddonIssue = (output: any, context: __SerdeContext): AddonIssue => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceIds:
      output.resourceIds !== undefined && output.resourceIds !== null
        ? deserializeAws_restJson1StringList(output.resourceIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AddonIssueList = (output: any, context: __SerdeContext): AddonIssue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AddonIssue(entry, context);
    });
};

const deserializeAws_restJson1Addons = (output: any, context: __SerdeContext): AddonInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AddonInfo(entry, context);
    });
};

const deserializeAws_restJson1AddonVersionInfo = (output: any, context: __SerdeContext): AddonVersionInfo => {
  return {
    addonVersion: __expectString(output.addonVersion),
    architecture:
      output.architecture !== undefined && output.architecture !== null
        ? deserializeAws_restJson1StringList(output.architecture, context)
        : undefined,
    compatibilities:
      output.compatibilities !== undefined && output.compatibilities !== null
        ? deserializeAws_restJson1Compatibilities(output.compatibilities, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AddonVersionInfoList = (output: any, context: __SerdeContext): AddonVersionInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AddonVersionInfo(entry, context);
    });
};

const deserializeAws_restJson1AutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1AutoScalingGroupList = (output: any, context: __SerdeContext): AutoScalingGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AutoScalingGroup(entry, context);
    });
};

const deserializeAws_restJson1Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    data: __expectString(output.data),
  } as any;
};

const deserializeAws_restJson1Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    arn: __expectString(output.arn),
    certificateAuthority:
      output.certificateAuthority !== undefined && output.certificateAuthority !== null
        ? deserializeAws_restJson1Certificate(output.certificateAuthority, context)
        : undefined,
    clientRequestToken: __expectString(output.clientRequestToken),
    connectorConfig:
      output.connectorConfig !== undefined && output.connectorConfig !== null
        ? deserializeAws_restJson1ConnectorConfigResponse(output.connectorConfig, context)
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    encryptionConfig:
      output.encryptionConfig !== undefined && output.encryptionConfig !== null
        ? deserializeAws_restJson1EncryptionConfigList(output.encryptionConfig, context)
        : undefined,
    endpoint: __expectString(output.endpoint),
    identity:
      output.identity !== undefined && output.identity !== null
        ? deserializeAws_restJson1Identity(output.identity, context)
        : undefined,
    kubernetesNetworkConfig:
      output.kubernetesNetworkConfig !== undefined && output.kubernetesNetworkConfig !== null
        ? deserializeAws_restJson1KubernetesNetworkConfigResponse(output.kubernetesNetworkConfig, context)
        : undefined,
    logging:
      output.logging !== undefined && output.logging !== null
        ? deserializeAws_restJson1Logging(output.logging, context)
        : undefined,
    name: __expectString(output.name),
    platformVersion: __expectString(output.platformVersion),
    resourcesVpcConfig:
      output.resourcesVpcConfig !== undefined && output.resourcesVpcConfig !== null
        ? deserializeAws_restJson1VpcConfigResponse(output.resourcesVpcConfig, context)
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1Compatibilities = (output: any, context: __SerdeContext): Compatibility[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Compatibility(entry, context);
    });
};

const deserializeAws_restJson1Compatibility = (output: any, context: __SerdeContext): Compatibility => {
  return {
    clusterVersion: __expectString(output.clusterVersion),
    defaultVersion: __expectBoolean(output.defaultVersion),
    platformVersions:
      output.platformVersions !== undefined && output.platformVersions !== null
        ? deserializeAws_restJson1StringList(output.platformVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorConfigResponse = (
  output: any,
  context: __SerdeContext
): ConnectorConfigResponse => {
  return {
    activationCode: __expectString(output.activationCode),
    activationExpiry:
      output.activationExpiry !== undefined && output.activationExpiry !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.activationExpiry)))
        : undefined,
    activationId: __expectString(output.activationId),
    provider: __expectString(output.provider),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    provider:
      output.provider !== undefined && output.provider !== null
        ? deserializeAws_restJson1Provider(output.provider, context)
        : undefined,
    resources:
      output.resources !== undefined && output.resources !== null
        ? deserializeAws_restJson1StringList(output.resources, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EncryptionConfigList = (output: any, context: __SerdeContext): EncryptionConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EncryptionConfig(entry, context);
    });
};

const deserializeAws_restJson1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    resourceIds:
      output.resourceIds !== undefined && output.resourceIds !== null
        ? deserializeAws_restJson1StringList(output.resourceIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorDetail(entry, context);
    });
};

const deserializeAws_restJson1FargateProfile = (output: any, context: __SerdeContext): FargateProfile => {
  return {
    clusterName: __expectString(output.clusterName),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    fargateProfileArn: __expectString(output.fargateProfileArn),
    fargateProfileName: __expectString(output.fargateProfileName),
    podExecutionRoleArn: __expectString(output.podExecutionRoleArn),
    selectors:
      output.selectors !== undefined && output.selectors !== null
        ? deserializeAws_restJson1FargateProfileSelectors(output.selectors, context)
        : undefined,
    status: __expectString(output.status),
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1StringList(output.subnets, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FargateProfileLabel = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1FargateProfileSelector = (
  output: any,
  context: __SerdeContext
): FargateProfileSelector => {
  return {
    labels:
      output.labels !== undefined && output.labels !== null
        ? deserializeAws_restJson1FargateProfileLabel(output.labels, context)
        : undefined,
    namespace: __expectString(output.namespace),
  } as any;
};

const deserializeAws_restJson1FargateProfileSelectors = (
  output: any,
  context: __SerdeContext
): FargateProfileSelector[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FargateProfileSelector(entry, context);
    });
};

const deserializeAws_restJson1Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    oidc:
      output.oidc !== undefined && output.oidc !== null
        ? deserializeAws_restJson1OIDC(output.oidc, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IdentityProviderConfig = (
  output: any,
  context: __SerdeContext
): IdentityProviderConfig => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1IdentityProviderConfigResponse = (
  output: any,
  context: __SerdeContext
): IdentityProviderConfigResponse => {
  return {
    oidc:
      output.oidc !== undefined && output.oidc !== null
        ? deserializeAws_restJson1OidcIdentityProviderConfig(output.oidc, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IdentityProviderConfigs = (
  output: any,
  context: __SerdeContext
): IdentityProviderConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IdentityProviderConfig(entry, context);
    });
};

const deserializeAws_restJson1Issue = (output: any, context: __SerdeContext): Issue => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceIds:
      output.resourceIds !== undefined && output.resourceIds !== null
        ? deserializeAws_restJson1StringList(output.resourceIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IssueList = (output: any, context: __SerdeContext): Issue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Issue(entry, context);
    });
};

const deserializeAws_restJson1KubernetesNetworkConfigResponse = (
  output: any,
  context: __SerdeContext
): KubernetesNetworkConfigResponse => {
  return {
    serviceIpv4Cidr: __expectString(output.serviceIpv4Cidr),
  } as any;
};

const deserializeAws_restJson1labelsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1LaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): LaunchTemplateSpecification => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1Logging = (output: any, context: __SerdeContext): Logging => {
  return {
    clusterLogging:
      output.clusterLogging !== undefined && output.clusterLogging !== null
        ? deserializeAws_restJson1LogSetups(output.clusterLogging, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LogSetup = (output: any, context: __SerdeContext): LogSetup => {
  return {
    enabled: __expectBoolean(output.enabled),
    types:
      output.types !== undefined && output.types !== null
        ? deserializeAws_restJson1LogTypes(output.types, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LogSetups = (output: any, context: __SerdeContext): LogSetup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LogSetup(entry, context);
    });
};

const deserializeAws_restJson1LogTypes = (output: any, context: __SerdeContext): (LogType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Nodegroup = (output: any, context: __SerdeContext): Nodegroup => {
  return {
    amiType: __expectString(output.amiType),
    capacityType: __expectString(output.capacityType),
    clusterName: __expectString(output.clusterName),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    diskSize: __expectInt32(output.diskSize),
    health:
      output.health !== undefined && output.health !== null
        ? deserializeAws_restJson1NodegroupHealth(output.health, context)
        : undefined,
    instanceTypes:
      output.instanceTypes !== undefined && output.instanceTypes !== null
        ? deserializeAws_restJson1StringList(output.instanceTypes, context)
        : undefined,
    labels:
      output.labels !== undefined && output.labels !== null
        ? deserializeAws_restJson1labelsMap(output.labels, context)
        : undefined,
    launchTemplate:
      output.launchTemplate !== undefined && output.launchTemplate !== null
        ? deserializeAws_restJson1LaunchTemplateSpecification(output.launchTemplate, context)
        : undefined,
    modifiedAt:
      output.modifiedAt !== undefined && output.modifiedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modifiedAt)))
        : undefined,
    nodeRole: __expectString(output.nodeRole),
    nodegroupArn: __expectString(output.nodegroupArn),
    nodegroupName: __expectString(output.nodegroupName),
    releaseVersion: __expectString(output.releaseVersion),
    remoteAccess:
      output.remoteAccess !== undefined && output.remoteAccess !== null
        ? deserializeAws_restJson1RemoteAccessConfig(output.remoteAccess, context)
        : undefined,
    resources:
      output.resources !== undefined && output.resources !== null
        ? deserializeAws_restJson1NodegroupResources(output.resources, context)
        : undefined,
    scalingConfig:
      output.scalingConfig !== undefined && output.scalingConfig !== null
        ? deserializeAws_restJson1NodegroupScalingConfig(output.scalingConfig, context)
        : undefined,
    status: __expectString(output.status),
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1StringList(output.subnets, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    taints:
      output.taints !== undefined && output.taints !== null
        ? deserializeAws_restJson1taintsList(output.taints, context)
        : undefined,
    updateConfig:
      output.updateConfig !== undefined && output.updateConfig !== null
        ? deserializeAws_restJson1NodegroupUpdateConfig(output.updateConfig, context)
        : undefined,
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1NodegroupHealth = (output: any, context: __SerdeContext): NodegroupHealth => {
  return {
    issues:
      output.issues !== undefined && output.issues !== null
        ? deserializeAws_restJson1IssueList(output.issues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NodegroupResources = (output: any, context: __SerdeContext): NodegroupResources => {
  return {
    autoScalingGroups:
      output.autoScalingGroups !== undefined && output.autoScalingGroups !== null
        ? deserializeAws_restJson1AutoScalingGroupList(output.autoScalingGroups, context)
        : undefined,
    remoteAccessSecurityGroup: __expectString(output.remoteAccessSecurityGroup),
  } as any;
};

const deserializeAws_restJson1NodegroupScalingConfig = (
  output: any,
  context: __SerdeContext
): NodegroupScalingConfig => {
  return {
    desiredSize: __expectInt32(output.desiredSize),
    maxSize: __expectInt32(output.maxSize),
    minSize: __expectInt32(output.minSize),
  } as any;
};

const deserializeAws_restJson1NodegroupUpdateConfig = (output: any, context: __SerdeContext): NodegroupUpdateConfig => {
  return {
    maxUnavailable: __expectInt32(output.maxUnavailable),
    maxUnavailablePercentage: __expectInt32(output.maxUnavailablePercentage),
  } as any;
};

const deserializeAws_restJson1OIDC = (output: any, context: __SerdeContext): OIDC => {
  return {
    issuer: __expectString(output.issuer),
  } as any;
};

const deserializeAws_restJson1OidcIdentityProviderConfig = (
  output: any,
  context: __SerdeContext
): OidcIdentityProviderConfig => {
  return {
    clientId: __expectString(output.clientId),
    clusterName: __expectString(output.clusterName),
    groupsClaim: __expectString(output.groupsClaim),
    groupsPrefix: __expectString(output.groupsPrefix),
    identityProviderConfigArn: __expectString(output.identityProviderConfigArn),
    identityProviderConfigName: __expectString(output.identityProviderConfigName),
    issuerUrl: __expectString(output.issuerUrl),
    requiredClaims:
      output.requiredClaims !== undefined && output.requiredClaims !== null
        ? deserializeAws_restJson1requiredClaimsMap(output.requiredClaims, context)
        : undefined,
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    usernameClaim: __expectString(output.usernameClaim),
    usernamePrefix: __expectString(output.usernamePrefix),
  } as any;
};

const deserializeAws_restJson1Provider = (output: any, context: __SerdeContext): Provider => {
  return {
    keyArn: __expectString(output.keyArn),
  } as any;
};

const deserializeAws_restJson1RemoteAccessConfig = (output: any, context: __SerdeContext): RemoteAccessConfig => {
  return {
    ec2SshKey: __expectString(output.ec2SshKey),
    sourceSecurityGroups:
      output.sourceSecurityGroups !== undefined && output.sourceSecurityGroups !== null
        ? deserializeAws_restJson1StringList(output.sourceSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1requiredClaimsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Taint = (output: any, context: __SerdeContext): Taint => {
  return {
    effect: __expectString(output.effect),
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1taintsList = (output: any, context: __SerdeContext): Taint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Taint(entry, context);
    });
};

const deserializeAws_restJson1Update = (output: any, context: __SerdeContext): Update => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_restJson1ErrorDetails(output.errors, context)
        : undefined,
    id: __expectString(output.id),
    params:
      output.params !== undefined && output.params !== null
        ? deserializeAws_restJson1UpdateParams(output.params, context)
        : undefined,
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1UpdateParam = (output: any, context: __SerdeContext): UpdateParam => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1UpdateParams = (output: any, context: __SerdeContext): UpdateParam[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpdateParam(entry, context);
    });
};

const deserializeAws_restJson1VpcConfigResponse = (output: any, context: __SerdeContext): VpcConfigResponse => {
  return {
    clusterSecurityGroupId: __expectString(output.clusterSecurityGroupId),
    endpointPrivateAccess: __expectBoolean(output.endpointPrivateAccess),
    endpointPublicAccess: __expectBoolean(output.endpointPublicAccess),
    publicAccessCidrs:
      output.publicAccessCidrs !== undefined && output.publicAccessCidrs !== null
        ? deserializeAws_restJson1StringList(output.publicAccessCidrs, context)
        : undefined,
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
        : undefined,
    subnetIds:
      output.subnetIds !== undefined && output.subnetIds !== null
        ? deserializeAws_restJson1StringList(output.subnetIds, context)
        : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
