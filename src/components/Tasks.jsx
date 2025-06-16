import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onDeleteTask, tasks }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={onDeleteTask}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
    </section>
  );
};

export default Tasks;
