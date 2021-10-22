import {
  Header,
  Main,
  Pagination,
  Favorite,
  NotFound
} from '../components'
import { 
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom"

function ShopPage() {
  
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <Main />
            <Pagination />
          </Route>

          <Route exact path="/favorites">
            <Favorite />
          </Route>

          <Route exact path="/not-found" component={NotFound} />

          {/* <Route exact path="/:id" component={BookPage} /> */}

          <Redirect to="/not-found" />
        </Switch>
    </BrowserRouter>
  )
}

export default ShopPage;