import "./IntersectionObserver.styles.scss";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import { LengthwiseLoad, WidthwiseLoad } from "./components"


export const IntersectionObserverContainer = () => {

  return (
    <section className="main-container io" >
      <header className="main-header co-layout  io" >
        <nav className="header-nav" >
          <span className="nav-link-layout io" >
            <Link to="/io/lengthwise" >Lengthwise</Link>
          </span>
          <span className="nav-link-layout io" >
            <Link to="/io/widthwise" >Scroll and Dragdealer</Link>
          </span>
        </nav>
      </header>
      <section className="main-content io" >
        <Switch >
          <Route path="/io/lengthwise" render={(props) => <LengthwiseLoad />} />
          <Route path="/io/widthwise" render={(props) => <WidthwiseLoad />} />
        </Switch>
      </section>
    </section>
  )
}