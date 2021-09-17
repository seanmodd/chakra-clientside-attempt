import { VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { allHotels } from '../redux/actions/hotel';
import SmallCard from '../components/cards/SmallCard';
import Search from '../components/forms/Search';
import SearchOriginal from '../components/forms/SearchOriginal';

const Home = (props) => {
  const [hotels, setHotels] = useState([]);

  console.log('Home Props', props);

  useEffect(() => {
    loadAllhotels();
  }, []);

  const loadAllhotels = async () => {
    const res = await allHotels();
    setHotels(res.data);
  };

  return (
    <VStack>
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
    </VStack>
  );
};

// export async function getServerSideProps(ctx) {
//   const res = await allHotels();
//   const data = await res.json();
//   console.log('SererSide Props', data);

//   return {
//     props: {
//       data: res,
//     },
//   };
// }

export default Home;
