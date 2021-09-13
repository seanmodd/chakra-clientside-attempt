import {
  Link as ChakraLink,
  Text,
  Heading,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import SmallCard from '../components/cards/SmallCard';
import Search from '../components/forms/Search';
import { allHotels } from '../../chakra/src/actions/hotel';

const Index = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllhotels();
  }, []);

  const loadAllhotels = async () => {
    const res = await allHotels();
    setHotels(res.data);
  };
  return (
    <Container height="100vh">
      <Heading>Center</Heading>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>All Cars</h1>
      </div>
      <div className="col">
        <br />
        <Search />
      </div>
      <div className="container-fluid">
        <br />
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        {hotels.map((h) => (
          <SmallCard key={h._id} h={h} />
        ))}
      </div>
    </Container>
  );
};

export default Index;
