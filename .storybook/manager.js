import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({ 
        base: "dark", 
        brandTitle: "Fenix Outdoor Design System",
        brandUrl: "https://www.fenixoutdoor.com/",
        brandImage: "/src/assets/FenixOutdoorWhite.svg",
        brandTarget: "_blank",
    }),
})