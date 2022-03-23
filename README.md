# Front-End Test

This is a solution to the Front-end Test.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Code](#code)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Login if the username and password are correct

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/)
- [React-Icons](https://react-icons.github.io/react-icons/search)
- [React-Paginate](https://www.npmjs.com/package/react-paginate)

### Code

```JavaScript
  {success ? (
        <Dashboard />
      ) : (
        <div className="form-container">
          <form onSubmit={handlerForm} className="form">
            <h2 className="form-title">Login Page</h2>
            <div className="input-container">
              <input
                id="username"
                className="input"
                type="text"
                placeholder="username"
                value={user.username}
                onChange={controlFormUsername}
              />
              <input
                id="password"
                className="input"
                type="password"
                placeholder="password"
                value={user.password}
                onChange={controlFormPassword}
              />
              <button className="input button">Login </button>
            </div>
          </form>
        </div>
      )}
```

The Code above shows that if success is true it will render a new component called Dashboard and vice-versa. Variable Success wil only became true if users input the username and password correctly. else variable success wil never be true

```js
export const fetchPost = () => {
  return (dispatch) => {
    dispatch(fetchPostReq);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const post = response.data;
        dispatch(fetchPostSuccess(post));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostFail(errorMsg));
      });
  };
};
```

The code above wil fetch the post data. before fetching i created a fetchPostReq, fetchPostSuccess and fetchPostFail action builder. it then will tell to the reducer function based on the fetching data. first it will tell to the reducer when fetching the data. after fetching, the outcomes will be resolved or rejected. if it is resolved the the fetchPostSuccess will take a parameter data and pass it to the reducer function as action.payload. the same case as rejected.

```js
const mapStateToProps = (state) => {
  return {
    id: state.id.id,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    userId: (id) => dispatch(userId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(LoginForm);
```

Code above is a react-redux code concept basically is to connect redux state to react component. mapStateToProps function will take state as a parameter and wil return state. The code above mapStateToProps return a state called id. mapDispatchToState is a function that takes in dispatch and returning an action function called userId. The above code mapDispatchToState return an userId and takes in id as a parameter. the name for both function could be name anything but this is name that used by everyone. and connect method is actually to connect both function to the react components as a props.

### Useful resources

- [Create Pagination in React APp](https://medium.com/how-to-react/create-pagination-in-react-js-using-react-hooks-c3c582ff5a96) - I able to create a pagination in this challenge by looking and reading the documentation in that website. -[React-Redux](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK) - I learn to implement redux in React is from watching and learning in this channel.

## Author

- Twitter - [@hermawangan39](https://twitter.com/hermawangan39)
- LinkedIn - [@hermawangan](https://www.linkedin.com/in/hermawan-gan/)
