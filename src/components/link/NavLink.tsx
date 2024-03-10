import classNames from "classnames"
import { useLocation, Link } from "react-router-dom"
const LinkTo: React.FC<{
  to: string
  children: React.ReactNode
}> = ({ to, children }) => {
  const { pathname } = useLocation()
  const isActive = pathname === to
  return (
    <Link
      to={to}
      className={classNames(
        "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
        {
          "text-blue-700": isActive,
          "dark:text-blue-700": isActive,
        }
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  )
}

export default LinkTo
