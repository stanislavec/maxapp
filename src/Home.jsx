import {
  Panel,
  CellList,
  CellSimple,
  Avatar,
  Typography,
  Flex,
} from "@maxhub/max-ui";
import { useEffect, useState } from "react";

const PdsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="12"
      width="32"
      height="28"
      rx="4"
      fill="#DEF2FD"
      stroke="#177DDC"
      stroke-width="2"
    />
    <circle
      cx="24"
      cy="26"
      r="7"
      fill="#fff"
      stroke="#177DDC"
      stroke-width="2"
    />
    <rect x="19" y="25" width="10" height="2" rx="1" fill="#177DDC" />
    <circle cx="24" cy="26" r="2" fill="#51C41A" />
    <rect
      x="14"
      y="6"
      width="20"
      height="6"
      rx="2"
      fill="#E6F4FF"
      stroke="#177DDC"
      stroke-width="2"
    />
    <rect
      x="14"
      y="6"
      width="20"
      height="6"
      rx="2"
      stroke="#fff"
      stroke-width="0.4"
      fill="none"
    />
  </svg>
);

const NpoIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 7C31 7 38 12 38 20C38 36 24 41 24 41C24 41 10 36 10 20C10 12 17 7 24 7Z"
      fill="#DEF2FD"
      stroke="#177DDC"
      stroke-width="2"
    />
    <circle
      cx="24"
      cy="23"
      r="6"
      fill="#fff"
      stroke="#177DDC"
      stroke-width="2"
    />
    <rect x="21" y="22" width="6" height="2" rx="1" fill="#177DDC" />
    <circle cx="24" cy="23" r="2" fill="#51C41A" />
  </svg>
);

const OpsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37 22c0 9-8.5 15-13 15S11 31 11 22V11l13-5 13 5v11z"
      fill="#DEF2FD"
      stroke="#177DDC"
      stroke-width="2"
    />
    <path
      d="M24 17a6 6 0 110 12 6 6 0 010-12z"
      fill="#fff"
      stroke="#177DDC"
      stroke-width="2"
    />
    <rect x="21" y="22" width="6" height="2" rx="1" fill="#177DDC" />
    <circle cx="24" cy="23" r="2" fill="#51C41A" />
  </svg>
);

export const Home = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log(window.WebApp);
    if (window.WebApp.initData) {
      const params = new URLSearchParams(window.WebApp.initData);
      const userJson = params.get("user");
      setUser(JSON.parse(decodeURIComponent(userJson)));
    }
  }, []);

  if (Object.keys(user).length == 0) return <>Нет данных</>;

  console.log(user);

  return (
    <Panel id={user.id}>
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
