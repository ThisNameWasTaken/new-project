import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

type Superhero = {
  id: string;
  name: string;
  alterEgo: string;
};

async function fetchSuperheroes() {
  return (await axios.get('http://localhost:3001/superheroes')).data;
}

const SuperheroList = () => {
  const {
    data: superheroes,
    error,
    isLoading,
  } = useQuery<Superhero[], AxiosError>(['superheroes'], fetchSuperheroes);

  if (isLoading) {
    return <p className="text-center m-6 font-medium text-lg">Loading ...</p>;
  }

  if (error) {
    return (
      <p className="text-center m-6 font-medium text-lg text-red-600">
        {error.message}
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-4 px-11 py-8">
      {superheroes.map((superhero) => (
        <li key={superhero.id} className="flex gap-2">
          <span className="font-bold">{superhero.name}:</span>
          <span>{superhero.alterEgo}</span>
        </li>
      ))}
    </ul>
  );
};

export default SuperheroList;
