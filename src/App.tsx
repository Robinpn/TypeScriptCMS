import { useState, useEffect } from 'react';
import { useQuery } from 'graphql-hooks';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

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

  return (
    <>
    <Navbar Title={data.hero.title} />
      <main>
        <Hero imgUrl={data.hero.heroImage.url} />
      </main>
      <Footer apply={data.footer.apply} facebook={data.footer.facebook} instagram={data.footer.apply} />
    </>
  );
}

export default App;
