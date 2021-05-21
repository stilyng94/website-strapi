import React, { ReactNode } from 'react'
import Link from 'next/link'
import Meta from './Meta'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'SAYeTECH' }: Props) => (
  <div>
    <Meta title={title} />
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
    <article>
      {children}
    </article>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
