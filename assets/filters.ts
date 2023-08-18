import { Categories, CategoryType } from "~/types/categories";

export const categories: Categories = {
  skins: [
    {
      label: "brightness",
      type: CategoryType.CHECKBOX,
      filters: ["light", "dark"],
    },
    {
      label: "saturation",
      type: CategoryType.CHECKBOX,
      filters: ["saturated", "unsaturated"],
    },
    {
      label: "features",
      type: CategoryType.CHECKBOX,
      filters: [
        "animation-menu-atlas",
        "color-picker-atlas",
        "draw-tools-atlas",
        "exporting-animation-atlas",
        "language-screen-atlas",
        "menu-interface-atlas",
        "minigame-atlas",
        "splash-screen-free-atlas",
        "splash-screen-atlas",
        "text-colors-txt",
      ],
    },
    {
      label: "stick-nodes-versions",
      type: CategoryType.MULTI,
      filters: ["3.3.4", "4.0.1"],
    },
  ],
  users: [
    {
      label: "Roles",
      type: CategoryType.CHECKBOX,
      filters: ["member", "creator", "moderator", "admin"],
    },
  ],
  default: [
    {
      label: "error",
      type: CategoryType.CHECKBOX,
      filters: ["error finding labels"],
    },
  ],
};
