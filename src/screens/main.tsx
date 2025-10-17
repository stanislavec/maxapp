import { CellList, CellSimple, Avatar, Typography, Flex } from "@maxhub/max-ui";
import { NpoIcon, OpsIcon, PdsIcon } from "../ui/icons";
import { useCtx } from "../context";
import { SCREEN } from "../types/screen";

const Main = () => {
  const { user, actions } = useCtx();

  return (
    <Flex direction="column" align="center" gap={48}>
      <Flex direction="column" align="center" gap={16}>
        <Avatar.Container size={96} rightBottomCorner={<Avatar.OnlineDot />}>
          <Avatar.Image fallback={user.first_name?.[0]} src={user.photo_url} />
        </Avatar.Container>
        <Flex direction="column" align="center">
          <Typography.Headline variant="large-strong">
            {user.first_name}
          </Typography.Headline>
        </Flex>
      </Flex>
      <Flex>
        <CellList
          mode="island"
          filled
          header={
            <Typography.Title style={{ marginBottom: 16 }}>
              Доступные сервисы
            </Typography.Title>
          }
        >
          <CellSimple
            onClick={() => actions.setScreen(SCREEN.PDS)}
            title="Действие 1"
            subtitle="Короткое описание действия"
            showChevron
            before={<PdsIcon />}
          />
          <CellSimple
            onClick={() => actions.setScreen(SCREEN.NPO)}
            title="Действие 2"
            subtitle="Короткое описание действия"
            showChevron
            before={<NpoIcon />}
          />
          <CellSimple
            onClick={() => actions.setScreen(SCREEN.OPS)}
            title="Действие 3"
            subtitle="Короткое описание действия"
            showChevron
            before={<OpsIcon />}
          />
        </CellList>
      </Flex>
    </Flex>
  );
};

export default Main;
