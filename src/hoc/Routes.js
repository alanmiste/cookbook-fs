import { Switch, Route } from "react-router";
import MainLayout from "./MainLayout";
import Home from "../components/Pages/home";
import Pizza from "../components/Pages/pizza";

 
export default function Routes() {
    return (
       
        <Switch>
          <Route path='/' exact>
            <MainLayout>
              <Route component={Home} />
            </MainLayout>
          </Route>

          <Route path='/pizza' exact >
            <MainLayout>
              <Route component={Pizza} />
            </MainLayout>
          </Route>

          {/* <Route path='/users' exact >
            <SimpleLayout>
              <Route component={Users} />
            </SimpleLayout>
          </Route>
          <Route path='/user:id' exact component={User}>
            <SimpleLayout>
              <Route component={Users} />
            </SimpleLayout>
          </Route>

          <Redirect from='/login' to='/users' /> 

          <Route exact component={NotFound}>
            <SimpleLayout>
              <Route component={Users} />
            </SimpleLayout>
          </Route>*/}
        </Switch>

        )
}