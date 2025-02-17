/// <reference types="../CTAutocomplete" />

import { Huds } from "../Krun/Huds";
import PogObject from "../PogData"

const data = new PogObject("superduperusefulfishingmodule", { }, "superduperusefulfishingmoduledata.json");
const huds = new Huds(data);
const lavaStatusHud = huds.createTextHud("lavaStatus", 10, 10, "Not in lava");

let isInLava = false;

register("tick", () => {
    isInLava = Player.getPlayer().func_180799_ab();
    lavaStatusHud.text = isInLava ? "&cYou are in lava!" : "&aYou are not in lava.";
});

lavaStatusHud.onDraw((x, y, str) => {
    Renderer.translate(x, y);
    Renderer.scale(lavaStatusHud.getScale());
    Renderer.drawStringWithShadow(str, 0, 0);
    Renderer.finishDraw();
});

register("command", () => {
    huds.open();
}).setName("editlava").setAliases("superduperusefulfishingmodule")

register("renderOverlay", () => {
    if (huds.isOpen()) return;

    Renderer.translate(lavaStatusHud.getX(), lavaStatusHud.getY());
    Renderer.scale(lavaStatusHud.getScale());
    Renderer.drawStringWithShadow(lavaStatusHud.text, 0, 0);
    Renderer.finishDraw();
});

register("gameUnload", () => {
    huds.save();
    data.save();
});


