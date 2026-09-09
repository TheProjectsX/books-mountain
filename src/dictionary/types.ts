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
