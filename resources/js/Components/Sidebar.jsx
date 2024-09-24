import routes from "@/routes/Route"
import { Link } from "@inertiajs/react"
import cn from "classnames"

export default function Sidebar(){

    const dashboard = {
       name: "Udemy Inter.School",
       image: "/images/dashboardLogo.png"
    }

    const handleClickHamburger = () => {
        alert("hello")
    }
    return(
       <div className={cn("sideBar fixed h-full bg-main-color py-6 px-5 max-w-72 w-full")}>
              <div className="logoText grid justify-items-center border-b-2 relative">
                  <img src={dashboard.image} alt={dashboard.name}  />
                  <h2 className={cn("my-3 text-sm font-bold text-white text-center")}>{dashboard.name}</h2>
                  <div className={cn("hamburger w-16 h-auto absolute right-0 cursor-pointer")} onClick={handleClickHamburger}>
                  <img src="/images/hamburger.png" className={cn("w-auto h-auto object-contain")}/>
                  </div>
                  
              </div>

              <div className={cn("routeLink")}>
                  <ul>
                      {routes.map((route, index) => (
                        <li key={index} className={cn("my-3 text-white font-semibold text-sm")}><Link href={route.url}>{route.route}</Link></li>
                      ))}
                  </ul>
              </div>
       </div>
    )
}