export enum Breakpoint {
  DESKTOP_MIN = 1300,
  LAPTOP_MAX = 1299,
  LAPTOP_MIN = 1025,
  TABLET_MAX = 1024,
  TABLET_MIN = 568,
  MOBILE_MAX = 567,
}

export enum ViewportSize {
  DESKTOP = 'desktop',
  LAPTOP = 'laptop',
  TABLET = 'tablet',
  MOBILE = 'mobile',
}

export function isDesktop(width: number): boolean {
  return Breakpoint.DESKTOP_MIN <= width;
}

export function isLaptop(width: number): boolean {
  return Breakpoint.LAPTOP_MIN <= width && width <= Breakpoint.LAPTOP_MAX;
}

export function isLaptopOrSmaller(width: number): boolean {
  return width <= Breakpoint.LAPTOP_MAX;
}

export function isTablet(width: number): boolean {
  return Breakpoint.TABLET_MIN <= width && width <= Breakpoint.TABLET_MAX;
}

export function isTabletOrSmaller(width: number): boolean {
  return width <= Breakpoint.TABLET_MAX;
}

export function isMobile(width: number): boolean {
  return width <= Breakpoint.MOBILE_MAX;
}

export function getViewportSize(width: number): ViewportSize {
  switch (true) {
    case isDesktop(width):
      return ViewportSize.DESKTOP;
    case isLaptop(width):
      return ViewportSize.LAPTOP;
    case isTablet(width):
      return ViewportSize.TABLET;
    default:
      return ViewportSize.MOBILE;
  }
}
