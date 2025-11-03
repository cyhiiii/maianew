# Video Assets Directory

## Required Video Specifications

### Sunset Landscape Video
**Filename:** `sunset-landscape.mp4`

**Technical Requirements:**
- **Format:** MP4 (H.264 codec)
- **Resolution:** 1920x1080 (Full HD) minimum
- **Aspect Ratio:** 16:9
- **Duration:** 10-30 seconds (seamless loop)
- **Frame Rate:** 24-30 fps
- **File Size:** <10MB (optimized for web)
- **Bitrate:** 3-5 Mbps for good quality

### Visual Style
- **Mood:** Tranquil, cinematic, warm
- **Color Tone:** Golden hour, warm natural tones
- **Lighting:** Soft, diffused
- **Content:** Landscape, nature, sunset/sunrise
- **Motion:** Subtle, slow-moving

### Recommended Sources
1. **Premium Stock:** Artgrid, Storyblocks, Envato Elements
2. **Free Stock:** Pexels, Pixabay, Coverr
3. **Custom:** Shoot your own footage

### Video Optimization
```bash
# Using ffmpeg to optimize video for web:
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -movflags +faststart -vf scale=1920:1080 -b:v 3M sunset-landscape.mp4
```

### Usage
Place your optimized video file in this directory:
`/public/videos/sunset-landscape.mp4`

Then update the data file:
```javascript
// src/constants/data.js
export const heroData = {
  videoSrc: "/videos/sunset-landscape.mp4", // Uncomment this line
  posterSrc: "/images/sunset-poster.jpg",
  imageSrc: "/images/sunset-poster.jpg",
  imageAlt: "Warm cinematic sunset landscape"
};
```

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Requires `muted` and `playsInline` (already configured)
- Mobile: `playsInline` prevents fullscreen takeover

### Testing
1. Place video file in this directory
2. Reload development server
3. Video should autoplay, loop, and mute automatically
4. Check performance with browser DevTools
