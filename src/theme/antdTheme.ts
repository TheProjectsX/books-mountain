import type { ThemeConfig } from 'antd';
import { designTokens } from './designTokens';

/**
 * Ant Design Theme Configuration
 * Maps typed designTokens into AntD ThemeConfig
 */
export const antdTheme: ThemeConfig = {
  token: {
    // Primary brand identity: Deep Indigo (#1b1b3a)
    colorPrimary: designTokens.colors.primaryContainer,
    colorInfo: designTokens.colors.primaryContainer,
    colorSuccess: designTokens.colors.success,
    colorWarning: designTokens.colors.warning,
    colorError: designTokens.colors.error,

    // Neutral canvas & surfaces
    colorBgBase: designTokens.colors.surface,
    colorBgLayout: designTokens.colors.background,
    colorBgContainer: designTokens.colors.surface,
    colorBgElevated: designTokens.colors.surface,

    // Typography & contrast
    colorTextBase: designTokens.colors.textPrimary,
    colorTextSecondary: designTokens.colors.textSecondary,
    colorTextTertiary: designTokens.colors.outline,

    // Borders
    colorBorder: designTokens.colors.border,
    colorBorderSecondary: designTokens.colors.borderVariant,

    // Geometry & Fonts
    borderRadius: 4,
    fontFamily: designTokens.typography.bodyFont,
    fontSize: 14,
  },
  components: {
    Button: {
      borderRadius: 4,
      fontFamily: designTokens.typography.buttonFont,
      fontWeight: 600,
      controlHeight: 38,
      colorPrimary: designTokens.colors.primaryContainer,
    },
    Input: {
      borderRadius: 4,
      colorBorder: designTokens.colors.border,
      activeBorderColor: designTokens.colors.primaryContainer,
      hoverBorderColor: designTokens.colors.secondary,
    },
    InputNumber: {
      borderRadius: 4,
      colorBorder: designTokens.colors.border,
      activeBorderColor: designTokens.colors.primaryContainer,
      hoverBorderColor: designTokens.colors.secondary,
    },
    Card: {
      borderRadiusLG: 8,
      colorBorderSecondary: designTokens.colors.border,
    },
    Table: {
      borderRadius: 6,
      headerBg: designTokens.colors.surfaceContainerLow,
      headerColor: designTokens.colors.textPrimary,
      borderColor: designTokens.colors.border,
    },
    Menu: {
      itemBorderRadius: 4,
      itemSelectedBg: designTokens.colors.secondaryContainer,
      itemSelectedColor: designTokens.colors.primaryContainer,
    },
    Layout: {
      headerBg: designTokens.colors.surface,
      siderBg: designTokens.colors.surface,
      bodyBg: designTokens.colors.background,
    },
    Modal: {
      borderRadiusLG: 8,
      headerBg: designTokens.colors.surface,
    },
  },
};
