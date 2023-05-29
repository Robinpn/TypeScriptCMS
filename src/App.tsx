import { useState, useEffect } from 'react';
import { useQuery } from 'graphql-hooks';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Pizza from './components/Pizza/Pizza';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

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
    image {
      url
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

  //fetch pizza array
  const pizzaData: object[] = data.allPizzas;

  //map all pizzas
  const pizzaArr: any = pizzaData.map((pizza: any) => {
    return pizza;
  });

  return (
    <>
      <Navbar Title={data.hero.title} />
      <main>
        <Hero imgUrl={data.hero.heroImage.url} />
        <Menu>
          {data.allPizzas.map((pizza: any, index: number) => {
            return (
              <Pizza
              key={index}
                name={pizza.name}
                imageURL={pizza.image.url}
                ingredientList={pizza.ingredientList}
              />
            );
          })}
        </Menu>
        <About description={data.about.description} />
      </main>
      <Footer
        apply={data.footer.apply}
        facebook={data.footer.facebook}
        instagram={data.footer.apply}
      />
    </>
  );
}

export default App;
