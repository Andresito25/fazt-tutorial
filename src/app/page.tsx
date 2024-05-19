import prisma from "@/lib/prisma";
import TaskCard from "@/components/task-card";

export default async function HomePage() {
  const tasks = await prisma.task.findMany();
  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}
