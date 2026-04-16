import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { experiencesData } from '../data/experiences';
import { ArrowLeft, ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import './HomeExperiencesSlider.css';

const HomeExperiencesSlider = () => {
    const { language } = useLanguage();
    const data = experiencesData[language].slice(0, 6);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
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
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {data.map((exp, index) => (
                        <div key={exp.id} className="exp-slide">
                            <div className="exp-slide-card glass-card">
                                <div className="exp-slide-img">
                                    <img src={exp.image} alt={exp.title} />
                                    <div className="exp-badge">
                                        <Star size={12} fill="#ffc107" strokeWidth={0} />
                                        {exp.rating}
                                    </div>
                                </div>
                                <div className="exp-slide-body">
                                    <div className="exp-slide-meta">
                                        <span><MapPin size={14} /> {exp.region}</span>
                                        <span><Clock size={14} /> {exp.duration}</span>
                                    </div>
                                    <h3 className="exp-slide-title">{exp.title}</h3>
                                    <p className="exp-slide-desc">{exp.description}</p>
                                    
                                    <div className="exp-slide-footer">
                                        <div className="exp-slide-price">
                                            <span className="from">{language === 'fr' ? 'À partir de' : 'From'}</span>
                                            <span className="amount">{exp.price} {exp.currency}</span>
                                        </div>
                                        <Link to={`/${language}/contact`} className="exp-slide-btn">
                                            {language === 'fr' ? 'Réserver' : 'Book Now'}
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
