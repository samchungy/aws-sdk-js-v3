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

import { DeleteResourcePolicyRequest, DeleteResourcePolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteResourcePolicyCommand,
  serializeAws_json1_1DeleteResourcePolicyCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface DeleteResourcePolicyCommandInput extends DeleteResourcePolicyRequest {}
export interface DeleteResourcePolicyCommandOutput extends DeleteResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the resource-based permission policy attached to the secret.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:DeleteResourcePolicy</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To attach a resource policy to a secret, use <a>PutResourcePolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve the current resource-based policy attached to a secret, use <a>GetResourcePolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class DeleteResourcePolicyCommand extends $Command<
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteResourcePolicyCommandInput) {
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
  ): Handler<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "DeleteResourcePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResourcePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteResourcePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResourcePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteResourcePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResourcePolicyCommandOutput> {
    return deserializeAws_json1_1DeleteResourcePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
