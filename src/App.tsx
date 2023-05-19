import { useState, useEffect } from 'react';
import { useQuery } from 'graphql-hooks';
import './App.css';
import Hero from './components/Hero/Hero';

const contentQuery: string = `
query {
  hero{
    title
    heroImage{
      url
    }
  }
  allPizzas {
    id
    name
    ingredientList {
      name
    }
  }
  about{
    description
  }
  footer{
    apply
    facebook
    instagram
  }
}`;

function App() {
  const { data, loading, error } = useQuery(contentQuery);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }
  if (data) {
    console.log(data);
  }

  return <>
  {/* <Hero imgUrl={data.hero.heroImage.url}/> */}
  {console.log(data.hero.heroImage.url)
  }
  </>;
}

export default App;
