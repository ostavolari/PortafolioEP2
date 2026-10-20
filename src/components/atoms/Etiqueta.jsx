import { Tag } from 'antd';

const Etiqueta = ({ children, color = 'blue' }) => <Tag color={color}>{children}</Tag>;

export default Etiqueta;
