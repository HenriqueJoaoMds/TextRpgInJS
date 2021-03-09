import * as GlobalVars from "./GlobalVars.ts";
import * as MenuManager from "./MenuManager.ts";
import * as Utils from "./Utils.ts";

const globalVars: GlobalVars.GlobalVars = new GlobalVars.GlobalVars();
const mainMenu: MenuManager.MenuManager = new MenuManager.MenuManager(
  globalVars
);
const utils: Utils.Utils = new Utils.Utils(globalVars);

mainMenu.setTitle(utils.centerString("CUCUCU"));
mainMenu.setOptions(["Play", "Exit"]);
mainMenu.render();
