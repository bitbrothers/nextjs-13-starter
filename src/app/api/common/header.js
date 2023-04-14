import { cache } from "./cache";

const defaultHeader = { "Content-Type": "application/json" };

const Header = cache.checkItem("accessToken")
  ? {
      ...defaultHeader,
      Authorization: `Bearer ${cache.getItem("accessToken")}`,
    }
  : defaultHeader;

export default Header;
