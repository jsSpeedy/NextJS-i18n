import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.div`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    opacity: 0.9;
  }
`;

export default ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
