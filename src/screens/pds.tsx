import { Button, Flex, Input } from "@maxhub/max-ui";
import { useForm, type SubmitHandler } from "react-hook-form";
import { colors } from "../ui/theme";
import { useCtx } from "../context";
import { SCREEN } from "../types/screen";

type IForm = {
  snils: string;
};

const PDS = () => {
  const { actions } = useCtx();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="--form">
      <Flex direction="column" align="center" gap={32}>
        <Button
          mode="secondary"
          appearance="neutral"
          size="medium"
          onClick={() => actions.setScreen(SCREEN.MAIN)}
        >
          Назад
        </Button>
        <Flex direction="column" align="center" gap={16} className="block">
          <Input
            className="field"
            placeholder="СНИЛС"
            mode="secondary"
            compact={false}
            {...register("snils")}
          />
        </Flex>
        <Button mode="primary" size="large" type="submit" color={colors.brand}>
          Далее
        </Button>
      </Flex>
    </form>
  );
};

export default PDS;
