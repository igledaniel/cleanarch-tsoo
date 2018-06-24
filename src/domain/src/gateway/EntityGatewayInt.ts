// Layer 1 (yellow) local dependencies from domain
import { WidgetType } from "../../../domain/src/index";

// Lives in Layer 1 (yellow) in domain
export interface SaveWidgetEntityGatewayInt {
    saveWidget(widget: WidgetType): Promise<WidgetType>;
}