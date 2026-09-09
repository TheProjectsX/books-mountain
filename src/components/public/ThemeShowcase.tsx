import React from 'react';
import { designTokens } from '@/theme/designTokens';

export function ThemeShowcase() {
  const colorItems = [
    { label: 'Primary', value: designTokens.colors.primary, bgClass: 'bg-primary', textClass: 'text-on-primary' },
    { label: 'Primary Container', value: designTokens.colors.primaryContainer, bgClass: 'bg-primary-container', textClass: 'text-on-primary' },
    { label: 'Secondary', value: designTokens.colors.secondary, bgClass: 'bg-secondary', textClass: 'text-on-secondary' },
    { label: 'Accent / Coral', value: designTokens.colors.accent, bgClass: 'bg-accent', textClass: 'text-white' },
    { label: 'Surface', value: designTokens.colors.surface, bgClass: 'bg-surface', textClass: 'text-text-primary', bordered: true },
    { label: 'Background', value: designTokens.colors.background, bgClass: 'bg-background', textClass: 'text-text-primary', bordered: true },
    { label: 'Border', value: designTokens.colors.border, bgClass: 'bg-border', textClass: 'text-text-primary' },
    { label: 'Error', value: designTokens.colors.error, bgClass: 'bg-error', textClass: 'text-white' },
    { label: 'Success', value: designTokens.colors.success, bgClass: 'bg-success', textClass: 'text-white' },
  ];

  return (
    <section id="theme-tokens" className="py-12 border-t border-border mt-12">
      <div className="flex flex-col mb-8">
        <span className="font-label text-xs uppercase tracking-widest text-text-secondary">
          Architecture Verification
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mt-1">
          Active Theme Tokens (from DESIGN.md)
        </h2>
        <p className="text-sm text-text-secondary mt-1 max-w-2xl">
          This neutral starter applies design tokens to both Tailwind utility classes and Ant Design components via CSS variables and typed TypeScript mappings.
        </p>
      </div>

      {/* Color Swatches */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {colorItems.map((color) => (
          <div
            key={color.label}
            className={`p-3 rounded-md border ${
              color.bordered ? 'border-border' : 'border-transparent'
            } ${color.bgClass} flex flex-col justify-between h-24 shadow-xs`}
          >
            <span className={`text-xs font-semibold ${color.textClass}`}>
              {color.label}
            </span>
            <span className={`text-[11px] font-mono opacity-90 ${color.textClass}`}>
              {color.value}
            </span>
          </div>
        ))}
      </div>

      {/* Typography and Geometry Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Typography */}
        <div className="bg-surface p-6 rounded-lg border border-border">
          <span className="font-label text-xs uppercase tracking-wider text-text-secondary">
            Typography System
          </span>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-xs text-text-secondary font-mono">Heading Font: Public Sans (700 / 600)</p>
              <h3 className="font-heading text-xl font-bold text-text-primary">
                The Literary Precision Headline
              </h3>
            </div>
            <div>
              <p className="text-xs text-text-secondary font-mono">Body Font: Public Sans (400)</p>
              <p className="font-body text-sm text-text-primary">
                Books Mountain is a modular starter designed for rapid rebranding. Changing tokens in <code className="text-xs bg-surface-container px-1 py-0.5 rounded-sm">src/theme/designTokens.ts</code> automatically restyles all UI layers.
              </p>
            </div>
            <div>
              <p className="text-xs text-text-secondary font-mono">Meta / Button Font: Space Grotesk (Uppercase)</p>
              <span className="font-label text-xs text-secondary tracking-widest uppercase">
                CATEGORY: CONTEMPORARY ARCHITECTURE • 2026 EDITION
              </span>
            </div>
          </div>
        </div>

        {/* Geometry & Radii */}
        <div className="bg-surface p-6 rounded-lg border border-border">
          <span className="font-label text-xs uppercase tracking-wider text-text-secondary">
            Geometry & Shapes
          </span>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-secondary">Soft Radius (Buttons & Inputs):</span>
              <span className="px-3 py-1 bg-surface-container rounded-sm border border-border text-xs font-mono">
                rounded-sm (4px)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-secondary">Medium Radius (Cards & Modals):</span>
              <span className="px-3 py-1 bg-surface-container rounded-lg border border-border text-xs font-mono">
                rounded-lg (8px)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-secondary">Pill / Tag Radius:</span>
              <span className="px-3 py-1 bg-surface-container rounded-full border border-border text-xs font-mono">
                rounded-full (9999px)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-secondary">Rhythm Baseline:</span>
              <span className="px-3 py-1 bg-surface-container rounded-sm border border-border text-xs font-mono">
                8px Grid / 16px Gutters
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
