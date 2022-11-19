import { Card, Col, Layout, Row, Typography } from "antd";
import { useHistory } from "react-router-dom";
import BackButton from "../../common/BackButton";
const {Header, Content} = Layout;
const {Title, Link} = Typography;



const CustomLayout = ({children, title,backTo, ...restProps}) => {
    const history = useHistory();

    const backLogin = () => {
        history.push("/");
    }

    return ( 
        <Layout {...restProps} style={{background: '#ececec', minHeight: "100vh"}}>
            <Header style={{background: '#ececec', margin: "20px"}}>
                <Link onClick={backLogin}><Title level={2}>MindStone Q&A</Title></Link>
            </Header>
            <Content>
                <Row justify="center" align="middle" >
                    <Card style={{width: "25%", minWidth: "400px"}}>
                    {backTo &&  <BackButton to={backLogin} />}
                    <Title level={2} style={{textAlign: "center"}}>{title}</Title>
                        <Col  style={{margin: "30px", minWidth: "300px"}} >
                            {children}
                        </Col>
                    </Card>
                </Row>
            </Content>
        </Layout>
     );
}
 
export default CustomLayout;