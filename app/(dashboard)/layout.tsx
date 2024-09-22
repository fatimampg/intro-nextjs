import NewTodoForm from '@/components/NewTodoForm';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>dashboard todos layout</h1>
      <div>
        <NewTodoForm />
        {/* here, instead of in todo page, to avoid the form to wait on the todo page, to load the todos - putting it in the layout renders instantly */}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
