import { useState, useCallback } from 'react';
import { SORT_ORDER, REVERSED_SORT_ORDER, TABLE_COLUMNS_STATE } from '../constants';

const useTable = () => {
  const [sort, setSort] = useState(
    TABLE_COLUMNS_STATE.reduce((acc, column) => {
      acc[column.id] = SORT_ORDER.asc;
      return acc;
    }, {}),
  );

  /* TODO
   * asMaterial UI does not handle sorting functionality
   * you have to implement additional functionality here
   */
  const handleChangeTableSorting = useCallback((columnName) => {
    setSort((prevState) => ({ ...prevState, [columnName]: REVERSED_SORT_ORDER[prevState[columnName]] }));
  }, []);

  return {
    sort,
    handleChangeTableSorting,
  };
};

export default useTable;
