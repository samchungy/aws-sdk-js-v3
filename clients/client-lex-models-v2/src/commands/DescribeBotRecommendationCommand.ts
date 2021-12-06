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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotRecommendationRequest, DescribeBotRecommendationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBotRecommendationCommand,
  serializeAws_restJson1DescribeBotRecommendationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeBotRecommendationCommandInput extends DescribeBotRecommendationRequest {}
export interface DescribeBotRecommendationCommandOutput extends DescribeBotRecommendationResponse, __MetadataBearer {}

/**
 * <p>Provides metadata information about a bot recommendation. This
 *          information will enable you to get a description on the request inputs,
 *          to download associated transcripts after processing is complete, and to
 *          download intents and slot-types generated by the bot
 *          recommendation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotRecommendationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotRecommendationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeBotRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBotRecommendationCommandInput} for command's `input` shape.
 * @see {@link DescribeBotRecommendationCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class DescribeBotRecommendationCommand extends $Command<
  DescribeBotRecommendationCommandInput,
  DescribeBotRecommendationCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBotRecommendationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBotRecommendationCommandInput, DescribeBotRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DescribeBotRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBotRecommendationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBotRecommendationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBotRecommendationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBotRecommendationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBotRecommendationCommandOutput> {
    return deserializeAws_restJson1DescribeBotRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
