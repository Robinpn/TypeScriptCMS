import { useState, useEffect } from 'react';
import { useQuery } from 'graphql-hooks';
import { graphql } from '../gql';
import {GetContentQuery} from '../gql/graphql'
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Pizza from './components/Pizza/Pizza';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

const TheContentQuery: string = `
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

const contentQuery = graphql(`
  query GetContent {
    hero {
      title
      heroImage {
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
    about {
      description
    }
    footer {
      apply
      facebook
      instagram
    }
  }
`);

function App() {
  const { data, loading, error } = useQuery<GetContentQuery>(TheContentQuery);

  if (loading) {
    return <p>The site is loading...</p>;
  }
  if (error) {
    return <p>There was a error...</p>;
  }
  
  if(!data) {
    return <p>something went wrong...</p>
  }

  interface ingredient {
    name: string;
  }

  type pizza = {
    name: string;
    image: {
      url: string
    };
    ingredientList: ingredient[];
  }

  return (
    <>
      <Navbar Title={data.hero?.title || ""} />
      <main>
        <Hero imgUrl={data.hero?.heroImage?.url || ""} />
        <section id="menu" className="pizza-section">
          {data.allPizzas.map((pizza: pizza, index: number) => {
            return (
              <Pizza
                key={index}
                name={pizza.name}
                imageURL={pizza.image.url}
                ingredientList={pizza.ingredientList}
              />
            );
          })}
        </section>
        <About description={data.about?.description || ""} />
      </main>
      <Footer
        apply={data.footer?.apply || ""}
        facebook={data.footer?.facebook || ""}
        instagram={data.footer?.instagram || ""}
      />
    </>
  );
}

export default App;
