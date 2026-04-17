import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { experiencesData } from '../data/experiences';
import { ArrowLeft, ArrowRight, Star, Clock, MapPin, Users } from 'lucide-react';
import './HomeExperiencesSlider.css';

const HomeExperiencesSlider = () => {
    const { language } = useLanguage();
    const data = experiencesData[language].slice(0, 6);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const t = {
        fr: {
            eyebrow: "Incontournables",
            title: "Expériences Populaires",
            from: "À partir de",
            reviews: "avis",
            cta: "Réserver"
        },
        en: {
            eyebrow: "Must-Do",
            title: "Popular Experiences",
            from: "Starting at",
            reviews: "reviews",
            cta: "Book"
        }
    }[language];

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
                <span className="sub-title">{t.eyebrow}</span>
                <h2 className="section-title text-gradient">{t.title}</h2>
            </div>

            <div 
                className="exp-slider-master-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div 
                    className="exp-slider-track"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                >
                    {data.map((exp, index) => (
                        <div key={exp.id} className={`exp-slide ${index === currentIndex ? 'active' : ''}`}>
                            {/* Unified Experience Card Design */}
                            <div className="exp-card">
                                <div className="exp-card-img">
                                    <img src={exp.image} alt={exp.title} />
                                    <div className="exp-card-badge">
                                        <Star size={12} fill="#ffc107" strokeWidth={0} />
                                        {exp.rating}
                                    </div>
                                </div>
                                <div className="exp-card-body">
                                    <h3 className="exp-card-title">{exp.title}</h3>
                                    
                                    <div className="exp-card-meta">
                                        <span><MapPin size={14} /> {exp.region}</span>
                                        <span><Clock size={14} /> {exp.duration}</span>
                                        <span className="exp-category-tag">{exp.category}</span>
                                        <span className="exp-group-size"><Users size={14} /> {exp.groupSize}</span>
                                    </div>
                                    
                                    <p className="exp-card-desc">{exp.description}</p>
                                    
                                    <div className="exp-card-rating">
                                        <Star size={13} fill="#FFB800" strokeWidth={0} />
                                        <strong>{exp.rating}</strong>
                                        <span>({exp.reviews} {t.reviews})</span>
                                    </div>
                                    
                                    <div className="exp-card-footer">
                                        <div className="exp-price-wrap">
                                            <span className="exp-from-label">{t.from}</span>
                                            <div className="exp-price">{exp.price} <span>{exp.currency}</span></div>
                                        </div>
                                        <Link to={`/${language}/contact`} className="exp-book-btn">
                                            {t.cta}
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

                {/* Navigation Controls */}
                <div className="slider-controls">
                    <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous">
                        <ArrowLeft size={24} />
                    </button>
                    <button className="slider-btn next" onClick={nextSlide} aria-label="Next">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeExperiencesSlider;
