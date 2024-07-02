import type { IconsProps } from "../types/definitions";

export const IconHome = ({ strokeWidth = 1.5, className = "w-6 h-6" }: IconsProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

export const IconCaseros = ({ strokeWidth = 1.5, className = "w-6 h-6" }: IconsProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 9h8" />
    <path d="M8 13h6" />
    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
  </svg>
)

export const IconOnlyfans = ({ strokeWidth = 1.5, className = "w-6 h-6" }: IconsProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0 -13z" />
    <path d="M8.5 15a2.5 2.5 0 1 1 0 -5a2.5 2.5 0 0 1 0 5z" />
    <path d="M14 16c2.5 0 6.42 -1.467 7 -4h-6c3 -1 6.44 -3.533 7 -6h-4c-3.03 0 -3.764 -.196 -5 1.5" />
  </svg>
)

export const IconTelegram = ({ strokeWidth = 1.5, className = "w-6 h-6" }: IconsProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
  </svg>
)
