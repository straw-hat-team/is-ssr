export function addBrowserContext(callback: Function) {
  // @ts-ignore
  globalThis.window = { document: {} };
  callback();
  // @ts-ignore
  delete globalThis.window;
}
