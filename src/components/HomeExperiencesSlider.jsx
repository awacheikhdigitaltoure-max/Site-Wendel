import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { experiencesData } from '../data/experiences';
import { ArrowLeft, ArrowRight, ArrowUpRight, Star, MapPin } from 'lucide-react';
import './HomeExperiencesSlider.css';

const HomeExperiencesSlider = () => {
    const { language } = useLanguage();
    const data = experiencesData[language].slice(0, 8); // Top 8 experiences
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef(null);

    // Dynamic items per view detection
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth <= 768) setItemsPerView(1);
            else if (window.innerWidth <= 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        
        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const maxIndex = data.length - itemsPerView;

    // Auto-slide logic
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, isPaused, itemsPerView]);

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="home-exp-slider-section">
            <div className="section-header">
                <span className="sub-title">{language === 'fr' ? 'Incontournables' : 'Must-Do'}</span>
                <h2 className="section-title text-gradient">{language === 'fr' ? 'Expériences Populaires' : 'Popular Experiences'}</h2>
            </div>

            <div 
                className="slider-master-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div 
                    className="slider-track"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                    ref={sliderRef}
                >
                    {data.map((exp, index) => (
                        <div key={exp.id} className={`dest-slide ${index === currentIndex ? 'active' : ''}`}>
                            <div className="dest-home-card">
                                <div className="dest-card-image">
                                    <img src={exp.image} alt={exp.title} />
                                    <div className="dest-card-badge">{exp.category}</div>
                                </div>
                                
                                <div className="dest-card-content">
                                    <div className="dest-card-header">
                                        <h3 className="dest-card-title">{exp.title}</h3>
                                        <div className="dest-card-rating">
                                            <Star size={14} fill="#FFB800" stroke="none" />
                                            <span>{exp.rating}</span>
                                        </div>
                                    </div>
 
                                    <div className="dest-card-location">
                                        <MapPin size={14} /> <span>{exp.region}</span>
                                    </div>
                                    
                                    {/* Description consistent with Destination Slider */}
                                    <p className="dest-card-description">{exp.description}</p>
                                    
                                    <div className="dest-card-footer">
                                        <Link to={`/${language}/experiences`} className="dest-card-btn">
                                            {language === 'fr' ? 'Réserver' : 'Book'} <ArrowUpRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls matched to Destination Slider */}
                <div className="slider-controls">
                    <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous">
                        <ArrowLeft size={24} />
                    </button>
                    <button className="slider-btn next" onClick={nextSlide} aria-label="Next">
                        <ArrowRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots matched to Destination Slider */}
                <div className="slider-pagination">
                    {data.map((_, i) => (
                        <button 
                            key={i} 
                            className={`pag-dot ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeExperiencesSlider;
