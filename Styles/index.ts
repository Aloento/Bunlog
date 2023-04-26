/**
 * Make calc()
 * 
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Calc(...params: string[]) {
  return `calc(${params.join(" ")})`;
}

/**
 * Add unit suffix
 * 
 * @param suffix px
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Unit(val: number, suffix = "px") {
  return `${val}${suffix}`;
}
