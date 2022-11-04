
import{EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton} from 'antd';

const { Meta } = Card;

const Card_Item = ({ item , loading}) => {
  return (
    <>
      <Card
        style={{ width: 300, margin: "0 auto", boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)' }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={item.title}
            description={item.body}
          />
        </Skeleton>
      </Card>
    </>
  );
};

export default Card_Item;
