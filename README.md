# AltV Better Clothing Menu - Documentation

This is a Better Clothing Menu you didnt need to Press Enter to Select the Clothing or Prop

```
  altVServer/
  └── resources/
      └── BetterClothingMenu/
          ├── NativeUI/
          ├── client.js
          ├── server.js
          ├── package.json
          └── resource.cfg
```

**Controls:**
```
  - F6 = Toggle Clothing Menu
```

**Configs: (In client.js):**
```
  const MenuSettings = {
      Point: new NativeUI.Point(50, 50),
      TitleScale: 0.8,
      TitleFont: NativeUI.Font.Monospace,
      DropShadow: true,
      TextAlignment: NativeUI.Alignment.Centered,
  }

  const KeyControlls = {
      ToggleAltV: 117,
  }

  const EventNames = {
      ToggleMenu: "Client:ClothingMenu:Toggle",
  }

  const MenuText = {
      MenuTitle: "Better Clothing Menu",
      MenuSubTitle: "",

      MaskenText: "Masks",
      HairStylesText: "Hair Styles",
      TorsosText: "Torsos",
      LegsText: "Leg",
      BagandParachuteText: "Bag and Parachute",
      ShoeText: "Shoe",
      AccessoriesText: "Accessorie",
      UndershirtText: "Undershirt",
      BodyArmorText: "Body Armor",
      DecalsText: "Decal",
      TopText: "Top",
      HatText: "Hat",
      GlassesText: "Glasses",
      EarsText: "Ears",
      WatchesText: "Watches",
      BraceletsText: "Bracelets",
  }

  const MaxListItems = 800;
```
