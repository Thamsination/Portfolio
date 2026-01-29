import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Christian Thams - Industrial Designer & Product Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#010A49',
          backgroundImage: 'linear-gradient(135deg, #010A49 0%, #1a1a3e 100%)',
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: 'white',
              marginBottom: 20,
              letterSpacing: '-2px',
            }}
          >
            Christian Thams
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 32,
              color: '#d1d5db',
              marginBottom: 40,
            }}
          >
            Industrial Designer & Product Developer
          </div>
          
          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 28,
              color: 'white',
            }}
          >
            Making things people{' '}
            <span
              style={{
                color: 'rgba(249, 101, 219, 0.9)',
                marginLeft: 10,
              }}
            >
              love
            </span>
          </div>
          
          {/* Companies */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30,
              marginTop: 50,
              fontSize: 18,
              color: '#9ca3af',
            }}
          >
            <span>Bang & Olufsen</span>
            <span>•</span>
            <span>SOUNDBOKS</span>
            <span>•</span>
            <span>UVISA Health</span>
            <span>•</span>
            <span>IDEO</span>
          </div>
          
          {/* Location */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 30,
              fontSize: 16,
              color: '#6b7280',
            }}
          >
            Copenhagen, Denmark
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
