import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';
import { NavLink } from 'react-router-dom';



/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
    window.open('https://www.humanrightsfirst.org', '_blank')
  };

 return (
  <div className="flex flex-col mt-20 w-full">
    <div className="flex flex-row justify-between items-start w-full max-w-[1400px] mx-auto px-4">
      {/* Box 1 - Left */}
      <div className="flex flex-col items-center py-6 w-1/3">
        <img src={barGraph} className="h-80" />
        <h2 className="text-2xl mt-6">Search Grant Rates By Office</h2>
      </div>

      {/* Box 2 - Center */}
      <div className="flex flex-col items-center py-10 w-1/3">
        <img src={pieChart} className="h-80" />
        <h2 className="text-2xl mt-6">Search Grant Rates By Nationality</h2>
      </div>

      
      <div className="flex flex-col items-center py-6 w-1/3">
        <img src={lineGraph} className="h-70" />
        <h2 className="text-2xl mt-6">Search Grant Rates Over Time</h2>
      </div>
    </div>



<div className="flex flex-row justify-center mt-10 gap-6">
  <NavLink
    to="/graphs"
    className="px-3 py-1.5 bg-gray-300 text-white font-semibold rounded-none hover:bg-gray-400 transition flex items-center justify-center"
  >
    View The Data
  </NavLink>

  <button
    onClick={downloadCSV}
    className="px-3 py-1.5 bg-gray-300 text-white font-semibold rounded-none hover:bg-gray-400 transition"
  >
    Download The Data
  </button>
</div>






<div className="flex flex-col lg:flex-row justify-center items-center mt-16 w-full px-10 gap-32 max-w-[1400px] mx-auto">
  <img
    src={paperStack}
    className="w-[700px] max-h-80 rounded-xl object-cover"
  />
  <h2 className="text-xl lg:text-xl leading-relaxed text-left max-w-xl">
    Human Rights First has created a search tool to give you a user-friendly way
    to explore a data set of asylum decisions between FY 2016 and May 2021 by the
    USCIS Asylum Office, which we received through a Freedom of Information Act
    request. You can search for information on asylum grant rates by year,
    nationality, and asylum office, visualize the data with charts and heat maps,
    and download the data set.
  </h2>
</div>

    <h2 className='text-5xl mt-30'>
      Systemic Disparity Insights
    </h2>

<div className="flex flex-row justify-between items-start w-full px-12 mt-16">
  {/* Box 1 */}
  <div className="flex flex-col w-96 text-center">
    <h2 className="text-4xl mb-4">36%</h2>
    <h2 className="text-lg leading-relaxed">
      By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.
    </h2>
  </div>

  {/* Box 2 */}
  <div className="flex flex-col w-96 text-center">
    <h2 className="text-4xl mb-4">5%</h2>
    <h2 className="text-lg leading-relaxed">
      The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
    </h2>
  </div>

  {/* Box 3 */}
  <div className="flex flex-col w-96 text-center">
    <h2 className="text-4xl mb-4">6x Lower</h2>
    <h2 className="text-lg leading-relaxed">
      Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
    </h2>
  </div>
</div>

<div className="mt-20 mb-20">
  <a 
    href="https://humanrightsfirst.org/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="bg-[#6B705C] text-white px-4 py-2 text-base 
                       rounded-none border border-[#6B705C] 
                       hover:bg-[#5A5F4C] transition">
      Read More
    </button>
  </a>
  <div className="mt-20 text-lg text-black cursor-pointer hover:text-gray-900"
       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    Back To Top ^
  </div>
</div>








  </div>
    
    // <div className='flex-c w-[100vw] secondary-c'>
    //   Landing Page
    //   <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div>
  );
};
