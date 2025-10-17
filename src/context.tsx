import { createContext, useContext, useState } from "react";
import { SCREEN } from "./types/screen";
import type { IUser } from "./types/data";

type IContext = {
  session: string;
  screen: SCREEN;
  user: IUser;
};

type IActions = {
  setScreen: React.Dispatch<React.SetStateAction<SCREEN>>;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  setSession: React.Dispatch<React.SetStateAction<string>>;
};

export const Context = createContext({
  session: "",
  screen: SCREEN.MAIN,
  user: {} as IUser,
  actions: {
    setScreen: () => null,
    setUser: () => null,
    setSession: () => null,
  } as IActions,
});

export const useAppState = (): [IContext, IActions] => {
  const [session, setSession] = useState("");
  const [screen, setScreen] = useState(SCREEN.MAIN);
  const [user, setUser] = useState<IUser>({} as IUser);

  const state = { screen, user, session };
  const actions = { setScreen, setUser, setSession };

  return [state, actions];
};

export const useCtx = (): IContext & { actions: IActions } =>
  useContext(Context);
