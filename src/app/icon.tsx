import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // 1. The Container (The Stone)
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Luxury Gradient: Like a polished gemstone reflecting light
          background: 'linear-gradient(to bottom right, #4FF4E6, #00BCA8)',
          borderRadius: '22%', // Super-ellipse (Apple Style)
          // The Outer Bezel
          border: '1px solid #005F56', 
        }}
      >
        {/* 2. The Inner Bezel (Depth Effect) */}
        <div
          style={{
            width: '90%',
            height: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1.5px solid rgba(5, 6, 9, 0.8)', // Dark internal ring
            borderRadius: '18%',
          }}
        >
          {/* 3. The Glyph (The K) */}
          <div
            style={{
              color: '#050609', // Deep Ink Black
              fontSize: 22,
              fontWeight: 900, // Maximum Weight
              fontFamily: '"Times New Roman", Times, serif', // The Ancient Serif
              marginTop: '-2px', // Optical Perfection
              textShadow: '0px 1px 0px rgba(255,255,255,0.2)', // Engraved highlight
            }}
          >
            K
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}