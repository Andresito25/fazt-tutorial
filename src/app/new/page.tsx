import { TaskForm } from "@/app/new/task-form";

export default function NewPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm
        task={{
          id: 0,
          name: "",
          description: null,
          priority: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        }}
      />
    </div>
  );
}
