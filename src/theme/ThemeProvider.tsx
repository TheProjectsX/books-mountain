'use client';

import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, App } from 'antd';
import { antdTheme } from './antdTheme';
import { LanguageProvider } from '@/dictionary/LanguageContext';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>
        <App>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
