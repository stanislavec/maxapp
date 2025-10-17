import { Button, Flex, Input } from "@maxhub/max-ui";
import { useForm, type SubmitHandler } from "react-hook-form";

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
          <Input placeholder="СНИЛС" {...register("snils")} />
        </Flex>
        <Button mode="primary" size="large" type="submit">
          Далее
        </Button>
      </Flex>
    </form>
  );
};

export default PDS;
