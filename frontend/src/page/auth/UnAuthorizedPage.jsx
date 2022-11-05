import { Typography } from "antd";
const {Link, Text} = Typography;

const UnAuthorizedPage = () => {
    return ( <>
        <div style={{textAlign: 'center'}}>
            <Text>Bạn không có quyền truy cập trang này</Text>
            <Link to='/'>Đăng nhập</Link>
        </div>
    </> );
}
 
export default UnAuthorizedPage;