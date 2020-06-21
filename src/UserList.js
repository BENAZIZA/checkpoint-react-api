import React , {useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';



const UserList =()=>
{
	const [users,setUsers] = useState({list : []});
	useEffect(()=>
		{const fetchData = async ()=>
			{
				const result= await axios.get('https://jsonplaceholder.typicode.com/users');
				setUsers({list:result.data});
			} ;
			fetchData();},[]);
	return(
		<div className='styleUsersList'>
		<h1>User's name</h1>
		<table className="table table-striped">
		<thead>
		<tr>
		<th scope="col">id</th>
		<th scope="col">name</th>
		<th scope="col">username</th>
		<th scope="col">Email</th>
		<th scope="col">Adress</th>
		</tr>
		</thead>
		 <tbody>	
		{users.list.map((user)=> 
			<tr key={user.id}>
			<th scope="row" > {user.id}</th>
			<td  > {user.name}</td>
			<td  > {user.username}</td>
			<td  > {user.email}</td>
			<td  > {user.address.street}</td>
			</tr> 
			)}	
		</tbody>	
		</table>
		</div>)
		}
		export default UserList;