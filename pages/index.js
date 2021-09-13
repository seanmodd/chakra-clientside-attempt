import { Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Container } from '../components/Container';
import SmallCard from '../components/cards/SmallCard';
import Search from '../components/forms/Search';
import { allHotels } from '../actions/hotel';
import Home from '../booking/Home';

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
      <Home />
    </Container>
  );
};

export default Index;
