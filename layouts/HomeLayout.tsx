import { ReactNode } from 'react'
import Footer from '../components/Footer'
import SectionContainer from '../components/SectionContainer'

interface Props {
  children: ReactNode
  footer?: boolean
}

export default function HomeLayout({ children, footer = true }: Props) {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-evenly pt-6 md:pt-9">
        <main>{children}</main>
        {footer && <Footer />}
      </div>
    </SectionContainer>
  )
}
