import React from 'react'
import Typed from 'typed.js'
export default function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <>
      <ul id="bios" className="hidden">
        <li>I live in indonesia</li>
        <li>I love Music</li>
        <li>And i I Love Anime</li>
        <li>I love seafood, which is one of shrimp and fish</li>
      </ul>
      <span ref={el} className="text-lg text-neutral-900 dark:text-neutral-200" />
    </>
  )
}
