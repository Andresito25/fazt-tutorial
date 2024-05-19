import { Button, buttonVariants } from "./ui/button";
import { deleteTask } from "@/actions/task-actions";

export default function taskButtonDelete({ taskId }: { taskId: number }) {
  return (
    <div>
      <form action={deleteTask}>
        <input type="hidden" name="taskId" value={taskId} />
        <Button className={buttonVariants({ variant: "destructive" })}>
          Delete
        </Button>
      </form>
    </div>
  );
}
