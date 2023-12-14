import closeRound from "./actions/close/close_round.svg";
import closeRoundFill from "./actions/close/close_round_fill.svg";

interface IActionIcons {
  closeRoundFill: string;
  closeRound: string;
}

interface IIconsList {
  actions: IActionIcons;
}

export const IconsList: IIconsList = {
  actions: { closeRound, closeRoundFill },
};
