import React, { useRef, useEffect, useState } from 'react';
import './Videos.css';
import nepheleVideo from '../assets/nephele_2.0_video.mp4';
import nephelePoster from '../assets/nephele_2.0 -video-image.jpeg';

const Videos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoSectionRef.current) {
        const rect = videoSectionRef.current.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.75);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="videos" className="videos-section" ref={videoSectionRef}>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2.5rem',
        position: 'relative',
        minHeight: '120px',
        overflow: 'visible',
      }}>
        <div className="videos-animated-title" style={{
          fontSize: '2.7rem',
          fontWeight: 800,
          color: 'var(--video-primary)',
          letterSpacing: '0.04em',
          marginBottom: '0.5rem',
          position: 'relative',
          zIndex: 2,
          animation: 'videosTitleWave 2.5s infinite cubic-bezier(.68,-0.55,.27,1.55) alternate',
          background: 'linear-gradient(90deg, #0078d4 30%, #00c6fb 70%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Nephele in Action
        </div>
        <div className="videos-animated-sub" style={{
          fontSize: '1.25rem',
          color: 'var(--video-text-light)',
          fontWeight: 500,
          marginBottom: '0.5rem',
          animation: 'videosSubtitleFade 2.5s infinite alternate',
          letterSpacing: '0.01em',
          zIndex: 1,
        }}>
          Experience the future of interview prep
        </div>
        <style>{`
          @keyframes videosTitleWave {
            0% { transform: translateY(0) scale(1); text-shadow: 0 2px 16px #00c6fb33; }
            50% { transform: translateY(-12px) scale(1.07); text-shadow: 0 8px 32px #0078d4aa; }
            100% { transform: translateY(0) scale(1); text-shadow: 0 2px 16px #00c6fb33; }
          }
          @keyframes videosSubtitleFade {
            0% { opacity: 0.7; }
            100% { opacity: 1; }
          }
          @keyframes videoCardPop {
            0% { transform: scale(0.92) rotate(-2deg); opacity: 0; }
            60% { transform: scale(1.04) rotate(1deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @media (max-width: 900px) {
            .videos-animated-title { font-size: 2rem !important; }
            .videos-animated-sub { font-size: 1rem !important; }
          }
        `}</style>
      </div>
      <div className="videos-grid" style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
        <div className="video-card" style={{
          width: '100%',
          maxWidth: 900,
          margin: '0 auto',
          boxShadow: '0 16px 48px #00c6fb33, 0 2px 8px #0078d433',
          borderRadius: '2.5rem 0.5rem 2.5rem 0.5rem',
          overflow: 'visible',
          background: 'linear-gradient(135deg, #f8fbff 70%, #e3f0ff 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: isVisible ? 'videoCardPop 1.1s cubic-bezier(.68,-0.55,.27,1.55) both' : 'none',
          position: 'relative',
          minHeight: '440px',
          border: '2.5px solid #00c6fb33',
        }}>
          {/* Decorative floating shapes */}
          <div style={{
            position: 'absolute',
            top: '-32px', left: '-32px',
            width: '64px', height: '64px',
            background: 'radial-gradient(circle at 60% 40%, #00c6fb55 0%, transparent 80%)',
            borderRadius: '50%',
            zIndex: 1,
            filter: 'blur(2px)',
            animation: 'floatShape1 4.5s ease-in-out infinite alternate',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-28px', right: '-28px',
            width: '48px', height: '48px',
            background: 'radial-gradient(circle at 40% 60%, #0078d455 0%, transparent 80%)',
            borderRadius: '50%',
            zIndex: 1,
            filter: 'blur(1.5px)',
            animation: 'floatShape2 5.5s ease-in-out infinite alternate',
          }} />
          {/* Video only, no text in box */}
          <div className="video-thumbnail-container" style={{
            width: '100%',
            aspectRatio: '16/9',
            background: 'linear-gradient(90deg, #e3f0ff 60%, #c7e2ff 100%)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: '2.5rem',
            borderTopRightRadius: '0.5rem',
          }}>
            <video className="video-iframe" src={nepheleVideo} controls style={{
              width: '100%',
              height: '100%',
              borderRadius: '2rem 0.5rem 0 0',
              background: '#e3f0ff',
              objectFit: 'cover',
              boxShadow: '0 8px 32px #0078d41a',
            }} poster={nephelePoster} />
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              pointerEvents: 'none',
              background: 'radial-gradient(circle at 60% 40%, #00c6fb22 0%, transparent 70%)',
              zIndex: 2,
            }} />
          </div>
          {/* No video-content text here */}
          <style>{`
            @keyframes floatShape1 {
              0% { transform: translateY(0) scale(1); }
              100% { transform: translateY(18px) scale(1.08); }
            }
            @keyframes floatShape2 {
              0% { transform: translateY(0) scale(1); }
              100% { transform: translateY(-14px) scale(1.04); }
            }
          `}</style>
        </div>
      </div>
      {/* Place the title and description below the video card, outside the box */}
      <div style={{
        width: '100%',
        maxWidth: 900,
        margin: '2.5rem auto 0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.7rem',
      }}>
        <div className="video-title" style={{
          fontSize: '1.9rem',
          fontWeight: 700,
          color: 'var(--video-text-dark)',
          letterSpacing: '0.01em',
        }}>
          Nephele 2.0 Demo
        </div>
        <div className="video-description" style={{
          color: 'var(--video-text-light)',
          fontSize: '1.18rem',
          lineHeight: 1.7,
          maxWidth: 700,
        }}>
          See how Nephele, the AI-powered interview assistant robot, works in real time. Experience the seamless feedback, resume analysis, and smart coaching features in this exclusive demo.
        </div>
      </div>
    </section>
  );
};

export default Videos;