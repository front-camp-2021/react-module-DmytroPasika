import {
  Header,
  Main,
  Pagination,
  Favorite,
  NotFound,
  ItemPage,
  Cart
} from '../components'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom"
import {
  MAIN,
  FAVORITE,
  ITEM_PAGE,
  CART
} from '../store/actions/card-lists.js'

function ShopPage() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header type={MAIN} />
          <Main />
          <Pagination />
        </Route>

        <Route exact path="/favorites">
          <Header type={FAVORITE} />
          <Favorite />
        </Route>

        <Route exact path="/Cart">
          <Header type={CART} />
          <Cart />
        </Route>

        <Route exact path="/not-found" component={NotFound} />

        <Route exact path="/item/:id" >
          <Header type={ITEM_PAGE} />
          <ItemPage />
        </Route>

        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  )
}

export default ShopPage;