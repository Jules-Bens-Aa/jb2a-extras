import jb2aExtrasSettings, { MODULE_NAME } from "./settings.js";
import { patreonDatabase } from "../Databases/PatreonDatabase.js";
import { jb2aPatreonDatabase } from "../Databases/PatreonDatabase.js";
import { extraDatabase } from "../Databases/ExtraDatabase.js";
import { jb2aExtraDatabase } from "../Databases/ExtraDatabase.js";

let prefix = 'modules';

Hooks.once('init', async function () {
  await jb2aExtrasSettings()

  if (game.settings.get(MODULE_NAME, "jb2aExtraLocation") !== 'modules' && game.settings.get(MODULE_NAME, "jb2aExtraLocation") !== '') {
    prefix = game.settings.get(MODULE_NAME, "jb2aExtraLocation");
  }

  await jb2aPatreonDatabase(prefix);
  await jb2aExtraDatabase(prefix);

})

Hooks.on("sequencer.ready", () => {



  Sequencer.Database.registerEntries("jb2a-extras", extraDatabase);

  // Keeping just in case

  // let database;

  // if (!!game.modules.get('jb2a_patreon') && !game.modules.get('jb2a_patreon')?.active) {

  //     database = foundry.utils.mergeObject(patreonDatabase, extraDatabase);
  //     Sequencer.Database.registerEntries("jb2a", database);
  // }
  // else{
  //     let message;
  //     if(!!game.modules.get('jb2a_patreon') && game.modules.get('jb2a_patreon')?.active){
  //         message = "JB2A EXTRAS | The Patreon module is enabled. The extra assets will be registered in their own separate Sequencer Database called 'jb2a-extras'. Disable the Patreon module if you want to merge all assets in the one 'jb2a' database.";
  //     }
  //     else{
  //         message = "JB2A EXTRAS | The Patreon module is not installed. These assets will be registered in their own separate Sequencer Database called 'jb2a-extras'";
  //     }

  //     console.log(`%c ${message}`, `color: #FFBA00`);

  //     ui.notifications.info(message);

  //     Sequencer.Database.registerEntries("jb2a-extras", extraDatabase);
  // }

});