import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Pagination.css';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return pages;
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination-wrapper">
      <button 
        className={`pag-nav-btn ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="pag-numbers">
        {getPageNumbers().map(num => (
          <button
            key={num}
            className={`pag-num-btn ${currentPage === num ? 'active' : ''}`}
            onClick={() => onPageChange(num)}
          >
            {num}
          </button>
        ))}
      </div>

      <button 
        className={`pag-nav-btn ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
