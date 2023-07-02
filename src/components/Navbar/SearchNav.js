import { Input, Space } from "antd";
const { Search } = Input;
const onSearch = (value) => console.log(value);
const SearchNav = () => (
  <Search
    placeholder="input search text"
    onSearch={onSearch}
    style={{
      width: 200,
      color: "#274c5b",
    }}
  />
);
export default SearchNav;
