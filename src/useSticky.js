import { useEffect, useState, useRef } from "react";
import debounce from "lodash/debounce";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null)

  const handleScroll = () => {
    return window.scrollY > element.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 100))
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    }
  }, [handleScroll])


  return { isSticky, element }
}

export default useSticky
