import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import user_default from './images/user_flat.png'

function TableUsuarios({users}) {

  //alert(props.users);

  const table_users = users.map((user) => (

    <tr>
      <td>
        <h4 className="ui image header">
          <img src={user_default} className="ui mini rounded image" />
          <div className="content">

            <div className="sub header">{user.email.toString()}
            </div>
          </div>
        </h4>
      </td>
      <td>
        {user.senha.toString()}
      </td>
    </tr>

  ));

  return (
    <table className="ui striped collapsing celled table">
      <thead>
        <tr><th>Email</th>
          <th>Senha</th>
        </tr></thead>
      <tbody>
        {table_users}
      </tbody>
    </table>
  );
}


export default TableUsuarios