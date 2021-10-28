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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateFleetRequest } from "../models/models_0";
import { CreateFleetResult } from "../models/models_1";
import { deserializeAws_ec2CreateFleetCommand, serializeAws_ec2CreateFleetCommand } from "../protocols/Aws_ec2";

export interface CreateFleetCommandInput extends CreateFleetRequest {}
export interface CreateFleetCommandOutput extends CreateFleetResult, __MetadataBearer {}

/**
 * <p>Launches an EC2 Fleet.</p>
 *          <p>You can create a single EC2 Fleet that includes multiple launch specifications that vary by
 *          instance type, AMI, Availability Zone, or subnet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html">Launching an EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFleetCommand extends $Command<
  CreateFleetCommandInput,
  CreateFleetCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFleetCommandInput, CreateFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFleetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFleetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFleetCommandOutput> {
    return deserializeAws_ec2CreateFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
