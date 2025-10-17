import { Panel, CellSimple, Avatar, Typography, Flex } from "@maxhub/max-ui";

export const Home = ({ id, user }) => (
  <Panel id={id}>
    <Flex direction="column" align="center" gap={16}>
      <Avatar.Container size={96} rightBottomCorner={<Avatar.OnlineDot />}>
        <Avatar.Image fallback="ME" src={user.photo_url} />
      </Avatar.Container>
      <Flex className={styles.details} direction="column" align="center">
        <Typography.Headline variant="large-strong">
          {user.first_name}
        </Typography.Headline>
      </Flex>
    </Flex>
    <Flex>
      <CellList mode="island">
        <CellSimple onClick={onPDSclick} title="Заключить договор ПДС" />
        <CellSimple onClick={onOPSClick} title="Оставить заявку на ОПС" />
      </CellList>
    </Flex>
  </Panel>
);
