import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";

const Column = [
    {
        Header: 'Username',
        accessor: 'login',
        Cell: ({ value, row }) => {
            return <Link name="ideas"
                to={{
                    pathname: "/selecteduser",
                    state: row.original
                }
                }
            >{value}</Link>
        }
    },
    {
        Header: 'Avtar',
        accessor: 'avatar_url',
        Cell: ({ value }) => {
            return <Avatar alt="Remy Sharp" src={value} style={{ width: "40px", height: "40px" }} />
        }
    }
]
export default Column