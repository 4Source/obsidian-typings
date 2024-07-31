import type { EditableFileView } from "obsidian";
export interface VideoView extends EditableFileView {
    /**
     * Get the current view type
     * @returns "video"
     */
    getViewType(): string;
}