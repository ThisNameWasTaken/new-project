import axios from 'axios';
import { useEffect, useState } from 'react';

type Superhero = {
  id: string;
  name: string;
  alterEgo: string;
};

const SuperheroList = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const abortCtrl = new AbortController();

    async function fetchHeroes() {
      try {
        const { data, status } = await axios.get(
          'http://localhost:3001/superheroes',
          { signal: abortCtrl.signal }
        );

        if (status >= 200 && status < 300) {
          setSuperheroes(data);
        } else {
          setError(`Error code: ${status}`);
        }

        setIsLoading(false);
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error(err);
        }
      }
    }

    fetchHeroes();

    return function cleanup() {
      abortCtrl.abort();
    };
  }, []);

  if (isLoading) {
    return <p className="text-center m-6 font-medium text-lg">Loading ...</p>;
  }

  if (error) {
    return (
      <p className="text-center m-6 font-medium text-lg text-red-700">
        {error}
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
