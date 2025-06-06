import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SearchForm from '../../components/UI/SearchForm';
import InterviewCards from './InterviewSections/InterviewCards';
import BlogWriterSection from '../Blog/BlogRelated/BlogWriterSection';
import { useNavigate, Link } from 'react-router-dom';

const Interview = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handleBlog = () => {
    navigate('/blog');
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleTagsSelect = (tags) => {
    setSelectedTags(tags);
  };

  // This function will be called whenever the search input changes
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="w-full min-h-screen bg-white py-4 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-base text-gray-700 mb-2">
            Your guide to working from home success
          </h1>
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold text-pink-500 flex items-center gap-2">
              <span className="text-pink-300">•</span>
              SharApu Interviews
              <span className="text-pink-300">•</span>
            </div>
          </div>
        </div>

        {/* Blog Link */}
        <p className="text-pink-300">
          Find more interesting takeaways in{' '}
          <Link to="/blog" className="text-pink-500 cursor-pointer text-2xl">
            SharApu Blog
          </Link>
        </p>

        {/* Search Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border-2 border-pink-200 hover:border-pink-400 transition-colors"
          >
            <Search className="w-5 h-5 text-pink-400 group-hover:text-pink-500" />
            <span className="text-gray-700">Search</span>
          </button>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            "For those looking for work",
            "For those who want to order work",
            "Beginner's Guide",
            "SharApu NEWS"
          ].map((title, index) => (
            <div
              key={index}
              className={`p-4 bg-pink-400 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:translate-y-px ${
                selectedCategory === title ? 'ring-2 ring-yellow-300' : ''
              }`}
              onClick={() => handleCategorySelect(title)}
            >
              <h2 className="text-lg font-semibold text-yellow-200">{title}</h2>
            </div>
          ))}
        </div>

        {/* Interview Cards with search query */}
        <InterviewCards 
          selectedCategory={selectedCategory} 
          selectedTags={selectedTags}
          searchQuery={searchQuery}
        />

        <BlogWriterSection />
      </div>

      {/* Search Form Modal */}
      <SearchForm 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        selectedTags={selectedTags}
        onTagsSelect={handleTagsSelect}
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Interview;