# React Multi-Level Navigation Menu

A modern, responsive navigation menu component with cascading mega menu for desktop and multi-level accordion for mobile devices.

## Features

### Desktop Navigation

- **4-Panel Cascading Mega Menu**: Progressive hover-based navigation
  - Static promotional panel
  - Submenu items panel
  - Subcategories panel
  - Final items panel
- Smooth hover transitions and visual feedback
- Dynamic content loading from JSON data

### Mobile Navigation

- **5-Level Accordion Menu**: Touch-friendly collapsible navigation
  - Slide-in panel from right
  - Expandable/collapsible sections at each level
  - Smooth animations
  - Click outside to close
- Hamburger menu toggle
- Responsive breakpoints (lg: 1024px)

### Data-Driven

- Centralized navigation data in JSON format
- Automatic filtering by status
- Sorted by index for consistent ordering
- Supports unlimited nesting levels

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library (Feather Icons)

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Main navigation component
│   ├── MegaMenu.jsx        # Desktop mega menu
│   └── MobileMenu.jsx      # Mobile accordion menu
├── hooks/
│   └── useNavbar.js        # Data transformation hook
├── data/
│   └── navbarData.json     # Navigation menu data
└── main.jsx
```

## Data Structure

The navigation data follows a 4-level hierarchy:

```json
{
  "name": "Services",
  "submenu": [
    {
      "name": "Web & Software Development",
      "subcategories": [
        {
          "name": "Business & Enterprise",
          "items": [{ "name": "ERP Software", "slug": "erp-software" }]
        }
      ]
    }
  ]
}
```

## Customization

### Styling

- Modify Tailwind classes in component files
- Adjust breakpoints for responsive behavior

### Data

- Edit `src/data/navbarData.json` to update menu items
- Add/remove levels as needed
- Set `status: false` to hide items

### Layout

- Adjust column spans in MegaMenu.jsx for desktop layout
- Modify panel widths in MobileMenu.jsx for mobile layout

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
