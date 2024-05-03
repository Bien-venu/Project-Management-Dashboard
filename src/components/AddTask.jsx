import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import toast from "react-hot-toast";

const AddTask = () => {
  const [add, setAdd] = useState({ userId: "", todo: "", completed: false });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setAdd((prevAdd) => ({
      ...prevAdd,
      [name]: name === "completed" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (add.todo && add.userId) {
      fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: add.todo,
          completed: add.completed,
          userId: add.userId,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          toast.success(`Task added successfully`);
          handleOpen(); // Close the dialog after successful submission
        })
        .catch((error) => {
          console.error("Error adding task:", error);
          toast.error(`Error adding task`);
          handleOpen();
        });
    } else {
      handleOpen();
      toast.error("Please fill out all fields");
    }
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="flex cursor-pointer items-center gap-2 rounded-lg border p-1.5 px-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={16}
          height={16}
          fill={"none"}
        >
          <path
            d="M12 4V20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>New Task</span>
      </div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] text-xs font-medium">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Add task
            </Typography>

            <Typography className="-mb-2 text-sm" variant="h6">
              Todo
            </Typography>
            <Input
              name="todo"
              label="Your Todo"
              type="text"
              size="lg"
              value={add.todo}
              onChange={handleChange}
              required
            />
            <Typography className="-mb-2 text-sm" variant="h6">
              Your Id
            </Typography>
            <Input
              name="userId"
              label="UserId"
              type="number"
              size="lg"
              value={add.userId}
              onChange={handleChange}
              required
            />
            <div className="-ml-2.5 -mt-3">
              <Checkbox
                name="completed"
                label="Completed"
                checked={add.completed}
                onChange={handleChange}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
              Save
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default AddTask;
