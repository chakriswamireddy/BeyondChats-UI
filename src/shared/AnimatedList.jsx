import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, memo } from "react";

function AnimatedListItem({ children, index }) {

  const [isLinkHover, setIsLinkHover] = useState(false)
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, originY: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 40 }}
      layout
      className="mx-auto w-full flex border border-gray-300  py-4 px-4 shadow-xl rounded-lg gap-3 justify-center"
    >

      {/* <img src="" alt="" /> */}
      <div className="bg-blue-400 items-self-center h-max my-auto p-1 rounded-xl">

        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24">
          <g fill="#ffff">
            <path d="M7.665 10.237L9.198 8.95l1.285 1.532l3.064-2.571l1.286 1.532l-4.596 3.857z" />
            <path fill-rule="evenodd" d="M16.207 4.893a8 8 0 0 1 .662 10.565q.023.02.045.042l4.243 4.243a1 1 0 0 1-1.414 1.414L15.5 16.914l-.042-.045A8.001 8.001 0 0 1 4.893 4.893a8 8 0 0 1 11.314 0m-1.414 9.9a6 6 0 1 0-8.485-8.485a6 6 0 0 0 8.485 8.485" clip-rule="evenodd" />
          </g>
        </svg>
      </div>

      <div className="flex items-start gap-2 ">
        <div >

          <p className=" text-[11px] sm:text-sm" >Page Fetched</p>
          <p className=" text-sm sm:text-md font-medium">{children.includes("disclosure") ? "Disclosures" : children.slice(0, 1).toUpperCase() + children.slice(1)}</p>
        </div>

        {children.includes('n') ?
          <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-[8px] sm:text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">Scraped</span>

          :

          <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-[8px] sm:text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">Pending</span>
        }


      </div>

      <a href={`https://www.realme.com/in/${children}`} className=" block ml-auto "
        onMouseOver={() => setIsLinkHover(true)} onMouseLeave={() => setIsLinkHover(false)} >

        {isLinkHover ?


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path fill="currentColor" d="M21 4a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.586l-2.11 2.11a6 6 0 0 1 1.415 1.413L19 6.414V9a1 1 0 1 0 2 0zm-5.523 3.11A5.97 5.97 0 0 0 12 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7c0-1.296-.41-2.496-1.11-3.477l-6.183 6.184a1 1 0 0 1-1.414-1.414z" />
            </g>
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path fill="currentColor" d="M11 6a1 1 0 1 1 0 2H5v11h11v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm9-3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 5H15a1 1 0 1 1 0-2Z" />
            </g>
          </svg>
        }
      </a>
    </motion.div>
  );
}

const AnimatedList = memo(({ items, className = "", delay = 1000 }) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < items.length) {
      const timeout = setTimeout(() => {
        setDisplayedItems((prev) => [items[currentIndex], ...prev]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, items, delay]);

  return (
    <div className={`flex flex-col  items-center gap-4  max-h-96 w-64  sm:w-sm overflow-y-auto py-4 sm:px-8  ${className}`}>
      <AnimatePresence>
        {displayedItems.map((item, i) => (
          <AnimatedListItem key={item} index={i}>{item}</AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

export { AnimatedList, AnimatedListItem };
