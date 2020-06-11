import React , {useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';



const UserList =()=>
{
	const [users,setUsers] = useState([]);
	useEffect(()=>
	{const fetchData = async ()=>
	{
	const result= await axios.get('https://jsonplaceholder.typicode.com/users');
	setUsers(result.data);
    } ;
   fetchData();},[]);
	console.log(users)
	
	

	return(
		<div className='styleUsersList'>
         <h1>User's name</h1>
		<ul className="list-group">
		{users.map((user)=> <li className="list-group-item list-group-item-dark" key={user.id} > {user.name}</li> )}
		</ul>
		</div>)
}
export default UserList;