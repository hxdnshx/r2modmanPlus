import type { CoreRuleType } from '../../InstallationRules';
import * as path from 'path';

export default function(): CoreRuleType {

    return {
        gameName: "DoL",
        rules: [
            {
                route: path.join("mods"),
                isDefaultLocation: true,
                defaultFileExtensions: [".mod.zip"],
                trackingMethod: "SUBDIR",
                subRoutes: []
            }
        ]
    }

}
