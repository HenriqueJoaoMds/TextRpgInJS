import * as GlobalVars from "./GlobalVars.ts";

export class Utils {
  globalVars: GlobalVars.GlobalVars;
  constructor(globalVars: GlobalVars.GlobalVars) {
    this.globalVars = globalVars;
  }

  centerString(text: string) {
    return `${" ".repeat(
      (this.globalVars.lineLimit - text.length) / 2
    )}${text}`;
  }
}
