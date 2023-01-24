import { Puff } from 'react-loader-spinner';
import { PositionLoader } from './Loader.styled';

const Loader = () => {
  return (
    <PositionLoader>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#24a1e9"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </PositionLoader>
  );
};

export default Loader;
