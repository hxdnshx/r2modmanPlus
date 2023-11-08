import GameInstructionGenerator from "../../instructions/GameInstructionGenerator";
import Game from "../../../../../model/game/Game";
import Profile from "../../../../../model/Profile";
import { GameInstruction } from "../../GameInstructions";
import { DynamicGameInstruction } from "../../DynamicGameInstruction";
import path from "path";

export class DoLGameInstructions extends GameInstructionGenerator {

    public async generate(game: Game, profile: Profile): Promise<GameInstruction> {
        return {
            moddedParameters: ` --mods-path "${path.join(DynamicGameInstruction.PROFILE_DIRECTORY, "mods")}"`,
            vanillaParameters: ''
        }
    }
}
