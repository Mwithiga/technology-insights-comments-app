import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CommentsList from './features/comments/CommentsList';
import AddCommentForm from './features/comments/AddCommentForm'
import { Navbar } from './app/Navbar';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <React.Fragment>
            <AddCommentForm />
            <CommentsList />
          </React.Fragment>} />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
