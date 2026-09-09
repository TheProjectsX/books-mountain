/**
 * Type definitions for Books Mountain Multi-Language Dictionary
 * Supports English ('en') as primary and Bengali ('bn') as secondary.
 */

export type Locale = 'en' | 'bn';

export interface Dictionary {
  common: {
    appName: string;
    tagline: string;
    theme: string;
    loading: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    back: string;
    login: string;
    logout: string;
    adminPortal: string;
    liveSite: string;
    inStock: string;
    outOfStock: string;
    currencySymbol: string;
  };
  nav: {
    home: string;
    catalog: string;
    designTokens: string;
    admin: string;
    dashboard: string;
    products: string;
    settings: string;
  };
  announcement: {
    freeShipping: string;
    followFacebook: string;
  };
  header: {
    brand: string;
    books: string;
    authors: string;
    about: string;
    blog: string;
    contact: string;
    followUs: string;
    cart: string;
    search: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  categories: {
    all: string;
    fiction: string;
    nonFiction: string;
    sciFi: string;
    fantasy: string;
    biography: string;
    history: string;
    mystery: string;
    romance: string;
    thriller: string;
    youngAdult: string;
  };
  newArrivals: {
    title: string;
    viewAll: string;
    addToCart: string;
  };
  staffPicks: {
    title: string;
    staffFavorite: string;
    readReview: string;
    overstoryQuote: string;
  };
  bestsellers: {
    title: string;
    subtitle: string;
    topRated: string;
    bestsellerBadge: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    viaFacebook: string;
    review1Text: string;
    review1Author: string;
    review2Text: string;
    review2Author: string;
    review3Text: string;
    review3Author: string;
  };
  blog: {
    title: string;
    post1Title: string;
    post1Excerpt: string;
    post2Title: string;
    post2Excerpt: string;
    post3Title: string;
    post3Excerpt: string;
  };
  community: {
    title: string;
    subtitle: string;
    officialName: string;
    postTime: string;
    postText: string;
    likes: string;
    comments: string;
    connectBtn: string;
    chatLive: string;
  };
  footer: {
    brandName: string;
    curatingText: string;
    quickLinks: string;
    support: string;
    newsletter: string;
    newsletterText: string;
    emailPlaceholder: string;
    subscribeBtn: string;
    copyright: string;
    builtWith: string;
    shipping: string;
    returns: string;
    faq: string;
  };
  public: {
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    openAdmin: string;
    viewSample: string;
    sampleWorks: string;
    sampleWorksSubtitle: string;
    architectureVerification: string;
    themeTokensTitle: string;
    themeTokensDesc: string;
    typographySystem: string;
    geometryShapes: string;
    footerCopyright: string;
    footerActiveTheme: string;
  };
  admin: {
    consoleTitle: string;
    managementConsole: string;
    newProduct: string;
    viewCatalog: string;
    totalProducts: string;
    activeCatalog: string;
    defaultCurrency: string;
    designSystem: string;
    themeStatusTitle: string;
    themeStatusDesc: string;
    dbTitle: string;
    dbDesc: string;
    loginTitle: string;
    loginSubtitle: string;
    emailLabel: string;
    passwordLabel: string;
    signInBtn: string;
    defaultCredentials: string;
    themeSettingsTitle: string;
    themeSettingsSubtitle: string;
    colorPalette: string;
    systemArchitecture: string;
    tableCover: string;
    tableTitle: string;
    tablePrice: string;
    tableStatus: string;
    tableActions: string;
    searchPlaceholder: string;
    refresh: string;
    addProduct: string;
  };
}
