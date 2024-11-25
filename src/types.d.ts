declare global {
    interface Window {
      loadPyodide: () => Promise<any>;
    }
  }
  
  export interface PyodideInstance {
    runPython: (code: string) => any;
    globals: any;
  }
  
  export {};
  