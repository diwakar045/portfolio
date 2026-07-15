import React, { useState } from 'react';
import GridCell from './components/GridCell';
import { playBeep } from './utils/audio';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#0F1113] text-[#F5F3EF] font-sans overflow-x-hidden">
      
      {/* Mobile Top Sheet Menu */}
      <div 
        className={`fixed inset-x-0 top-0 z-50 bg-[#0F1113] border-b border-dashed border-[#313334] transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Matches the grid header exactly to keep alignment seamless */}
        <div className="w-full grid grid-cols-[1rem_1fr_1fr_1rem] auto-rows-min">
          <div className="h-10 col-span-4" /> {/* Spacer */}
          <div />
          <div className="flex items-center">
            <h1 className="text-sm font-mono font-semibold tracking-[-0.02em] text-[#BDB7B0] opacity-[0.74] uppercase">
              Diwakar Dubey
            </h1>
          </div>
          <div className="flex items-center justify-end pr-0">
            <button 
              onClick={() => {
                playBeep();
                setIsMobileMenuOpen(false);
              }}
              className="text-[#BDB7B0] hover:text-[#F5F3EF] p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div />
        </div>
        
        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center pb-12 pt-8 gap-8">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-mono text-[#F5F3EF] hover:underline transition-all uppercase tracking-wider">Resume</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-mono text-[#F5F3EF] hover:underline transition-all uppercase tracking-wider">Projects</a>
          <a href="https://www.linkedin.com/in/diwakar-dubey045/" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-mono text-[#F5F3EF] hover:underline transition-all uppercase tracking-wider">Linkedin</a>
        </div>
      </div>

      {/* Absolute Vertical Dashed Lines (Always visible) */}
      <div className="absolute inset-y-0 left-0 w-full flex justify-center pointer-events-none z-0">
        <div className="w-full md:w-[800px] h-full relative px-4 md:px-0">
           <div className="absolute inset-y-0 left-4 md:left-0 w-px border-l border-dashed border-[#313334]"></div>
           <div className="absolute inset-y-0 left-1/2 w-px border-l border-dashed border-[#313334]"></div>
           <div className="absolute inset-y-0 right-4 md:right-0 w-px border-l border-dashed border-[#313334]"></div>
        </div>
      </div>

      {/* 
        Main 100vw Grid Container: 
        4 columns: 1fr | 400px | 400px | 1fr
        Content sits entirely in the middle two 400px columns.
      */}
      <div className="relative z-10 w-full grid grid-cols-[1rem_1fr_1fr_1rem] md:grid-cols-[1fr_400px_400px_1fr] auto-rows-min border-t border-dashed border-[#313334]">
        {/* --- ROW 0: Top Spacer --- */}
        <GridCell interactive={false} className="h-10" />
        <GridCell interactive={false} className="h-10" />
        <GridCell interactive={false} className="h-10" />
        <GridCell interactive={false} className="h-10" />

        {/* --- ROW 1: Header --- */}
        <GridCell interactive={false} />
        <GridCell className="flex items-center">
          <h1 className="text-sm font-mono font-semibold tracking-[-0.02em] text-[#BDB7B0] opacity-[0.74] uppercase">
            Diwakar Dubey
          </h1>
        </GridCell>
        <GridCell>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-end gap-12 w-full pr-4">
            <a href="#" className="text-[10px] font-mono text-[#BDB7B0] hover:underline transition-all uppercase tracking-wider relative z-20 px-4 py-2">Resume</a>
            <a href="#projects" className="text-[10px] font-mono text-[#BDB7B0] hover:underline transition-all uppercase tracking-wider relative z-20 px-4 py-2">Projects</a>
            <a href="https://www.linkedin.com/in/diwakar-dubey045/" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-[#BDB7B0] hover:underline transition-all uppercase tracking-wider relative z-20 px-4 py-2">Linkedin</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center justify-end w-full pr-0">
            <button 
              onClick={() => {
                playBeep();
                setIsMobileMenuOpen(true);
              }}
              className="text-[#BDB7B0] hover:text-[#F5F3EF] p-2 relative z-20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </GridCell>
        <GridCell interactive={false} />

        {/* --- ROW 2: Spacer --- */}
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />

        {/* --- ROW 3: Photo & Stats --- */}
        <GridCell interactive={false} />
        
        {/* Photo Atom */}
        <GridCell className="flex items-center relative">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border border-[#313334] flex items-center justify-center bg-[#1A1D21]">
            <img src="/profile.jpg" alt="Diwakar Dubey" className="w-full h-full object-cover" />
          </div>
        </GridCell>

        {/* Empty Cell where Stats Widget used to be */}
        <GridCell interactive={false} />
        
        <GridCell interactive={false} />

        {/* --- ROW 4: Heading Atom --- */}
        <GridCell interactive={false} />
        <GridCell className="col-span-2 flex items-center min-h-40 py-8 md:py-0">
          <h2 className="text-2xl md:text-[32px] font-sans text-[#F5F3EF] leading-tight font-semibold tracking-[-0.02em]">
            Product Builder.<br />
            Driven by curiosity, grounded by users.
          </h2>
        </GridCell>
        <GridCell interactive={false} />

        {/* --- ROW 5: Combined Content --- */}
        <GridCell interactive={false} />
        <GridCell className="col-span-2 text-[#BDB7B0] font-sans text-base leading-relaxed font-medium flex flex-col justify-center gap-6 py-7">
          <p>
            I am currently a final year student at IIIT Gwalior with CS background, and a Product Intern at Keploy. My shift toward product came from a growing interest in the why behind decisions, not just the execution.
          </p>
          <p>
            I combine my technical foundation with a thoughtful design perspective to build more meaningful user experiences.
          </p>
          <p>
            Instinctive design skills, strong product sense and ability to ship, that's how you can recognize me.
          </p>
        </GridCell>
        <GridCell interactive={false} />

        {/* --- ROW 6: Spacer --- */}
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />

        {/* --- ROW 7: Projects Header --- */}
        <GridCell interactive={false} />
        <GridCell className="col-span-2 flex items-center h-8">
          <h3 id="projects" className="text-sm font-mono font-semibold tracking-[-0.02em] text-[#BDB7B0] opacity-[0.74] uppercase scroll-mt-24">Projects</h3>
        </GridCell>
        <GridCell interactive={false} />

        {/* --- ROW 8: Projects Content (Both projects in one cell) --- */}
        <GridCell interactive={false} />
        <GridCell interactive={false} className="col-span-2 py-11 px-1">
          <div className="flex flex-col gap-9 w-full">
            {/* Project 1 Sub-cell */}
            <a 
              href="https://www.figma.com/deck/q1awGtrWIFbjam9QhDTXGE"
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col cursor-pointer"
              onMouseEnter={() => playBeep()}
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-10 transition-colors duration-150 pointer-events-none" />
              
              <div className="w-full aspect-[800/440] bg-[#1A1D21] flex items-center justify-center mt-1 relative z-0 overflow-hidden rounded-lg">
                <img src="/project1.png" alt="How I fixed the run test drop-off rates at Keploy!" className="w-full h-full object-cover" />
              </div>
              <div className="py-3 px-0 md:px-3 relative z-0 flex flex-col md:flex-row md:items-center justify-between items-start gap-2 md:gap-0">
                <h4 className="text-[20px] text-[#F5F3EF] font-sans font-semibold md:pr-4 w-full md:w-auto">How I fixed the run test drop-off rates at Keploy!</h4>
                <span className="text-sm font-sans text-[#F5F3EF] opacity-100 md:opacity-0 md:group-hover:opacity-100 group-hover:underline flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0">
                  View case study 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Project 2 Sub-cell */}
            <a 
              href="https://www.figma.com/design/AFmSvFMfWDJZHaNeV3MHdu/Summer-of-Bitcoin?node-id=0-1&p=f&t=OgNDLrGf1dX2vrwG-0"
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col cursor-pointer"
              onMouseEnter={() => playBeep()}
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-10 transition-colors duration-150 pointer-events-none" />

              <div className="w-full aspect-[800/440] bg-[#1A1D21] flex items-center justify-center mt-2 relative z-0 overflow-hidden rounded-lg">
                <img src="/project2.png" alt="How I enhanced the first recieve request experience of a new Bitcoin user." className="w-full h-full object-cover" />
              </div>
              <div className="py-3 px-0 md:px-3 relative z-0 flex flex-col md:flex-row md:items-center justify-between items-start gap-2 md:gap-0">
                <h4 className="text-[20px] text-[#F5F3EF] font-sans font-semibold md:pr-4 w-full md:w-auto">How I enhanced the first recieve request experience of a new Bitcoin user.</h4>
                <span className="text-sm font-sans text-[#F5F3EF] opacity-100 md:opacity-0 md:group-hover:opacity-100 group-hover:underline flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0">
                  View case study 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </GridCell>
        <GridCell interactive={false} />

        {/* --- ROW 9: Spacer --- */}
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />

        {/* --- ROW 9: Experience Header --- */}
        <GridCell interactive={false} />
        <GridCell className="col-span-2 flex items-center h-8">
          <h3 className="text-sm font-mono font-semibold tracking-[-0.02em] text-[#BDB7B0] opacity-[0.74] uppercase">Experience</h3>
        </GridCell>
        <GridCell interactive={false} />
        
        {/* --- ROW 10: Experience Content --- */}
        <GridCell interactive={false} />
        <GridCell interactive={false} className="col-span-2 pt-8">
          <div className="flex flex-col w-full divide-y divide-dashed divide-[#313334]">
            {/* Experience 1 */}
            <div 
              className="group relative flex flex-col justify-center cursor-pointer py-3 px-0.5"
              onMouseEnter={() => playBeep()}
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-10 transition-colors duration-150 pointer-events-none" />
              
              {/* Desktop View */}
              <div className="hidden md:flex items-center justify-between w-full relative z-10">
                <div className="flex-1 flex items-center gap-3">
                  <img src="/KeployLogo.png" alt="Keploy" className="w-[26px] h-[26px] object-contain" />
                  <span className="text-[#F5F3EF] font-sans font-medium text-base">Keploy</span>
                </div>
                <div className="flex-1 text-left text-[#BDB7B0] font-sans text-base">Product Intern</div>
                <div className="flex-1 text-right text-[#BDB7B0] font-sans text-sm opacity-60">July 2025-Present</div>
              </div>

              {/* Mobile View */}
              <div className="flex md:hidden items-center justify-between w-full relative z-10">
                <div className="flex items-center gap-1 shrink-0 mr-2">
                  <img src="/KeployLogo.png" alt="Keploy" className="w-[26px] h-[26px] object-contain" />
                  <span className="text-[#F5F3EF] font-sans font-medium text-base">Keploy</span>
                </div>
                <div className="text-right text-[#BDB7B0] font-sans text-xs">
                  Product Intern <span className="opacity-60">(07/25-Present)</span>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div 
              className="group relative flex flex-col justify-center cursor-pointer py-3 px-0.5"
              onMouseEnter={() => playBeep()}
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-10 transition-colors duration-150 pointer-events-none" />
              
              {/* Desktop View */}
              <div className="hidden md:flex items-center justify-between w-full relative z-10">
                <div className="flex-1 flex items-center gap-3">
                  <img src="/NetlarXlogo.png" alt="NetlarX" className="w-[26px] h-[26px] object-contain" />
                  <span className="text-[#F5F3EF] font-sans font-medium text-base">NetlarX</span>
                </div>
                <div className="flex-1 text-left text-[#BDB7B0] font-sans text-base">Product Design Intern</div>
                <div className="flex-1 text-right text-[#BDB7B0] font-sans text-sm opacity-60">March 2025-May 2025</div>
              </div>

              {/* Mobile View */}
              <div className="flex md:hidden items-center justify-between w-full relative z-10">
                <div className="flex items-center gap-1 shrink-0 mr-2">
                  <img src="/NetlarXlogo.png" alt="NetlarX" className="w-[26px] h-[26px] object-contain" />
                  <span className="text-[#F5F3EF] font-sans font-medium text-base">NetlarX</span>
                </div>
                <div className="text-right text-[#BDB7B0] font-sans text-xs flex flex-col items-end">
                  Product Design Intern <span className="opacity-60">(03/25-05/25)</span>
                </div>
              </div>
            </div>
          </div>
        </GridCell>
        <GridCell interactive={false} />

        {/* --- ROW 11: Spacer (before Passion Projects) --- */}
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />

        {/* --- ROW 12: Passion Projects Header --- */}
        <GridCell interactive={false} />
        <GridCell className="col-span-2 flex items-center h-8">
          <h3 className="text-sm font-mono font-semibold tracking-[-0.02em] text-[#BDB7B0] opacity-[0.74] uppercase">Passion Projects</h3>
        </GridCell>
        <GridCell interactive={false} />
        
        {/* --- ROW 13: Passion Projects Content --- */}
        <GridCell interactive={false} />
        <GridCell interactive={false} className="col-span-2 pt-8">
          <div className="flex flex-col w-full gap-1">
            {/* Passion Project 1 */}
            <a 
              href="https://kharccha.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="group relative grid grid-cols-1 md:grid-cols-[240px_1fr] cursor-pointer p-2 gap-4 md:gap-8"
              onMouseEnter={() => playBeep()}
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-10 transition-colors duration-150 pointer-events-none" />
              
              <div className="w-full aspect-video md:h-[120px] md:aspect-auto rounded-lg bg-[#1A1D21] flex items-center justify-center relative z-10 overflow-hidden">
                <img src="/kharcha_project.png" alt="Kharcha Project" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center relative z-10">
                <h4 className="text-lg text-[#F5F3EF] font-sans font-semibold mb-1">Kharcha: Your swiggy expense tracker</h4>
                <p className="text-[#BDB7B0] font-sans text-sm leading-relaxed pr-8">
                  I built a chrome extension and a dashboard using AI tools which tracks your food spending for swiggy orders.
                </p>
                <span className="text-sm font-sans text-[#F5F3EF] mt-3 opacity-100 md:opacity-60 md:group-hover:opacity-100 group-hover:underline flex items-center gap-1.5 transition-all w-fit">
                  View Project 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Passion Project 2 */}
            <a 
              href="https://harmoniq-key.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group relative grid grid-cols-1 md:grid-cols-[240px_1fr] cursor-pointer p-2 gap-4 md:gap-8"
              onMouseEnter={() => playBeep()}
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-10 transition-colors duration-150 pointer-events-none" />
              
              <div className="w-full aspect-video md:h-[120px] md:aspect-auto rounded-lg bg-[#1A1D21] flex items-center justify-center relative z-10 overflow-hidden">
                <img src="/harmoniq_project.png" alt="Harmoniq Project" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center relative z-10">
                <h4 className="text-lg text-[#F5F3EF] font-sans font-semibold mb-1">Harmoniq: Piano and Harmonium on your fingetips</h4>
                <p className="text-[#BDB7B0] font-sans text-sm leading-relaxed pr-8">
                  I built a piano/harmonium simulator that works with your keyboard.
                </p>
                <span className="text-sm font-sans text-[#F5F3EF] mt-3 opacity-100 md:opacity-60 md:group-hover:opacity-100 group-hover:underline flex items-center gap-1.5 transition-all w-fit">
                  View Project 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </GridCell>
        <GridCell interactive={false} />

        {/* --- ROW 14: Spacer --- */}
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />

        {/* --- ROW 15: Design Works Header --- */}
        <GridCell interactive={false} />
        <GridCell className="col-span-2 flex items-center h-8">
          <h3 className="text-sm font-mono font-semibold tracking-[-0.02em] text-[#BDB7B0] opacity-[0.74] uppercase">Design Works</h3>
        </GridCell>
        <GridCell interactive={false} />

        {/* --- ROW 16: Design Works Content --- */}
        <GridCell interactive={false} />
        <GridCell interactive={false} className="col-span-2 pt-8">
          <div className="flex flex-col w-full">
            {/* Paragraph */}
            <p className="text-sm font-sans text-[#BDB7B0] leading-relaxed mb-8 px-1">
              I’ve been deeply engaged in design for years and have experience working as a Product Designer. My product skills have consistently complemented my design practice, enhancing how I approach problem-solving
            </p>

            {/* Design Grid */}
            <div className="grid grid-cols-2 gap-4 w-full px-1">
              {/* Full Width 1 */}
              <div 
                className="col-span-2 group relative cursor-pointer w-full aspect-[800/433] flex items-center justify-center"
                onMouseEnter={() => playBeep()}
              >
                <div className="absolute -inset-2 rounded-xl border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-20 transition-colors duration-150 pointer-events-none" />
                <img src="/design1.png" alt="Design 1" className="w-full h-full object-cover rounded-lg bg-[#1A1D21] relative z-10" />
              </div>
              
              {/* Half Width 1 */}
              <div 
                className="col-span-2 md:col-span-1 group relative cursor-pointer w-full aspect-[392/264] flex items-center justify-center"
                onMouseEnter={() => playBeep()}
              >
                <div className="absolute -inset-2 rounded-xl border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-20 transition-colors duration-150 pointer-events-none" />
                <img src="/design2.png" alt="Design 2" className="w-full h-full object-cover rounded-lg bg-[#1A1D21] relative z-10" />
              </div>

              {/* Half Width 2 */}
              <div 
                className="col-span-2 md:col-span-1 group relative cursor-pointer w-full aspect-[392/264] flex items-center justify-center"
                onMouseEnter={() => playBeep()}
              >
                <div className="absolute -inset-2 rounded-xl border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-20 transition-colors duration-150 pointer-events-none" />
                <img src="/design3.png" alt="Design 3" className="w-full h-full object-cover rounded-lg bg-[#1A1D21] relative z-10" />
              </div>

              {/* Full Width 2 */}
              <div 
                className="col-span-2 group relative cursor-pointer w-full aspect-[800/433] flex items-center justify-center"
                onMouseEnter={() => playBeep()}
              >
                <div className="absolute -inset-2 rounded-xl border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-20 transition-colors duration-150 pointer-events-none" />
                <img src="/design4.png" alt="Design 4" className="w-full h-full object-cover rounded-lg bg-[#1A1D21] relative z-10" />
              </div>

              {/* Half Width 3 */}
              <div 
                className="col-span-2 md:col-span-1 group relative cursor-pointer w-full aspect-[392/264] flex items-center justify-center"
                onMouseEnter={() => playBeep()}
              >
                <div className="absolute -inset-2 rounded-xl border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-20 transition-colors duration-150 pointer-events-none" />
                <img src="/design5.png" alt="Design 5" className="w-full h-full object-cover rounded-lg bg-[#1A1D21] relative z-10" />
              </div>

              {/* Half Width 4 */}
              <div 
                className="col-span-2 md:col-span-1 group relative cursor-pointer w-full aspect-[392/264] flex items-center justify-center"
                onMouseEnter={() => playBeep()}
              >
                <div className="absolute -inset-2 rounded-xl border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-20 transition-colors duration-150 pointer-events-none" />
                <img src="/design6.png" alt="Design 6" className="w-full h-full object-cover rounded-lg bg-[#1A1D21] relative z-10" />
              </div>
            </div>
          </div>
        </GridCell>
        <GridCell interactive={false} />

        {/* --- ROW 17: Spacer (before Footer) --- */}
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />
        <GridCell interactive={false} className="h-16 md:h-[104px]" />

        {/* --- ROW 18: Footer --- */}
        <GridCell interactive={false} />
        <GridCell interactive={false} className="col-span-2 border-t border-solid border-[#616263] relative z-10 px-0">
          <div 
            className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 group relative cursor-pointer pt-[28px] pb-[56px]"
            onMouseEnter={() => playBeep()}
          >
            <div className="absolute inset-0 border border-transparent group-hover:border-[#455283] group-hover:border-solid group-hover:bg-[#455283]/[0.02] group-hover:z-10 transition-colors duration-150 pointer-events-none" />
            
            <span className="text-sm font-sans text-[#BDB7B0] relative z-10">DiwakarDubey</span>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-6 relative z-10">
              <a href="https://medium.com/@diwakar045" target="_blank" rel="noreferrer" className="text-sm font-sans text-[#BDB7B0] hover:text-[#F5F3EF] border-b border-[#313334] hover:border-[#F5F3EF] transition-colors pb-0.5">Medium</a>
              <a href="https://github.com/diwakar045" target="_blank" rel="noreferrer" className="text-sm font-sans text-[#BDB7B0] hover:text-[#F5F3EF] border-b border-[#313334] hover:border-[#F5F3EF] transition-colors pb-0.5">Github</a>
              <a href="https://www.linkedin.com/in/diwakar-dubey045/" target="_blank" rel="noreferrer" className="text-sm font-sans text-[#BDB7B0] hover:text-[#F5F3EF] border-b border-[#313334] hover:border-[#F5F3EF] transition-colors pb-0.5">LinkedIn</a>
            </div>
          </div>
        </GridCell>
        <GridCell interactive={false} />

      </div>
    </div>
  );
}

export default App;
