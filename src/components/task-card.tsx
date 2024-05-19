import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@prisma/client";
import clsx from "clsx";
import TaskButtonDelete from "./task-button-delete";
import Link from "next/link";

export default function taskCard({ task }: { task: Task }) {
  return (
    <Card className="border-4 rounded-lg">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>{task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-blue-500": task.priority === "urgent",
            "bg-red-500 text-white": task.priority === "high",
            "bg-yellow-500": task.priority === "medium",
            "bg-green-500": task.priority === "low",
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span className="text-slate-600">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </CardContent>
      <CardFooter className="flex gap-x-4 justify-end">
        <TaskButtonDelete taskId={task.id} />
        <Link
          className={buttonVariants({ variant: "default" })}
          href={`/tasks/${task.id}/edit`}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
}
