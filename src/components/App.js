import {Switch , Route} from 'react-router-dom';
import { Navbar, CreatePost,Home,PostDetail } from './';

function App(){
    return (
        <div className='container'>
            <Navbar/>
            <switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="post/:postId" component={PostDetail}/>
                <Route exact path="/create-post" component={CreatePost} />
            </switch>
        </div>
    );
}

export default App;