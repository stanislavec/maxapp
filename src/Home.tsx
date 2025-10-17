import {
  Panel,
  CellList,
  CellSimple,
  Avatar,
  Typography,
  Flex,
} from "@maxhub/max-ui";
import { useEffect, useState } from "react";
import { NpoIcon, OpsIcon, PdsIcon } from "./ui/icons";
import type { IUser } from "./types/data";

export const Home = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  useEffect(() => {
    console.log(window.WebApp);
    if (window.WebApp.initData) {
      const params = new URLSearchParams(window.WebApp.initData);
      const userJson = params.get("user");
      if (userJson) setUser(JSON.parse(decodeURIComponent(userJson)));
    }
  }, []);

  if (Object.keys(user).length == 0) return <>Нет данных</>;

  console.log(user);

  return (
    <Panel id={String(user.id)}>
      <Flex direction="column" align="center" gap={16}>
        <Avatar.Container size={96} rightBottomCorner={<Avatar.OnlineDot />}>
          <Avatar.Image fallback="ME" src={user.photo_url} />
        </Avatar.Container>
        <Flex direction="column" align="center">
          <Typography.Headline variant="large-strong">
            {user.first_name}
          </Typography.Headline>
        </Flex>
      </Flex>
      <Flex>
        <CellList mode="island">
          <CellSimple
            onClick={() => null}
            title="Действие 1"
            subtitle="Короткое описание действия"
            showChevron
            before={<PdsIcon />}
          />
          <CellSimple
            onClick={() => null}
            title="Действие 2"
            subtitle="Короткое описание действия"
            showChevron
            before={<NpoIcon />}
          />
          <CellSimple
            onClick={() => null}
            title="Действие 3"
            subtitle="Короткое описание действия"
            showChevron
            before={<OpsIcon />}
          />
        </CellList>
      </Flex>
    </Panel>
  );
};
