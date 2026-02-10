import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

export const SectionContainer = styled.section`
  margin: 0 auto;
  padding: 3rem 0 4rem;
  background: linear-gradient(180deg, var(--color-main-dark) 0%, var(--color-bg-section) 50%, var(--color-main-dark) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(1.5px 1.5px at 20px 30px, rgba(255,255,255,0.25), transparent),
                      radial-gradient(1.5px 1.5px at 40px 70px, rgba(255,255,255,0.2), transparent),
                      radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent),
                      radial-gradient(1.5px 1.5px at 130px 80px, rgba(255,255,255,0.2), transparent);
    background-size: 150px 150px;
    pointer-events: none;
    opacity: 0.8;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const MarqueeWrapper = styled.div`
  overflow: hidden;
  padding: 1rem 0 3rem;
  cursor: default;

  &:hover .marquee-track {
    animation-play-state: paused;
  }
`;

export const MarqueeTrack = styled.div.attrs({ className: "marquee-track" })`
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: ${scroll} 60s linear infinite;
  animation-play-state: running;
  padding: 0 2rem;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const ProjectBox = styled.div`
  flex-shrink: 0;
  width: 420px;
  background: linear-gradient(145deg, var(--color-main-light) 0%, var(--color-main-surface) 100%);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.4),
    0 0 0 1px var(--color-border),
    0 0 60px -10px var(--color-secondary-glow);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 35px 70px rgba(0, 0, 0, 0.45),
      0 0 0 1px var(--color-border-strong),
      0 0 80px -5px var(--color-secondary-glow);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const ProjectContent = styled.div`
  padding: 1.75rem 2rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: var(--color-text);
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProjectButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
  color: white;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: opacity 0.25s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.95;
    transform: scale(1.02);
  }
`;
