

export const fetchData = async () => {
  console.log('api grab');

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };   

  // other api https://jsonplaceholder.typicode.com/users
  // api https://randomuser.me/api


  