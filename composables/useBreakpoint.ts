const screens = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const breakpoints = reactive({
  w: 0,
  h: 0,
  is: "xs",
  xsAndUp: false,
  smAndUp: false,
  mdAndUp: false,
  lgAndUp: false,
  xlAndDown: false,
  lgAndDown: false,
  mdAndDown: false,
  smAndDown: false,
});

const xs = (val: number) => val >= screens.xs && val < screens.sm;
const sm = (val: number) => val >= screens.sm && val < screens.md;
const md = (val: number) => val >= screens.md && val < screens.lg;
const lg = (val: number) => val >= screens.lg && val < screens.xl;
const xl = (val: number) => val >= screens.xl;

const getBreakpoint = (w: number) => {
  if (xs(w)) {
    breakpoints.xsAndUp = true;
    breakpoints.smAndUp = false;
    breakpoints.mdAndUp = false;
    breakpoints.lgAndUp = false;
    breakpoints.xlAndDown = true;
    breakpoints.lgAndDown = true;
    breakpoints.mdAndDown = true;
    breakpoints.smAndDown = true;
    return "xs";
  } else if (sm(w)) {
    breakpoints.xsAndUp = true;
    breakpoints.smAndUp = true;
    breakpoints.mdAndUp = false;
    breakpoints.lgAndUp = false;
    breakpoints.xlAndDown = true;
    breakpoints.lgAndDown = true;
    breakpoints.mdAndDown = true;
    breakpoints.smAndDown = true;
    return "sm";
  } else if (md(w)) {
    breakpoints.xsAndUp = true;
    breakpoints.smAndUp = true;
    breakpoints.mdAndUp = true;
    breakpoints.lgAndUp = false;
    breakpoints.xlAndDown = true;
    breakpoints.lgAndDown = true;
    breakpoints.mdAndDown = true;
    breakpoints.smAndDown = false;
    return "md";
  } else if (lg(w)) {
    breakpoints.xsAndUp = true;
    breakpoints.smAndUp = true;
    breakpoints.mdAndUp = true;
    breakpoints.lgAndUp = true;
    breakpoints.xlAndDown = true;
    breakpoints.lgAndDown = true;
    breakpoints.mdAndDown = false;
    breakpoints.smAndDown = false;
    return "lg";
  } else if (xl(w)) {
    breakpoints.xsAndUp = true;
    breakpoints.smAndUp = true;
    breakpoints.mdAndUp = true;
    breakpoints.lgAndUp = true;
    breakpoints.xlAndDown = true;
    breakpoints.lgAndDown = false;
    breakpoints.mdAndDown = false;
    breakpoints.smAndDown = false;
    return "xl";
  } else {
    breakpoints.xsAndUp = true;
    breakpoints.smAndUp = true;
    breakpoints.mdAndUp = false;
    breakpoints.lgAndUp = false;
    breakpoints.xlAndDown = false;
    breakpoints.lgAndDown = false;
    breakpoints.mdAndDown = false;
    breakpoints.smAndDown = false;
    return "all";
  }
};

const setBreakpoint = () => {
  breakpoints.w = window.innerWidth;
  breakpoints.h = window.innerHeight;
  breakpoints.is = getBreakpoint(window.innerWidth);
};

const useBreakpoint = () => {
  onMounted(() => {
    setBreakpoint();
    window.addEventListener("resize", () => {
      setBreakpoint();
    });
  });

  return {
    breakpoints,
  };
};

export default useBreakpoint;
