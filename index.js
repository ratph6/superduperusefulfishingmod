/// <reference types="../CTAutocomplete" />

register("tick", () => {
  const isInLava = Player.getPlayer().func_180799_ab();
  if (isInLava) {
      ChatLib.chat("You are in lava!");
  }
});
