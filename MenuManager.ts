import * as GlobalVars from "./GlobalVars.ts";

import * as Input from "https://deno.land/x/input@2.0.2/index.ts";
const input = new Input.default();

export class MenuManager {
  globalVars: GlobalVars.GlobalVars;
  title = "";
  options: Array<string> = [];
  constructor(globalVars: GlobalVars.GlobalVars) {
    this.globalVars = globalVars;
  }

  render() {
    console.log("=".repeat(this.globalVars.lineLimit));
    console.log("");
    console.log(this.title);
    console.log("");
    let index = 1;
    for (const option of this.options) {
      console.log(`  [${index}] ${option}`);
      index++;
    }
    console.log("");
    console.log("=".repeat(this.globalVars.lineLimit));
  }

  setTitle(nexTitle: string) {
    this.title = nexTitle;
  }

  setOptions(newOptions: Array<string>) {
    this.options = newOptions;
  }
}
