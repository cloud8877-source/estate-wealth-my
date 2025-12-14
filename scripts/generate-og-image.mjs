import satori from 'satori';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Fetch Roboto font (TTF) from Google Fonts CDN
async function loadFont() {
  const response = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/roboto@latest/latin-400-normal.ttf'
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch font: ${response.status}`);
  }
  return await response.arrayBuffer();
}

async function generateOGImage() {
  const fontData = await loadFont();

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 50%, #1a202c 100%)',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '8px',
                background: 'linear-gradient(90deg, #d4a574 0%, #c9a227 50%, #d4a574 100%)',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '40px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #c9a227 0%, #d4a574 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '24px',
                            fontSize: '40px',
                            fontWeight: 700,
                            color: '#1a365d',
                          },
                          children: 'EW',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                          },
                          children: [
                            {
                              type: 'span',
                              props: {
                                style: {
                                  fontSize: '48px',
                                  fontWeight: 700,
                                  color: '#ffffff',
                                },
                                children: 'Estate Wealth',
                              },
                            },
                            {
                              type: 'span',
                              props: {
                                style: {
                                  fontSize: '28px',
                                  color: '#c9a227',
                                  fontWeight: 600,
                                  marginTop: '-8px',
                                },
                                children: 'MY',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'p',
                  props: {
                    style: {
                      fontSize: '32px',
                      color: '#e2e8f0',
                      marginBottom: '32px',
                    },
                    children: 'Premier Estate Planning for Malaysian Families',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      marginTop: '20px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '20px 30px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            marginRight: '20px',
                          },
                          children: [
                            {
                              type: 'span',
                              props: {
                                style: { fontSize: '24px', color: '#c9a227', fontWeight: 700 },
                                children: 'Will Writing',
                              },
                            },
                            {
                              type: 'span',
                              props: {
                                style: { fontSize: '16px', color: '#a0aec0', marginTop: '4px' },
                                children: 'From RM 2,500',
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '20px 30px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            marginRight: '20px',
                          },
                          children: [
                            {
                              type: 'span',
                              props: {
                                style: { fontSize: '24px', color: '#c9a227', fontWeight: 700 },
                                children: 'Trust Services',
                              },
                            },
                            {
                              type: 'span',
                              props: {
                                style: { fontSize: '16px', color: '#a0aec0', marginTop: '4px' },
                                children: '2 Week Completion',
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '20px 30px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                          },
                          children: [
                            {
                              type: 'span',
                              props: {
                                style: { fontSize: '24px', color: '#c9a227', fontWeight: 700 },
                                children: '500+ Families',
                              },
                            },
                            {
                              type: 'span',
                              props: {
                                style: { fontSize: '16px', color: '#a0aec0', marginTop: '4px' },
                                children: 'Protected',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '30px',
                fontSize: '20px',
                color: '#718096',
              },
              children: 'estatewealthmy.com',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  // Convert SVG to PNG using sharp
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  const outputPath = join(__dirname, '..', 'public', 'og-image.png');
  writeFileSync(outputPath, pngBuffer);
  console.log('✅ OG image generated at:', outputPath);
}

generateOGImage().catch(console.error);
