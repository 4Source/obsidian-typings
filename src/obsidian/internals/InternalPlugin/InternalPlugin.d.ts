import type { InternalPluginInstance } from "./InternalPluginInstance.js";

/** @todo Documentation incomplete */
/** @public */
export interface InternalPlugin<TInstance extends InternalPluginInstance = InternalPluginInstance> extends Plugin {
    instance: TInstance;

    disable(): void;
    enable(): Promise<void>;
}
