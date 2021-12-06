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

import { FlattenedXmlMapWithXmlNamespaceOutput } from "../models/models_0";
import {
  deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand,
  serializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface FlattenedXmlMapWithXmlNamespaceCommandInput {}
export interface FlattenedXmlMapWithXmlNamespaceCommandOutput
  extends FlattenedXmlMapWithXmlNamespaceOutput,
    __MetadataBearer {}

/**
 * Flattened maps with @xmlNamespace and @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new FlattenedXmlMapWithXmlNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FlattenedXmlMapWithXmlNamespaceCommandInput} for command's `input` shape.
 * @see {@link FlattenedXmlMapWithXmlNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class FlattenedXmlMapWithXmlNamespaceCommand extends $Command<
  FlattenedXmlMapWithXmlNamespaceCommandInput,
  FlattenedXmlMapWithXmlNamespaceCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FlattenedXmlMapWithXmlNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FlattenedXmlMapWithXmlNamespaceCommandInput, FlattenedXmlMapWithXmlNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "FlattenedXmlMapWithXmlNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: FlattenedXmlMapWithXmlNamespaceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: FlattenedXmlMapWithXmlNamespaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> {
    return deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
