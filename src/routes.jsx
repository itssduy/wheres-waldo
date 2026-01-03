import App from "./App";
import Game from "./pages/game";
import Menu from "./pages/menu";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Menu/>
            },
            {
                path: 'game',
                element: <Game/>
            }
        ]
    }
]
export default routes;