import { Button, Flex, Input } from "@maxhub/max-ui";
import { useForm, type SubmitHandler } from "react-hook-form";
import { colors } from "../ui/theme";

type IForm = {
  snils: string;
};

const PDS = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" align="center" gap={32}>
        <Flex direction="column" align="center" gap={32}>
          <Input
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
