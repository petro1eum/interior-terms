

# Interior Terms Matrix

## The Problem

In the interior design world, there's a constant headache: nobody fucking knows who's responsible for what. This leads to:
- Endless disputes between designers and clients
- Blown budgets due to "unexpected" work
- Missed deadlines because "we thought you were doing that"
- Ruined relationships and legal battles
- Mental breakdowns for everyone involved

## What This Tool Does

Imagine a matrix where one axis shows all project stages and the other shows all types of work. Each cell clearly indicates:
- Who's specifically responsible (Designer or Client)
- What's included in the scope
- What's explicitly NOT included
- What risks might pop up
- How long it typically takes

## How It Works

### 1. Project Stages (Left to Right)

#### Basic Design (EBD → EPD → EFD)
- **EBD (Ex Basic Design)**
  - Layout solutions
  - 3D visualizations
  - Design concept
  - Basic specifications

- **EPD (Ex Project Design)**
  - Everything in EBD +
  - Full set of drawings
  - Wall elevations
  - Material layouts
  - Details and nodes

- **EFD (Ex Full Design)**
  - Everything in EPD +
  - Detailed specifications
  - Material schedules
  - Equipment selection
  - Implementation guidelines

#### Implementation Support (FCA → FCS → FCM)
- **FCA (Free Construction Assistance)**
  - Material consultations
  - Contractor selection help
  - Technical Q&A
  - Basic recommendations

- **FCS (Free Construction Supervision)**
  - Everything in FCA +
  - Regular site visits
  - Project compliance control
  - Solution adjustments
  - Technical supervision

- **FCM (Free Construction Management)**
  - Everything in FCS +
  - Full project management
  - Contractor coordination
  - Budget control
  - Timeline management

#### Construction (CBO → CPT → CIP)
- **CBO (Construction Basic Organization)**
  - Construction site setup
  - Basic construction works
  - Rough finishing
  - Engineering prep

- **CPT (Construction Project Team)**
  - Everything in CBO +
  - Full construction team
  - Engineering systems
  - Finish preparation
  - Quality control

- **CIP (Construction Insurance Project)**
  - Everything in CPT +
  - Work insurance
  - Warranty obligations
  - Liability insurance
  - Risk protection

#### Implementation (DAP → DFU → DFP)
- **DAP (Delivered At Project)**
  - Implementation until finishing
  - All rough works
  - Engineering systems
  - Finishing preparation

- **DFU (Delivered Fully Unfurnished)**
  - Everything in DAP +
  - Final finishing
  - Equipment installation
  - Final works
  - No furniture

- **DFP (Delivered Fully Project)**
  - Everything in DFU +
  - Furniture
  - Decoration
  - Textiles
  - Accessories
  - Full readiness

### 2. Responsibility Areas (Top to Bottom)

#### Design
- Measurements and analysis
- Layout solutions
- 3D visualizations
- Working documentation
- Specifications

#### Materials
- Material selection
- Quantity calculations
- Availability check
- Quality control
- Logistics

#### Construction
- Preparatory works
- Demolition
- Rough works
- Engineering systems
- Finish works

#### Management
- Contractor selection
- Work coordination
- Timeline control
- Budget management
- Problem solving

### 3. Interactive Features

#### Detail Modals
Click any matrix cell to see:
- Exact scope of work
- What's in/out
- Responsibility zones
- Implementation timelines
- Possible risks
- Recommendations

#### Color Coding
- 🟢 Green = Designer's responsibility
- ⚪ Gray = Client's responsibility
- 🔵 Blue = Basic design
- 🟣 Purple = Implementation support
- 🟡 Yellow = Construction
- 🟠 Orange = Implementation

#### Risk Assessment
For each stage:
- Technical risks
- Management risks
- Financial risks
- Legal risks
- Mitigation recommendations

## Technical Stack

### Frontend
- **Framework**: React 18+
- **Styling**: Tailwind CSS
- **Icons**: Lucide
- **Build**: Vite
- **Formatting**: Prettier
- **Linting**: ESLint

### Project Structure

src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── stages/         # Stage-specific components
├── data/               # Data and configuration
│   └── stages/         # Stage information
└── styles/             # Styles and constants

### Performance
- Lazy-loaded modals
- Heavy computation memoization
- Re-render optimization
- Data caching

## Development Plans

### Upcoming Updates
1. Multi-language Support
   - Russian
   - English
   - Chinese
   - Arabic

2. Data Export
   - PDF reports
   - Excel sheets
   - Presentations
   - Documentation

3. Integrations
   - CRM systems
   - Project management
   - Document flow
   - Accounting

### Long-term Plans
1. Mobile app
2. Integration API
3. Online matrix editor
4. Template system

## Contributing

Want to help? Great!
1. Fork the repo
2. Create a feature branch
3. Make changes
4. Submit a pull request

## License

MIT - use it however you want, even in production.

## Contact

Questions? Ideas? Problems?
- Create an issue
- Write in discussions
- Or contact directly

## Credits

Thanks to everyone who helped with development and testing!
