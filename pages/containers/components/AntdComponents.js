import { Select } from 'antd';
import 'antd/dist/antd.css';
export function AntdSelect(props) {
    const { Option } = Select;

    return (
        <Select defaultValue="lucy" style={{ width: 120 }}>
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
</Select>
);
}
export default AntdSelect;