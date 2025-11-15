import { Card, ColorSwatch, DocumentText, Icon, MessageNotif } from "iconsax-reactjs";
import { routeConfig } from "./routes.config";

export type AsideNavConfig = {
  href: string;
  icon?: Icon;
  label: string;
  isComingSoon?: boolean;
  list?: AsideNavConfig[];
};

const mapCategoryToNav = (category: keyof typeof routeConfig.components, label: string, icon?: Icon): AsideNavConfig => {
  const components = routeConfig.components[category];
  return {
    href: "#",
    icon,
    label,
    list: Object.entries(components).map(([name, path]) => {
      const isComingSoon = name.endsWith("-comming-soon");

      return {
        href: path,
        label: isComingSoon
          ? name.replace("-comming-soon", "").replace(/-/g, " ")
          : name.charAt(0).toUpperCase() + name.slice(1),
        isComingSoon,
      };
    }),
  };
};

export const asideNavConfig: AsideNavConfig[] = [
  mapCategoryToNav("common", "Common", ColorSwatch),
  mapCategoryToNav("forms", "Forms", DocumentText),
  mapCategoryToNav("feedback", "Feedback", MessageNotif),
  mapCategoryToNav("dataDisplay", "Data Display", Card),
];