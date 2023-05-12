import * as alt from 'alt-shared';

export const CLOTHING_CONFIG = {
    /**
     * Adjusting this may result in game crashing. Use with caution.
     */
    MAXIMUM_COMPONENT_VALUES: {
        // Male
        1: {
            1: 216, // Masks
            3: 210, // Torsos
            4: 160, // Legs
            5: 111, // Bags
            6: 126, // Shoes
            7: 167, // Accessories
            8: 193, // Undershirts
            9: 57, // body armour
            11: 442, // Tops / Shirts
        },
        // Female
        0: {
            1: 217, // Masks
            3: 244, // Torsos
            4: 169, // Legs
            5: 111, // Bags
            6: 130, // Shoes
            7: 136, // Accessories
            8: 238, // Undershirts
            9: 57, // body armour
            11: 473, // Tops / Shirts
        },
    },
    /**
     * Adjusting this may result in game crashing. Use with caution.
     */
    MAXIMUM_PROP_VALUES: {
        1: {
            0: 187, // Hats
            1: 47, // Glasses
            2: 42, // Ears
            6: 47, // Watches
            7: 13, // Bracelets
        },
        0: {
            0: 186, // Hats
            1: 49, // Glasses
            2: 23, // Ears
            6: 36, // Watches
            7: 20, // Bracelets
        },
    },
};

export const PLAYER_MALE_MODEL = alt.hash('mp_m_freemode_01');
