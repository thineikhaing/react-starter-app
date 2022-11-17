import { EmojiNode } from "./nodes/EmojiNode";
import ExampleTheme from "./themes/ExampleTheme";

const EditorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [EmojiNode]
};

export default EditorConfig;
