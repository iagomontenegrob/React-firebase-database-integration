import React from 'react'
import img_user_default from '../statics/images/user_flat.png'


const UserTableItem = ({ user }) => {
  return (
    <tr>
      <td>
        <h4 className="ui image header">
          <img className="ui mini rounded image" src={img_user_default} alt="" />
          <div className="content">
            <div className="sub header">
              {user.email.toString()}
            </div>
          </div>
        </h4>
      </td>
      <td>
        {user.password.toString()}
      </td>
    </tr>
  );
}

export default UserTableItem;