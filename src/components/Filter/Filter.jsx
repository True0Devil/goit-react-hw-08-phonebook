import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filter.slice';
import { selectFilter } from 'redux/selectors';

import { Rings } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const onChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'start', marginBottom: '18px' }}>
      <Input
        type="text"
        name="filter"
        onChange={onChange}
        placeholder="Search"
        value={filter}
      />

      {isLoading && (
        <Rings
          height="40"
          width="40"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      )}
    </div>
  );
};
