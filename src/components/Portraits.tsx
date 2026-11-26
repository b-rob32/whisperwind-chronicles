import React from 'react';
import type { CompanionId, PlayerProfile } from '../types';

interface HeroPortraitProps {
  profile: PlayerProfile;
  size?: number;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ profile, size = 64 }) => {
  const isMackenzie = profile.id === 'mackenzie';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="portrait-svg"
      aria-label={`${profile.name} portrait`}
    >
      <circle cx="50" cy="50" r="46" fill="#f7eedb" stroke={profile.accentColor} strokeWidth="4" />
      {/* Cloak / Tunic */}
      <path d="M22 86 C26 67, 74 67, 78 86 Z" fill={profile.avatarTunic} />
      <path d="M40 72 L50 84 L60 72 Z" fill="#fef3c7" opacity="0.85" />
      {/* Back Hair */}
      {isMackenzie ? (
        <path d="M26 48 C24 68, 30 76, 36 74 L64 74 C70 76, 76 68, 74 48 Z" fill={profile.avatarHair} />
      ) : (
        <path d="M25 46 C22 72, 27 84, 34 80 L66 80 C73 84, 78 72, 75 46 Z" fill={profile.avatarHair} />
      )}
      {/* Face */}
      <circle cx="50" cy="48" r="20" fill="#fde2c8" />
      {/* Cheeks */}
      <circle cx="38" cy="52" r="3.5" fill="#f4978e" opacity="0.55" />
      <circle cx="62" cy="52" r="3.5" fill="#f4978e" opacity="0.55" />
      {/* Eyes */}
      <circle cx="42" cy="46" r="2.8" fill="#2c241b" />
      <circle cx="58" cy="46" r="2.8" fill="#2c241b" />
      <circle cx="43" cy="45" r="0.9" fill="#ffffff" />
      <circle cx="59" cy="45" r="0.9" fill="#ffffff" />
      {/* Smile */}
      <path d="M43 55 Q50 61 57 55" fill="none" stroke="#8a4b38" strokeWidth="2.4" strokeLinecap="round" />
      {/* Front Bangs */}
      <path d="M30 43 C32 26, 68 26, 70 43 C62 35, 53 33, 50 37 C46 33, 37 35, 30 43 Z" fill={profile.avatarHair} />

      {/* Equipped Hats */}
      {profile.equippedHat === 'hat-explorer' && (
        <g>
          <path d="M26 34 Q50 18 74 34 Z" fill="#2d6a4f" />
          <ellipse cx="50" cy="34" rx="26" ry="5" fill="#1e4d38" />
          <path d="M64 25 Q76 16 74 30" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      )}
      {profile.equippedHat === 'hat-starlight' && (
        <g>
          <ellipse cx="50" cy="28" rx="22" ry="10" fill="#2a4d7c" />
          <circle cx="50" cy="18" r="2.5" fill="#fbbf24" />
          <path d="M41 27 l2 3 l3 1 l-3 1 l-2 3 l-2-3 l-3-1 l3-1 z" fill="#fde68a" />
        </g>
      )}
      {profile.equippedHat === 'hat-cloudberry' && (
        <g>
          <path d="M32 31 L37 19 L45 27 L50 16 L55 27 L63 19 L68 31 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
          <circle cx="50" cy="25" r="2.6" fill="#9333ea" />
          <circle cx="39" cy="27" r="2" fill="#ec4899" />
          <circle cx="61" cy="27" r="2" fill="#ec4899" />
        </g>
      )}
      {profile.equippedHat === 'hat-archivist' && (
        <g>
          <ellipse cx="50" cy="33" rx="28" ry="6" fill="#243b6b" />
          <path d="M32 33 L50 6 L68 33 Z" fill="#2f4d8a" />
          <path d="M35 30 Q50 33 65 30" fill="none" stroke="#fbbf24" strokeWidth="3" />
          <circle cx="50" cy="19" r="2.5" fill="#fde68a" />
        </g>
      )}
    </svg>
  );
};

interface CompanionPortraitProps {
  companion: CompanionId;
  gear?: string | null;
  size?: number;
}

export const CompanionPortrait: React.FC<CompanionPortraitProps> = ({
  companion,
  gear = null,
  size = 56,
}) => {
  if (companion === 'doggy') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" className="portrait-svg" aria-label="Doggy companion">
        <circle cx="50" cy="50" r="46" fill="#fff3e2" stroke="#c94a5a" strokeWidth="4" />
        {/* Floppy Ears */}
        <ellipse cx="26" cy="52" rx="10" ry="19" transform="rotate(14 26 52)" fill="#9c5a2d" />
        <ellipse cx="74" cy="52" rx="10" ry="19" transform="rotate(-14 74 52)" fill="#9c5a2d" />
        {/* Head */}
        <circle cx="50" cy="50" r="24" fill="#d99152" />
        {/* Muzzle */}
        <ellipse cx="50" cy="58" rx="13" ry="10" fill="#fce7c8" />
        {/* Eyes */}
        <circle cx="40" cy="46" r="3.2" fill="#2c241b" />
        <circle cx="60" cy="46" r="3.2" fill="#2c241b" />
        <circle cx="41" cy="45" r="1" fill="#ffffff" />
        <circle cx="61" cy="45" r="1" fill="#ffffff" />
        {/* Nose & Happy Tongue */}
        <ellipse cx="50" cy="54" rx="5" ry="3.5" fill="#3a2314" />
        <path d="M44 61 Q50 66 56 61" fill="none" stroke="#5a3420" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M47 63 Q50 70 53 63 Z" fill="#f472b6" />
        {renderCompanionGear(gear)}
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="portrait-svg" aria-label="Slothy companion">
      <circle cx="50" cy="50" r="46" fill="#eaf6f3" stroke="#1f7a6e" strokeWidth="4" />
      {/* Fluffy Sloth Head */}
      <ellipse cx="50" cy="52" rx="27" ry="23" fill="#8b7765" />
      {/* Cream Face Mask */}
      <ellipse cx="50" cy="54" rx="21" ry="16" fill="#f3e9d9" />
      {/* Iconic Sloth Eye Patches */}
      <ellipse cx="39" cy="51" rx="8.5" ry="6" transform="rotate(-15 39 51)" fill="#6e5c4d" />
      <ellipse cx="61" cy="51" rx="8.5" ry="6" transform="rotate(15 61 51)" fill="#6e5c4d" />
      {/* Gentle Eyes */}
      <circle cx="40" cy="51" r="2.8" fill="#1f1a16" />
      <circle cx="60" cy="51" r="2.8" fill="#1f1a16" />
      <circle cx="41" cy="50" r="0.9" fill="#ffffff" />
      <circle cx="61" cy="50" r="0.9" fill="#ffffff" />
      {/* Nose & Cozy Smile */}
      <ellipse cx="50" cy="56" rx="4.2" ry="3" fill="#3d3129" />
      <path d="M43 62 Q50 67 57 62" fill="none" stroke="#5a473a" strokeWidth="2.2" strokeLinecap="round" />
      {renderCompanionGear(gear)}
    </svg>
  );
};

function renderCompanionGear(gear: string | null) {
  if (gear === 'comp-bandana') {
    return (
      <g>
        <path d="M32 74 Q50 82 68 74 L50 88 Z" fill="#dc2626" />
        <path d="M35 76 Q50 82 65 76" fill="none" stroke="#fef08a" strokeWidth="2" />
      </g>
    );
  }
  if (gear === 'comp-bowtie') {
    return (
      <g>
        <polygon points="36,75 49,81 36,87" fill="#f59e0b" />
        <polygon points="64,75 51,81 64,87" fill="#f59e0b" />
        <circle cx="50" cy="81" r="3.5" fill="#b45309" />
      </g>
    );
  }
  if (gear === 'comp-monocle') {
    return (
      <g>
        <circle cx="40" cy="49" r="7.5" fill="none" stroke="#d97706" strokeWidth="2.4" />
        <circle cx="60" cy="49" r="7.5" fill="none" stroke="#d97706" strokeWidth="2.4" />
        <line x1="47.5" y1="49" x2="52.5" y2="49" stroke="#d97706" strokeWidth="2.4" />
      </g>
    );
  }
  if (gear === 'comp-crown') {
    return (
      <g>
        <path d="M37 30 L42 19 L50 26 L58 19 L63 30 Z" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
        <circle cx="50" cy="26" r="2" fill="#e11d48" />
      </g>
    );
  }
  return null;
}
