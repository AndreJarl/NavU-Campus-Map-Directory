# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🚀 SVG Performance Guide for Raspberry Pi

## 🚫 **AVOID THESE** (Cause Lag)

### ❌ **Complex Paths**
- Paths with hundreds of points
- Text converted to paths
- Many curve commands (C, Q, A)
- Detailed artwork as paths

### ❌ **Filters & Effects**
- Drop shadows, blurs, glows
- Complex masks
- Gradient fills
- Patterns

### ❌ **Transparency & Blending**
- Multiple opacity layers
- Stroke with opacity
- Complex color mixing

## ✅ **USE THESE** (Good Performance)

### ✅ **Simple Shapes**
- Rectangles, circles, lines
- Basic polygons
- Straight paths (L commands)
- Minimal curves

### ✅ **SVG Text Elements**
```xml
<text x="100" y="100" font-size="12">Label</text>
<text x="100" y="115" font-size="12">Line 2</text>
```

### ✅ **Solid Colors**
- Simple fill colors
- No gradients
- No transparency effects

### ✅ **Minimal Styling**
- Basic strokes only
- No special line caps/joins
- Simple fill rules

## 🎯 **Quick Checklist**

**REMOVE:**
- All `<filter>` elements
- All `<mask>` elements  
- All `<pattern>` elements
- Complex `<path>` with many points
- `stroke-opacity`, `fill-opacity`
- `stroke-linecap="round"`

**KEEP:**
- `<rect>`, `<circle>`, `<line>`
- `<text>` elements
- Simple `<path>` with straight lines
- Solid colors only

## 💡 **Key Rule**
**Complexity causes lag, not quantity.**  
1000 simple shapes = ✅ Good  
1 complex path = ❌ Laggy