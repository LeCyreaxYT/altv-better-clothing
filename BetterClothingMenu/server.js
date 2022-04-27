/*
 * © 2021 - 2021 Alec S. - DerEchteAlec - All Rights Reserved.
 * Last Updated : 01/06/2021 22:00:00
 */


import * as alt from 'alt-server';
import { CLOTHING_CONFIG, PLAYER_MALE_MODEL } from './shared';


alt.log("============================================================================");
alt.log("                            Better Clothing Menu                            ");
alt.log("        © 2021 - 2021 Alec S. - DerEchteAlec - All Rights Reserved.         ")
alt.log("============================================================================");

alt.onClient("betterClothingMenu:ChangeClothing", (player, componentId, drawableId, textureId) => {
    if (player.model === PLAYER_MALE_MODEL) {
        if (CLOTHING_CONFIG.MAXIMUM_COMPONENT_VALUES[1][componentId] < drawableId) {
            return;
        }
    } else {
        if (CLOTHING_CONFIG.MAXIMUM_COMPONENT_VALUES[0][componentId] < drawableId) {
            return;
        }
    }

    player.clearBloodDamage();
    player.setClothes(componentId, drawableId, textureId);
});

alt.onClient("betterClothingMenu:ChangeProp", (player, componentId, drawableId, textureId) => {
    if (player.model === PLAYER_MALE_MODEL) {
        if (CLOTHING_CONFIG.MAXIMUM_PROP_VALUES[1][componentId] < drawableId) {
            return;
        }
    } else {
        if (CLOTHING_CONFIG.MAXIMUM_PROP_VALUES[0][componentId] < drawableId) {
            return;
        }
    }

    player.clearBloodDamage();
    player.clearProp(componentId);
    player.setProp(componentId, drawableId, textureId);
});
