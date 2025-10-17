import { Panel } from "@maxhub/max-ui";
import { useEffect } from "react";

import { useCtx } from "./context";
import { SCREEN } from "./types/screen";
import Main from "./screens/main";
import PDS from "./screens/pds";

export const Home = () => {
  const { user, screen, session, actions } = useCtx();

  useEffect(() => {
    if (window.WebApp.initData) {
      const params = new URLSearchParams(window.WebApp.initData);
      const userJson = params.get("user");
      const query = params.get("query_id");
      if (query) actions.setSession(query);
      if (userJson) actions.setUser(JSON.parse(decodeURIComponent(userJson)));
    }
  }, []);

  if (!session || Object.keys(user).length == 0) return <></>;

  return (
    <Panel id={String(user.id)}>
      {screen === SCREEN.MAIN && <Main />}
      {screen === SCREEN.PDS && <PDS />}
    </Panel>
  );
};
