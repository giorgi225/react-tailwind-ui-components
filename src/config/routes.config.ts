import { baseRoutePaths, componentStructure } from "./components/base.config";

export const routeConfig = {
    hash: "#",
    home: "/",
    components: Object.fromEntries(
        Object.entries(componentStructure).map(([category, components]) => [
            category,
            Object.fromEntries(
                components.map((name) => [
                    name,
                    `${baseRoutePaths.components}/${category}/${name}`,
                ])
            ),
        ])
    ),
} as const;