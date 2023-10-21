import Card from 'components/card';
import React, { useState } from 'react';
import { IoChevronDownCircleSharp, IoChevronUpCircleSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function UsersReq({ filteredData }) {
  const [searchValue, setSearchData] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Initial sort order is ascending
  const history = useNavigate();

  const handleClick = (e) => {
    const name = e?.replace(/ /g, "-");
    history(`/admin/User/${name}`);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchData(searchValue);
  };

  const sortData = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return new Date(a.datePosted) - new Date(b.datePosted);
      } else {
        return new Date(b.datePosted) - new Date(a.datePosted);
      }
    });
    return sortedData;
  };

  const components = sortData()
    .filter((user) => {
      return (
        searchValue === '' ||
        user.name.toLowerCase().includes(searchValue)
      );
    })
    .map((item) => (
      <Card
        key={item._id} // Use _id as the key
        onClick={() => {
          handleClick(item.name);
        }}
        extra={
          "shadow mt-6 hover:-translate-y-2 transition-all delay-150 hover:cursor-pointer w-full h-full p-3"
        }
      >
        <div className="mt-2 w-full">
          <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
            User - {item.name}
          </h4> 
        </div>
      </Card>
    ));

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <>
      <div className='flex justify-start items-center gap-4 mt-5 '>
        <input
          type="text"
          placeholder="Search by name"
          value={searchValue}
          className='px-2 border-2 border-gray-400 rounded-md'
          onChange={handleSearch}
        />
        <span> Sort by Date:</span>
        <button className='text-white bg-gradient-to-r flex gap-2 from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br    font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 ' onClick={toggleSortOrder}>
          {sortOrder === 'asc' ?  <div className='flex justify-center items-center gap-2'>Ascending <IoChevronUpCircleSharp/></div> : <div className='flex justify-center items-center gap-2'>Descending<IoChevronDownCircleSharp/></div>}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5">{components}</div>
    </>
  );
}
