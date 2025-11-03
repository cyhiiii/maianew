// Application data constants
// Extracted for better separation of concerns and maintainability

export const heroData = {
  videoSrc: "https://player.vimeo.com/external/370467553.hd.mp4?s=1b70c106766e9d0f14a0d5c9bb0ffe10e8f5e1e1&profile_id=175",
  posterSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80",
  imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80",
  imageAlt: "Cinematic mountain landscape at golden hour"
};

export const editorialItems = [
  {
    imageSrc: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=1000&fit=crop&q=80",
    imageAlt: "Serene spa environment with natural elements",
    category: "WELLNESS",
    title: "Inner Peace",
    description: "Discover transformative wellness journeys that harmonize body, mind, and spirit in stunning natural settings.",
    link: { text: "Explore wellness", href: "#wellness" }
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop&q=80",
    imageAlt: "Fine dining experience with gourmet cuisine",
    category: "DINING",
    title: "Culinary Art",
    description: "Savor exceptional cuisine crafted from locally-sourced ingredients by world-renowned chefs.",
    link: { text: "View dining", href: "#dining" }
  }
];

export const seasonalCards = [
  {
    imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=450&fit=crop&q=80",
    imageAlt: "Beach resort at sunset with pristine waters",
    category: "TROPICAL ESCAPE",
    title: "Island Sanctuary",
    excerpt: "Pristine beaches and crystal waters await in this secluded paradise.",
    link: { text: "Discover more", href: "#tropical" }
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop&q=80",
    imageAlt: "Mountain retreat with snow-capped peaks",
    category: "MOUNTAIN RETREAT",
    title: "Alpine Heights",
    excerpt: "Experience tranquility among snow-capped peaks and pristine valleys.",
    link: { text: "Discover more", href: "#mountain" }
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=450&fit=crop&q=80",
    imageAlt: "Desert landscape with golden dunes",
    category: "DESERT JOURNEY",
    title: "Golden Dunes",
    excerpt: "Immerse yourself in the timeless beauty of ancient desert landscapes.",
    link: { text: "Discover more", href: "#desert" }
  }
];

export const winterSunData = {
  preTitle: "WINTER SUN",
  title: "Chasing Sunlight",
  discoverLink: "#winter-sun",
  largeImage: {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1400&h=900&fit=crop&q=80",
    alt: "Resort grounds with pool and palm trees"
  },
  smallImage: {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=900&fit=crop&q=80",
    alt: "Person in warm, soft light"
  }
};

export const seasonalExperiencesData = {
  title: "Seasonal Experiences",
  description: "Across the Aman world, discover new and noteworthy experiences that provide an authentic connection to the soul of a place.",
  experiences: [
    {
      imageSrc: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=640&h=560&fit=crop&q=80",
      imageAlt: "Winter in the Mountains",
      category: "SKI ADVENTURES",
      title: "Winter in the Mountains",
      description: "At Aman destinations in France and Italy, the winter season welcomes ski adventures.",
      link: "#ski-adventures"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=640&h=560&fit=crop&q=80",
      imageAlt: "In the City",
      category: "CITY ESCAPES",
      title: "In the City",
      description: "The gilded city skyline presents opportunities for cultural discovery at every turn.",
      link: "#city-escapes"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&h=560&fit=crop&q=80",
      imageAlt: "To the Wilds",
      category: "NATURE",
      title: "To the Wilds",
      description: "Venture out of the ordinary to Aman's most remote camps and lodges.",
      link: "#nature"
    }
  ]
};

export const expressionsData = {
  title: "Expressions of the Season",
  cards: [
    {
      imageSrc: "https://images.unsplash.com/photo-1544547606-4d73943d3b4c?w=800&h=1040&fit=crop&q=80",
      imageAlt: "Silhouette shadow on warm background",
      imagePosition: "20% 40%",
      subheading: "ARTFUL MOMENTS",
      heading: "Shadow Play",
      description: "Discover the interplay of light and shadow in this season's carefully curated artistic expressions."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=1040&fit=crop&q=80",
      imageAlt: "Aman gift card artwork",
      imagePosition: "center",
      subheading: "GIFTING",
      heading: "The Art of Giving",
      description: "Share the gift of timeless experiences with those you cherish most this season."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&h=1040&fit=crop&q=80",
      imageAlt: "Decorative advent calendar artwork",
      imagePosition: "center",
      subheading: "TRADITIONS",
      heading: "Seasonal Rituals",
      description: "Embrace the beauty of time-honored traditions reimagined for the modern traveler."
    }
  ]
};

export const footerData = {
  logo: "ĀMAN",
  socialLabel: "Follow us on:",
  socialLinks: [
    {
      url: "https://facebook.com/aman",
      ariaLabel: "Follow on Facebook",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
    },
    {
      url: "https://x.com/aman",
      ariaLabel: "Follow on X",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
    },
    {
      url: "https://instagram.com/aman",
      ariaLabel: "Follow on Instagram",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>'
    },
    {
      url: "https://youtube.com/aman",
      ariaLabel: "Follow on YouTube",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
    },
    {
      url: "https://pinterest.com/aman",
      ariaLabel: "Follow on Pinterest",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>'
    },
    {
      url: "https://weibo.com/aman",
      ariaLabel: "Follow on Weibo",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.443h-.002zm8.974-8.919c-.337-.095-.568-.16-.393-.566.376-.887.416-1.674.013-2.225-.76-1.021-2.829-.966-5.19-.024 0 0-.744.295-.552-.239.359-1.054.387-1.936-.079-2.449-1.055-1.158-3.866-.109-6.282 2.345-1.809 1.834-2.863 3.776-2.863 5.478 0 3.222 4.122 5.176 8.157 5.176 5.286 0 8.803-3.067 8.803-5.505 0-1.474-.999-2.313-2.614-2.991z"/></svg>'
    },
    {
      url: "https://line.me/aman",
      ariaLabel: "Follow on LINE",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>'
    },
    {
      url: "https://weixin.qq.com/aman",
      ariaLabel: "Follow on WeChat",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-5.523 3.397-6.95 1.128-.508 2.346-.733 3.587-.733.053 0 .105.009.158.009-.665-3.483-4.261-6.158-8.653-6.158zm-1.615 3.493a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16zm4.565 0a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16zm8.359 3.087c-4.186 0-7.582 2.829-7.582 6.32 0 3.492 3.396 6.321 7.582 6.321a7.76 7.76 0 0 0 2.164-.307.593.593 0 0 1 .549.09l1.433.838a.278.278 0 0 0 .122.041.224.224 0 0 0 .214-.224c0-.053-.021-.106-.036-.159l-.295-1.112a.44.44 0 0 1 .16-.498c1.366-1.006 2.252-2.486 2.252-4.189 0-3.492-3.396-6.321-7.582-6.321l.019-.001zm-2.432 3.095a.809.809 0 1 1 0 1.618.809.809 0 0 1 0-1.618zm4.87 0a.809.809 0 1 1 0 1.618.809.809 0 0 1 0-1.618z"/></svg>'
    },
    {
      url: "https://xiaohongshu.com/aman",
      ariaLabel: "Follow on Xiaohongshu",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.41 21.32H19.59C21.05 21.32 22.23 20.14 22.23 18.68V5.32C22.23 3.86 21.05 2.68 19.59 2.68H4.41C2.95 2.68 1.77 3.86 1.77 5.32V18.68C1.77 20.14 2.95 21.32 4.41 21.32ZM10 6.8H11.5V11.6L12.5 10.6L13.5 11.6L14 11.1V6.8H15.5V12.7L12.5 15.7L10 13.2V6.8Z"/></svg>'
    },
    {
      url: "https://wa.me/aman",
      ariaLabel: "Follow on WhatsApp",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>'
    }
  ],
  copyright: "Copyright 2025, Aman Group S.a.r.l."
};
