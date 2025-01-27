import { debounce } from 'lodash';
import { Filter } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { pagination, searchListingsApi } from '../../apis/Api';
import Navbar from '../../components/Navbar';

const CategoryPets = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    petType: '',
    gender: '',
    size: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPets = async () => {
    setIsLoading(true);
    try {
      const response = await pagination(pageNumber);
      if (response.data && Array.isArray(response.data.listings)) {
        setPets(response.data.listings);
      } else {
        toast.error('Unexpected response format from server.');
      }
    } catch (error) {
      toast.error('Failed to fetch pet data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await searchListingsApi({
        q: searchQuery,
        ...filters
      });
      if (response.data.success) {
        setPets(response.data.listings);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred while searching.');
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedSearch = debounce(handleSearch, 300);

  useEffect(() => {
    if (searchQuery === '' && Object.values(filters).every(x => x === '')) {
      fetchPets();
    } else {
      debouncedSearch();
    }
    return () => debouncedSearch.cancel();
  }, [searchQuery, filters, pageNumber]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Navbar />
      <div className="allpets-body bg-[#E0D082] min-h-screen p-4" style={{
        backgroundColor: "#E0D082"
      }}>
        <div className="search-container mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search pets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input p-2 pr-20 border rounded w-full bg-white text-black"
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white text-black rounded"
            >
              <Filter size={20} />
            </button>
          </div>

          {showFilters && (
            <div className="filter-options mt-2 p-4 rounded bg-white">
              <select
                value={filters.petType}
                onChange={(e) => handleFilterChange('petType', e.target.value)}
                className="filter-select p-2 border rounded mr-2 mb-2"
              >
                <option value="">All Pet Types</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>

              <select
                value={filters.gender}
                onChange={(e) => handleFilterChange('gender', e.target.value)}
                className="filter-select p-2 border rounded mr-2 mb-2"
              >
                <option value="">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <select
                value={filters.size}
                onChange={(e) => handleFilterChange('size', e.target.value)}
                className="filter-select p-2 border rounded mr-2 mb-2"
              >
                <option value="">All Sizes</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="big">Large</option>
              </select>
            </div>
          )}
        </div>

        <h2 className="heading text-center font-bold text-2xl mb-6">All Pets</h2>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {pets.map(pet => (
              <div key={pet._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`http://localhost:5500/listings/${pet.petImage}`}
                  className="w-full h-48 object-cover"
                  alt={pet.petName}
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-black">{pet.petName}</h5>
                  <p className="text-sm text-black">{pet.petType}</p>
                  <Link
                    to={`/pet_details/${pet._id}`}
                    className="btn btn-custom bg-[#E0D082] text-black px-4 py-2 rounded-lg mt-2 block text-center"
                  >
                    Browse Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="join mt-4 flex justify-center items-center">
          <button className="join-item btn mx-2" onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}>
            «
          </button>
          <button className="join-item btn mx-2">Page {pageNumber}</button>
          <button className="join-item btn mx-2" onClick={() => setPageNumber(prev => prev + 1)}>
            »
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryPets;
