import Nav from '../components/Nav';
import SuperheroList from '../components/Superheroes';
import Title from '../components/Title';

const SuperheroesPage = () => {
  return (
    <div>
      <Nav />
      <Title>SuperHeroes</Title>
      <SuperheroList />
    </div>
  );
};

export default SuperheroesPage;
