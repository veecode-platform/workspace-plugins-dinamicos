import {
  Table,
  TableColumn,
  Progress,
  ResponseErrorPanel,
} from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import { useApi, identityApiRef, configApiRef } from '@backstage/core-plugin-api';


type Todo = {
  title: string;
  id: string;
  createdBy: string;
  createdAt: string;
};

type DenseTablePropsWithTodos = {
  todos: Todo[];
};


export const DenseTable = ({ todos }: DenseTablePropsWithTodos) => {

  const columns: TableColumn[] = [
    { title: 'Title', field: 'title' },
    { title: 'ID', field: 'id' },
    { title: 'Created By', field: 'createdBy' },
    { title: 'Created At', field: 'createdAt' },
  ];

  const data = todos.map(todo => ({
    title: todo.title,
    id: todo.id,
    createdBy: todo.createdBy,
    createdAt: todo.createdAt,
  }));


  return (
    <Table
      title="Example Todos List"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const ExampleFetchComponent = () => {
  const identityApi = useApi(identityApiRef);
  const configApi = useApi(configApiRef);
  const { value, loading, error } = useAsync(async (): Promise<Todo[]> => {
    // Would use fetch in a real world example
    const { token } = await identityApi.getCredentials();
    const baseUrl = configApi.getString('backend.baseUrl') || 'http://localhost:7007';
//
    await fetch(`${baseUrl}/api/workshop/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: 'Example Todo',})
      })
//
    const response = await fetch(`${baseUrl}/api/workshop/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    console.log('status: ', response.status);
    console.log('statusText: ', response.statusText);
    const data = await response.json();
    console.log('response: ',data);
//
    return data.items as Todo[];
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <DenseTable todos={value || []} />;
};
