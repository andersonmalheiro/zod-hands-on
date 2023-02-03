import yup from "yup";

const TaskSchema = yup.object({
  name: yup.string().required(),
  age: yup.number().min(18).required(),
});

type Task = yup.InferType<typeof TaskSchema>;

const task: Task = {
  age: 12,
  name: "John",
};

