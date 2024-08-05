import type { TFile } from "obsidian";
import type { InfoFileView } from "./InfoFileView.js";

/** @todo Documentation incomplete */
/** @public */
export class LocalGraphView extends InfoFileView {
    /**
     * Get the current view type
     */
    getViewType(): string | "localgraph";
    /**
     * Requests a update if the changed file is the opened file
     * @param file - The changed file
     */
    onFileChanged(file: TFile): void;
    /**
     * Renders the graph
     */
    update(): void;
    /**
     * Updates the options from the plugin when changed in view
     */
    onOptionsChange(): void;
}
