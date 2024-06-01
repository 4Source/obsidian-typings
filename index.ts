import "./obsidian-ex.d.ts";

export const InternalPluginName = {
  AudioRecorder: "audio-recorder",
  Backlink: "backlink",
  Bookmarks: "bookmarks",
  Canvas: "canvas",
  CommandPalette: "command-palette",
  DailyNotes: "daily-notes",
  EditorStatus: "editor-status",
  FileExplorer: "file-explorer",
  FileRecovery: "file-recovery",
  GlobalSearch: "global-search",
  Graph: "graph",
  MarkdownImporter: "markdown-importer",
  NoteComposer: "note-composer",
  OutgoingLink: "outgoing-link",
  Outline: "outline",
  PagePreview: "page-preview",
  Properties: "properties",
  Publish: "publish",
  RandomNote: "random-note",
  SlashCommand: "slash-command",
  Slides: "slides",
  Starred: "starred",
  Switcher: "switcher",
  Sync: "sync",
  TagPane: "tag-pane",
  Templates: "templates",
  WordCount: "word-count",
  Workspaces: "workspaces",
  ZkPrefixer: "zk-prefixer"
} as const;

export type InternalPluginName = typeof InternalPluginName[keyof typeof InternalPluginName];
