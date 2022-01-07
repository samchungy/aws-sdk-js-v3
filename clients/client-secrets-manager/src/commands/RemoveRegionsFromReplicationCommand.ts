import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { RemoveRegionsFromReplicationRequest, RemoveRegionsFromReplicationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RemoveRegionsFromReplicationCommand,
  serializeAws_json1_1RemoveRegionsFromReplicationCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface RemoveRegionsFromReplicationCommandInput extends RemoveRegionsFromReplicationRequest {}
export interface RemoveRegionsFromReplicationCommandOutput
  extends RemoveRegionsFromReplicationResponse,
    __MetadataBearer {}

/**
 * <p>For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, RemoveRegionsFromReplicationCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, RemoveRegionsFromReplicationCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new RemoveRegionsFromReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRegionsFromReplicationCommandInput} for command's `input` shape.
 * @see {@link RemoveRegionsFromReplicationCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class RemoveRegionsFromReplicationCommand extends $Command<
  RemoveRegionsFromReplicationCommandInput,
  RemoveRegionsFromReplicationCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveRegionsFromReplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveRegionsFromReplicationCommandInput, RemoveRegionsFromReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "RemoveRegionsFromReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveRegionsFromReplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveRegionsFromReplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveRegionsFromReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveRegionsFromReplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveRegionsFromReplicationCommandOutput> {
    return deserializeAws_json1_1RemoveRegionsFromReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
