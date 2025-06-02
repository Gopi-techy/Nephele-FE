import React, { useState, useEffect, useRef } from 'react';

const featuresContainerStyle = {
  padding: '4rem 2rem',
  background: '#fff',
  textAlign: 'center',
};

const keyFeatureCardStyle = {
  background: 'rgba(237, 247, 255, 0.7)', // even lighter blue box
  border: '1.5px solid #bbdefb',
  borderRadius: '1.1rem',
  boxShadow: '0 1px 6px 0 rgba(25,118,210,0.04)',
  padding: '2.5rem 2.5rem',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto 2.5rem auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  zIndex: 3,
  opacity: 1,
  transform: 'none',
  transition: 'box-shadow 0.3s',
  boxSizing: 'border-box',
};

const keyFeatureIconStyle = {
  fontSize: '3.2rem',
  marginRight: '2rem',
  background: 'linear-gradient(135deg, #90caf9 60%, #fff 100%)',
  borderRadius: '1rem',
  width: '90px',
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 0 6px #e3f2fd',
  color: '#005fa3',
  border: '2px solid #90caf9',
  transition: 'transform 0.3s',
};

const keyFeatureTitleStyle = {
  fontSize: '1.5rem',
  color: '#005fa3',
  fontWeight: 800,
  marginBottom: '0.7rem',
  letterSpacing: '-0.5px',
};

const keyFeatureDescStyle = {
  color: '#1a2a4a',
  fontSize: '1.08rem',
  fontWeight: 500,
  marginBottom: '0.7rem',
};

const keyFeatureDetailStyle = {
  color: '#0078d4',
  fontSize: '1.05rem',
  marginTop: '0.7rem',
  lineHeight: 1.7,
  fontWeight: 500,
  background: 'rgba(187,222,251,0.18)',
  borderRadius: '0.7rem',
  padding: '1.1rem 1rem',
  boxShadow: '0 2px 8px rgba(0,120,212,0.06)',
};

const featuresListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center',
};

const featureCardStyle = {
  background: '#f8fbff',
  borderRadius: '1rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  padding: '2rem 1.5rem',
  width: '320px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: 0,
  transform: 'translateY(40px) scale(0.97)',
  transition: 'box-shadow 0.3s, transform 0.6s cubic-bezier(.23,1.01,.32,1), opacity 0.7s',
};

const featureIconStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  transition: 'transform 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  background: 'rgba(0, 120, 212, 0.1)',
};

const featureTitleStyle = {
  fontSize: '1.15rem',
  color: '#0078d4',
  marginBottom: '0.5rem',
  fontWeight: 700,
};

const featureDescStyle = {
  color: '#4a5a7a',
  fontSize: '1rem',
  lineHeight: '1.5',
  marginBottom: '0.5rem',
};

const featureDetailStyle = {
  color: '#0078d4',
  fontSize: '0.97rem',
  marginTop: '0.5rem',
  minHeight: '54px',
  fontWeight: 500,
};

const keyFeature = {
  icon: '🤖',
  title: 'AI Mock Interview',
  desc: 'Upload your resume, get custom questions, answer by voice, and receive instant AI feedback and ATS scoring—all in one seamless, interactive session.',
  detail: 'Resume parsing, keyword extraction, LLM-powered Q&A, real-time speech evaluation, and a downloadable report. Secure, smart, and cloud-powered.'
};

const featuresData = [
  {
    icon: '🧠',
    title: 'Face Recognition of Previously Visited Members',
    desc: 'Identifies and recognizes users who have interacted with Nephele earlier.',
    detail: 'Uses the Pi Camera to capture the user\'s face. A machine learning model running on Coral TPU processes the face data and matches it with records stored in DynamoDB. Delivers a personalized greeting and experience, making users feel remembered and valued.'
  },
  {
    icon: '📷',
    title: 'QR Code Scanner',
    desc: 'Scans QR codes to identify users and log their presence.',
    detail: 'Uses camera and Python-based QR scanning libraries. On scanning, sends data to AWS Lambda, which updates attendance records in DynamoDB. Automates attendance and check-ins, saving time and effort at events and in schools.'
  },
  {
    icon: '🗓️',
    title: 'Attendance Management',
    desc: 'Records and manages participant or student attendance.',
    detail: 'Integrated with the QR system. Stores attendance logs in DynamoDB. Can send confirmation emails using Amazon SES. Ensures accurate tracking and generates real-time reports.'
  },
  {
    icon: '🎤',
    title: 'Voice Commands',
    desc: 'Responds to spoken instructions to perform tasks.',
    detail: 'Captures voice using a microphone. Processes the input with Amazon Transcribe for speech-to-text. Executes commands using Python scripts and AWS Lambda functions. Enables hands-free operation.'
  },
  {
    icon: '💬',
    title: 'Interaction Module',
    desc: 'Interacts with users using predefined answers or dynamic AI responses.',
    detail: 'Uses a combination of LLMs (like Meta LLaMA 2) and custom-trained data. Voice interaction is enabled by Amazon Polly (TTS) and Transcribe (STT). Offers smart and relevant responses that keep users engaged.'
  },
  {
    icon: '✋',
    title: 'Handshake and Hand Gesture Recognition',
    desc: 'Detects and responds to hand movements and gestures like waves or handshakes.',
    detail: 'Utilizes the Pi Camera and ML algorithms to detect hand poses. Coral TPU accelerates gesture recognition. Adds a physical, human-like interaction layer.'
  },
  {
    icon: '📺',
    title: 'FAQ Display with Blinking Technology',
    desc: 'Shows frequently asked questions on a screen with blinking highlights.',
    detail: 'FAQ content is displayed on the built-in screen. Blinking or attention-grabbing visuals are programmed in Python. Reduces user wait time by making important info readily visible.'
  },
  {
    icon: '🤳',
    title: 'Selfie Capabilities',
    desc: 'Takes selfies (normal or cartoon-style) with users and sends them via email.',
    detail: 'Uses the Pi Camera to take photos. Processes the image and uploads it to Amazon S3. Sends it via Amazon SES to the user’s email. Makes Nephele fun and memorable.'
  },
  {
    icon: '🌍',
    title: 'Language Translation',
    desc: 'Translates text or voice to multiple languages.',
    detail: 'Captures spoken input. Converts it to text using Amazon Transcribe. Translates using LLMs or translation APIs. Converts back to speech using Amazon Polly. Makes Nephele inclusive and accessible to multilingual audiences.'
  },
];

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const keyFeatureRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Intersection Observer for feature cards
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  // Add keyframes for the animation only once
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined' && !document.getElementById('features-title-shimmer-style')) {
      const style = document.createElement('style');
      style.id = 'features-title-shimmer-style';
      style.innerHTML = `@keyframes featuresTitleShimmer {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }`;
      document.head.appendChild(style);
    }
  }, []);

  const featuresHeadingStyle = {
    fontSize: isMobile ? '0.95rem' : '2.1rem',
    marginBottom: isMobile ? '1.2rem' : '2.5rem',
    fontWeight: 900,
    position: 'relative',
    display: 'inline-block',
    padding: isMobile ? '0.05em 0.3em' : '0.4em 1.5em',
    borderRadius: isMobile ? '0.3em' : '2em',
    color: '#5bb6f9', // light blue
    background: 'none',
    backgroundClip: undefined,
    WebkitBackgroundClip: undefined,
    WebkitTextFillColor: undefined,
    animation: undefined,
    filter: undefined,
    boxShadow: undefined,
    textShadow: '0 2px 8px #b6e0fe', // soft blue shadow
    textTransform: 'uppercase',
    letterSpacing: '-2px',
    fontStyle: 'normal',
    border: 'none',
    MozTextFillColor: undefined,
  };

  // Shrink feature cards and key feature card on mobile
  const getFeatureCardStyle = (index) => ({
    ...featureCardStyle,
    width: isMobile ? '90%' : '320px',
    padding: isMobile ? '1.1rem 0.7rem' : '2rem 1.5rem',
    fontSize: isMobile ? '0.92rem' : '1rem',
    boxShadow:
      hoveredCard === index
        ? '0 12px 32px rgba(0,120,212,0.18)'
        : '0 2px 8px rgba(0,0,0,0.04)',
    transform:
      hoveredCard === index
        ? 'translateY(-12px) scale(1.06)'
        : visibleCards.includes(index)
        ? 'translateY(0) scale(1)'
        : 'translateY(40px) scale(0.97)',
    opacity: visibleCards.includes(index) ? 1 : 0,
    zIndex: hoveredCard === index ? 2 : 1,
    transition:
      'box-shadow 0.3s, transform 0.7s cubic-bezier(.23,1.01,.32,1), opacity 0.7s',
  });

  const currentFeaturesListStyle = {
    ...featuresListStyle,
    ...(isMobile && {
      flexDirection: 'column',
      gap: '1rem',
    }),
  };

  // Shrink key feature card on mobile
  const keyFeatureCardResponsive = {
    ...keyFeatureCardStyle,
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    padding: isMobile ? '1.2rem 0.7rem' : '2.5rem 2.5rem',
    maxWidth: isMobile ? '98%' : '1200px',
    fontSize: isMobile ? '0.95rem' : '1rem',
  };

  return (
    <section id="features" style={featuresContainerStyle}>
      <h2 style={featuresHeadingStyle}>Features</h2>
      <div ref={keyFeatureRef} style={keyFeatureCardResponsive}>
        <div style={{...keyFeatureIconStyle, fontSize: isMobile ? '2.1rem' : '3.2rem', width: isMobile ? '60px' : '90px', height: isMobile ? '60px' : '90px', marginRight: isMobile ? '0' : '2rem', marginBottom: isMobile ? '0.7rem' : '0'}}>{keyFeature.icon}</div>
        <div style={{flex: 1, textAlign: isMobile ? 'center' : 'left'}}>
          <h3 style={{...keyFeatureTitleStyle, fontSize: isMobile ? '1.1rem' : '1.5rem'}}>{keyFeature.title}</h3>
          <div style={{...keyFeatureDescStyle, fontSize: isMobile ? '0.98rem' : '1.08rem'}}>{keyFeature.desc}</div>
          <div style={{...keyFeatureDetailStyle, fontSize: isMobile ? '0.93rem' : '1.05rem'}}>{keyFeature.detail}</div>
        </div>
      </div>
      <div style={currentFeaturesListStyle}>
        {/* First row: 4 features */}
        <div style={{ display: 'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: isMobile ? '1rem' : '2rem', justifyContent: 'center', width: '100%' }}>
          {featuresData.slice(0, 4).map((f, i) => (
            <div
              key={i}
              ref={el => (cardRefs.current[i] = el)}
              data-index={i}
              style={getFeatureCardStyle(i)}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{
                ...featureIconStyle,
                transform: hoveredCard === i ? 'scale(1.13) rotate(-7deg)' : 'scale(1)',
                boxShadow: hoveredCard === i ? '0 0 0 4px #e3f2fd' : 'none',
              }}>{f.icon}</div>
              <h3 style={featureTitleStyle}>{f.title}</h3>
              <div style={featureDescStyle}>{f.desc}</div>
              <div style={featureDetailStyle}>{f.detail}</div>
            </div>
          ))}
        </div>
        {/* Second row: 3 features (skip the 5th feature) */}
        <div style={{ display: 'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: isMobile ? '1rem' : '2rem', justifyContent: 'center', width: '100%', marginTop: isMobile ? '1rem' : '2rem' }}>
          {featuresData.slice(4, 7).map((f, i) => (
            <div
              key={i + 4}
              ref={el => (cardRefs.current[i + 4] = el)}
              data-index={i + 4}
              style={getFeatureCardStyle(i + 4)}
              onMouseEnter={() => setHoveredCard(i + 4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{
                ...featureIconStyle,
                transform: hoveredCard === i + 4 ? 'scale(1.13) rotate(-7deg)' : 'scale(1)',
                boxShadow: hoveredCard === i + 4 ? '0 0 0 4px #e3f2fd' : 'none',
              }}>{f.icon}</div>
              <h3 style={featureTitleStyle}>{f.title}</h3>
              <div style={featureDescStyle}>{f.desc}</div>
              <div style={featureDetailStyle}>{f.detail}</div>
            </div>
          ))}
        </div>
        {/* Removed third row as requested */}
      </div>
    </section>
  );
};

export default Features;
