import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { experiencesData } from '../data/experiences';
import { ArrowLeft, ArrowRight, Star, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import './HomeExperiencesSlider.css';

const HomeExperiencesSlider = () => {
    const { language } = useLanguage();
    const data = experiencesData[language].slice(0, 6);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

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

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

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

    return (
        <section className="home-exp-slider-section">
            <div className="section-header">
                <span className="sub-title">{language === 'fr' ? 'Incontournables' : 'Must-Do'}</span>
                <h2 className="section-title text-gradient">{language === 'fr' ? 'Expériences Populaires' : 'Popular Experiences'}</h2>
            </div>

            <div 
                className="exp-slider-master-wrapper"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div 
                    className="exp-slider-track"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                >
                    {data.map((exp, index) => (
                        <div key={exp.id} className="exp-slide">
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

                                    <p className="dest-card-description">{exp.description}</p>
                                    
                                    <div className="dest-card-footer">
                                        <Link to={`/${language}/destinations/${exp.id}`} className="dest-card-btn">
                                            {language === 'fr' ? 'Découvrir' : 'Discover'} <ArrowUpRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="slider-pagination-mini">
                    {data.map((_, i) => (
                        <button 
                            key={i} 
                            className={`pag-dot-mini ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeExperiencesSlider;
