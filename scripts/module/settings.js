export const MODULE_NAME = "jb2a-extras";
export default async function jb2aExtrasSettings() {
  game.settings.register(MODULE_NAME, "jb2aExtraLocation", {
    name: "JB2A-Extras - location (default : 'modules')",
    hint: "REQUIRES A REFRESH : ONLY change if the JB2A-EXTRAS module is hosted externally on an S3 bucket or similar. Otherwise, leave blank. Example: S3BucketLocation (No Slash at end).",
    scope: 'world',
    config: true,
    type: String,
    default: "modules",
    requiresReload: true
  });
};


