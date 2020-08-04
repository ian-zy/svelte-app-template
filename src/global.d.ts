interface ImportMeta {
  hot?: {
    accept: () => void;
    dispose: (fn: () => void) => void;
  } 
}
